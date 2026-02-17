// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // SPA mode for this interactive experience
  srcDir: "src/",
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  devtools: { enabled: false },
  compatibilityDate: "2026-02-16",
});
