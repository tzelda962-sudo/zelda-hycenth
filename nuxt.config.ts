// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // SPA mode for this interactive experience
  srcDir: "src/",
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-swiper",
  ],
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  typescript: {
    strict: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  devtools: { enabled: false },
  compatibilityDate: "2026-02-16",
});
