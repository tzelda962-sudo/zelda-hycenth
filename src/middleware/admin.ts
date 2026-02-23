export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  // Protect all routes applying this middleware
  if (!user.value) {
    return navigateTo("/admin/login");
  }
});
