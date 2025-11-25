import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ConversionRequest {
  imageUrl: string;
  fileName: string;
  quality?: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;

    console.log('Starting WebP conversion...');

    const { imageUrl, fileName, quality = 80 }: ConversionRequest = await req.json();

    if (!imageUrl || !fileName) {
      throw new Error('imageUrl and fileName are required');
    }

    console.log(`Converting ${fileName} from ${imageUrl}`);

    // Fetch the original image
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }

    const imageBlob = await imageResponse.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();
    const base64Image = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    const dataUrl = `data:${imageBlob.type};base64,${base64Image}`;

    console.log(`Image fetched, size: ${arrayBuffer.byteLength} bytes`);

    // Use Lovable AI to convert the image to WebP
    // We'll ask the AI to return the same image but optimize it
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Convert this image to WebP format with ${quality}% quality. Maintain the exact same content and resolution, just optimize the format.`
              },
              {
                type: 'image_url',
                image_url: {
                  url: dataUrl
                }
              }
            ]
          }
        ],
        modalities: ['image', 'text']
      })
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI conversion failed:', errorText);
      throw new Error(`AI conversion failed: ${errorText}`);
    }

    const aiData = await aiResponse.json();
    console.log('AI response received');

    // Extract the converted image
    const convertedImageUrl = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!convertedImageUrl) {
      throw new Error('No converted image returned from AI');
    }

    // Convert base64 to blob
    const base64Data = convertedImageUrl.split(',')[1];
    const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    
    // Save to Supabase Storage
    const supabase = createClient(supabaseUrl, supabaseKey);
    const newFileName = fileName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('converted-images')
      .upload(newFileName, binaryData, {
        contentType: 'image/webp',
        upsert: true
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('converted-images')
      .getPublicUrl(newFileName);

    console.log(`Image converted and uploaded: ${newFileName}`);

    return new Response(
      JSON.stringify({
        success: true,
        fileName: newFileName,
        url: publicUrlData.publicUrl,
        originalSize: arrayBuffer.byteLength,
        message: `Successfully converted ${fileName} to WebP format`
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error converting image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
