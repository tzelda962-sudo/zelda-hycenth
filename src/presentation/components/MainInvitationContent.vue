<script setup lang="ts">
import FlyerHeader from "./sections/FlyerHeader.vue";
import FlyerQuote from "./sections/FlyerQuote.vue";
import FlyerFooter from "./sections/FlyerFooter.vue";
import FlyerTimeline from "./sections/FlyerTimeline.vue";
import FlyerAccommodations from "./sections/FlyerAccommodations.vue";
import FlyerRSVP from "./sections/FlyerRSVP.vue";
import FlyerBridalParty from "./sections/FlyerBridalParty.vue";
import FlyerDivider from "./sections/FlyerDivider.vue";
</script>

<template>
  <div
    class="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-12 overflow-hidden bg-[#F6F7EC]"
  >
    <!-- Background Texture (Optional) -->
    <div
      class="absolute inset-0 opacity-20 pointer-events-none"
      style="
        background-image: url(&quot;/images/generated/beach_sand_texture.png&quot;);
      "
    ></div>

    <!-- Floral Corners -->
    <!-- Top Left -->
    <div class="absolute top-0 left-0 w-32 md:w-64 pointer-events-none z-0">
      <img
        src="/images/generated/floral-corner-navy.png"
        class="w-full h-auto object-contain transform -scale-x-100"
      />
    </div>
    <!-- Top Right -->
    <div class="absolute top-0 right-0 w-32 md:w-64 pointer-events-none z-0">
      <img
        src="/images/generated/floral-corner-navy.png"
        class="w-full h-auto object-contain"
      />
    </div>
    <!-- Bottom Left -->
    <div class="absolute bottom-0 left-0 w-32 md:w-64 pointer-events-none z-0">
      <img
        src="/images/generated/floral-corner-navy.png"
        class="w-full h-auto object-contain transform -scale-x-100 -scale-y-100"
      />
    </div>
    <!-- Bottom Right -->
    <div class="absolute bottom-0 right-0 w-32 md:w-64 pointer-events-none z-0">
      <img
        src="/images/generated/floral-corner-navy.png"
        class="w-full h-auto object-contain transform -scale-y-100"
      />
    </div>

    <!-- Sidebars -->
    <!-- Left Sidebar -->
    <div
      class="absolute top-1/2 left-0 w-16 md:w-24 h-3/4 -translate-y-1/2 pointer-events-none z-0 hidden lg:block"
    >
      <img
        src="/images/generated/floral-sidebar-navy.png"
        class="w-full h-full object-contain object-left opacity-80"
      />
    </div>
    <!-- Right Sidebar -->
    <div
      class="absolute top-1/2 right-0 w-16 md:w-24 h-3/4 -translate-y-1/2 pointer-events-none z-0 hidden lg:block"
    >
      <img
        src="/images/generated/floral-sidebar-navy.png"
        class="w-full h-full object-contain object-right opacity-80 transform -scale-x-100"
      />
    </div>

    <!-- Main Content Container (Card-like) -->
    <div class="relative z-10 w-full max-w-5xl flex flex-col items-center">
      <FlyerHeader />

      <FlyerDivider />
      <FlyerQuote class="w-screen max-w-none -mx-[calc(50vw-50%)]" />

      <!-- Restored Sections -->
      <FlyerTimeline class="w-screen max-w-none -mx-[calc(50vw-50%)]" />
      <FlyerAccommodations class="w-screen max-w-none -mx-[calc(50vw-50%)]" />

      <FlyerRSVP class="w-screen max-w-none -mx-[calc(50vw-50%)] mb-16" />

      <!-- Bridal Party Phase 2 Addition -->
      <FlyerBridalParty class="w-screen max-w-none -mx-[calc(50vw-50%)]" />

      <FlyerDivider />

      <FlyerFooter />
    </div>
  </div>
</template>

<style scoped>
/* Ensure fonts are available */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap");
</style>
