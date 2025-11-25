-- Create storage bucket for converted images
INSERT INTO storage.buckets (id, name, public)
VALUES ('converted-images', 'converted-images', true)
ON CONFLICT (id) DO NOTHING;