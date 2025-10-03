-- Fix search path security issue by dropping trigger first
DROP TRIGGER IF EXISTS update_posts_updated_at ON public.posts;
DROP FUNCTION IF EXISTS public.update_posts_updated_at();

CREATE OR REPLACE FUNCTION public.update_posts_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();