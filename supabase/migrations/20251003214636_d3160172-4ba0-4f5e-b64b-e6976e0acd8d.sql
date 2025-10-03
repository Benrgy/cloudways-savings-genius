-- Add policy for content managers to view all posts (including drafts)
CREATE POLICY "Content managers can view all posts"
ON public.posts
FOR SELECT
TO authenticated
USING (public.is_content_manager(auth.uid()));

-- Add policy for users to view their own roles (optional but useful for UI)
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());