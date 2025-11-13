-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create storage bucket for jurado submissions
INSERT INTO storage.buckets (id, name, public) 
VALUES ('jurado-submissions', 'jurado-submissions', false);

-- Create table for jurado applications
CREATE TABLE public.jurado_cosplay_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  idade INTEGER NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  concursos_ganhos TEXT NOT NULL,
  eventos_juri TEXT NOT NULL,
  foto_juri_urls TEXT[] NOT NULL DEFAULT '{}',
  seguidores_count TEXT NOT NULL,
  video_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  pontuacao INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.jurado_cosplay_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can insert applications" 
ON public.jurado_cosplay_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own applications" 
ON public.jurado_cosplay_applications 
FOR SELECT 
USING (email = auth.jwt()->>'email');

-- Storage policies for jurado submissions
CREATE POLICY "Anyone can upload jurado files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'jurado-submissions');

CREATE POLICY "Users can view their own submissions" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'jurado-submissions');

-- Create trigger for timestamps
CREATE TRIGGER update_jurado_applications_updated_at
BEFORE UPDATE ON public.jurado_cosplay_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();