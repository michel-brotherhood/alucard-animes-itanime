import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

// List of all PNG/JPG images that need conversion
const IMAGES_TO_CONVERT = [
  { path: "src/assets/alucard-animes-logo.png", name: "alucard-animes-logo.png" },
  { path: "src/assets/anime-nikity-logo.png", name: "anime-nikity-logo.png" },
  { path: "src/assets/animeke-background.jpg", name: "animeke-background.jpg" },
  { path: "src/assets/board-games.jpg", name: "board-games.jpg" },
  { path: "src/assets/cosplay-1.jpg", name: "cosplay-1.jpg" },
  { path: "src/assets/cosplay-2.jpg", name: "cosplay-2.jpg" },
  { path: "src/assets/cosplay-3.jpg", name: "cosplay-3.jpg" },
  { path: "src/assets/cosplay-4.jpg", name: "cosplay-4.jpg" },
  { path: "src/assets/cosplay-5.jpg", name: "cosplay-5.jpg" },
  { path: "src/assets/cosplay-6.jpg", name: "cosplay-6.jpg" },
  { path: "src/assets/cosplay-7.jpg", name: "cosplay-7.jpg" },
  { path: "src/assets/cosplay-8.jpg", name: "cosplay-8.jpg" },
  { path: "src/assets/cosplay-9.jpg", name: "cosplay-9.jpg" },
  { path: "src/assets/cosplay-10.jpg", name: "cosplay-10.jpg" },
  { path: "src/assets/cosplay-11.jpg", name: "cosplay-11.jpg" },
  { path: "src/assets/cosplay-12.jpg", name: "cosplay-12.jpg" },
  { path: "src/assets/event-photo-1.jpg", name: "event-photo-1.jpg" },
  { path: "src/assets/event-photo-2.jpg", name: "event-photo-2.jpg" },
  { path: "src/assets/event-photo-3.jpg", name: "event-photo-3.jpg" },
  { path: "src/assets/event-photo-4.jpg", name: "event-photo-4.jpg" },
  { path: "src/assets/event-photo-5.jpg", name: "event-photo-5.jpg" },
  { path: "src/assets/event-photo-6.jpg", name: "event-photo-6.jpg" },
  { path: "src/assets/event-photo-7.jpg", name: "event-photo-7.jpg" },
  { path: "src/assets/event-photo-8.jpg", name: "event-photo-8.jpg" },
  { path: "src/assets/event-photo-9.jpg", name: "event-photo-9.jpg" },
  { path: "src/assets/fifa-2025.jpg", name: "fifa-2025.jpg" },
  { path: "src/assets/friburgo-geek-icon.png", name: "friburgo-geek-icon.png" },
  { path: "src/assets/friburgo-geek-logo.png", name: "friburgo-geek-logo.png" },
  { path: "src/assets/games-background.jpg", name: "games-background.jpg" },
  { path: "src/assets/hero-anime.jpg", name: "hero-anime.jpg" },
  { path: "src/assets/itanime-photo-1.jpg", name: "itanime-photo-1.jpg" },
  { path: "src/assets/itanime-photo-2.jpg", name: "itanime-photo-2.jpg" },
  { path: "src/assets/itanime-photo-3.jpg", name: "itanime-photo-3.jpg" },
  { path: "src/assets/itanime-photo-4.jpg", name: "itanime-photo-4.jpg" },
  { path: "src/assets/itanime-photo-5.jpg", name: "itanime-photo-5.jpg" },
  { path: "src/assets/itanime-photo-6.jpg", name: "itanime-photo-6.jpg" },
  { path: "src/assets/just-dance.jpg", name: "just-dance.jpg" },
  { path: "src/assets/kpop-background.jpg", name: "kpop-background.jpg" },
  { path: "src/assets/logo-fg.png", name: "logo-fg.png" },
  { path: "src/assets/mortal-kombat-1.png", name: "mortal-kombat-1.png" },
  { path: "src/assets/retro-games.jpg", name: "retro-games.jpg" },
  { path: "src/assets/street-fighter-6.jpg", name: "street-fighter-6.jpg" },
  { path: "src/assets/street-fighter-6.png", name: "street-fighter-6.png" },
  { path: "src/assets/tekken-8.png", name: "tekken-8.png" },
  { path: "src/assets/vendor-booths.jpg", name: "vendor-booths.jpg" },
  { path: "src/assets/wood-games.jpg", name: "wood-games.jpg" },
  // Timeline images
  { path: "src/assets/timeline-2000.png", name: "timeline-2000.png" },
  { path: "src/assets/timeline-2001.png", name: "timeline-2001.png" },
  { path: "src/assets/timeline-2002-badge.png", name: "timeline-2002-badge.png" },
  { path: "src/assets/timeline-2002-otaku.png", name: "timeline-2002-otaku.png" },
  { path: "src/assets/timeline-2003-alucard.png", name: "timeline-2003-alucard.png" },
  { path: "src/assets/timeline-2003-cvg.png", name: "timeline-2003-cvg.png" },
  { path: "src/assets/timeline-2004-2008.png", name: "timeline-2004-2008.png" },
  { path: "src/assets/timeline-2009.png", name: "timeline-2009.png" },
  { path: "src/assets/timeline-2010-cnpj.png", name: "timeline-2010-cnpj.png" },
  { path: "src/assets/timeline-2010-nikity.png", name: "timeline-2010-nikity.png" },
  { path: "src/assets/timeline-2011-gakkou.png", name: "timeline-2011-gakkou.png" },
  { path: "src/assets/timeline-2012-hentai.png", name: "timeline-2012-hentai.png" },
  { path: "src/assets/timeline-2012-loja.png", name: "timeline-2012-loja.png" },
  { path: "src/assets/timeline-2013-events.png", name: "timeline-2013-events.png" },
  { path: "src/assets/timeline-2016-bh.png", name: "timeline-2016-bh.png" },
  { path: "src/assets/timeline-2016-goncageek.png", name: "timeline-2016-goncageek.png" },
  { path: "src/assets/timeline-2017-nitgeek.png", name: "timeline-2017-nitgeek.png" },
  { path: "src/assets/timeline-2018-faf.png", name: "timeline-2018-faf.png" },
  { path: "src/assets/timeline-2019-geekinrio.png", name: "timeline-2019-geekinrio.png" },
  { path: "src/assets/timeline-2022-animegonca.png", name: "timeline-2022-animegonca.png" },
  { path: "src/assets/timeline-2024-2025-nitferias.png", name: "timeline-2024-2025-nitferias.png" },
];

interface ConversionStatus {
  fileName: string;
  status: 'pending' | 'converting' | 'success' | 'error';
  message?: string;
  url?: string;
}

const ConvertImages = () => {
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statuses, setStatuses] = useState<ConversionStatus[]>([]);

  const convertImage = async (image: typeof IMAGES_TO_CONVERT[0]): Promise<ConversionStatus> => {
    try {
      // Get the full URL for the image
      const imageUrl = `${window.location.origin}/${image.path}`;
      
      const { data, error } = await supabase.functions.invoke('convert-to-webp', {
        body: {
          imageUrl,
          fileName: image.name,
          quality: 80
        }
      });

      if (error) throw error;

      return {
        fileName: image.name,
        status: 'success',
        message: data.message,
        url: data.url
      };
    } catch (error: any) {
      return {
        fileName: image.name,
        status: 'error',
        message: error.message
      };
    }
  };

  const startConversion = async () => {
    setConverting(true);
    setProgress(0);
    setStatuses([]);

    const totalImages = IMAGES_TO_CONVERT.length;
    let completed = 0;

    for (const image of IMAGES_TO_CONVERT) {
      setStatuses(prev => [...prev, { fileName: image.name, status: 'converting' }]);
      
      const result = await convertImage(image);
      
      setStatuses(prev => 
        prev.map(s => s.fileName === image.name ? result : s)
      );

      completed++;
      setProgress((completed / totalImages) * 100);

      if (result.status === 'success') {
        toast.success(`✅ ${image.name} convertido com sucesso!`);
      } else {
        toast.error(`❌ Erro ao converter ${image.name}`);
      }
    }

    setConverting(false);
    toast.success('🎉 Conversão concluída!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary via-secondary to-primary">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-accent/30">
          <CardHeader>
            <CardTitle className="text-3xl font-black text-accent text-center">
              Conversão de Imagens para WebP
            </CardTitle>
            <p className="text-white/80 text-center mt-2">
              Converta todas as imagens PNG/JPG para WebP com 80% de qualidade
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Total de imagens:</span>
                <span className="text-accent text-xl font-black">{IMAGES_TO_CONVERT.length}</span>
              </div>
              
              {converting && (
                <div className="space-y-2">
                  <Progress value={progress} className="h-3" />
                  <p className="text-white/60 text-sm text-center">
                    {Math.round(progress)}% concluído
                  </p>
                </div>
              )}

              <Button
                onClick={startConversion}
                disabled={converting}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-black text-lg py-6"
              >
                {converting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Convertendo...
                  </>
                ) : (
                  'Iniciar Conversão'
                )}
              </Button>
            </div>

            {statuses.length > 0 && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {statuses.map((status, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                  >
                    <span className="text-white text-sm truncate flex-1">
                      {status.fileName}
                    </span>
                    <div className="flex items-center gap-2">
                      {status.status === 'converting' && (
                        <Loader2 className="w-4 h-4 text-accent animate-spin" />
                      )}
                      {status.status === 'success' && (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      )}
                      {status.status === 'error' && (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ConvertImages;
