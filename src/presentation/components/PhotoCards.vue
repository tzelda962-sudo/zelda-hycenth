<script setup lang="ts">
import { useSiteContent } from "../../composables/useSiteContent";

defineProps<{
  isOpen: boolean;
}>();

const { getContent } = useSiteContent();
</script>

<template>
  <div class="w-full h-full relative">
    <!-- Photo 1 (Left) -->
    <div
      class="absolute left-1/2 top-1/2 w-48 h-60 md:w-64 md:h-80 bg-white p-2 transition-all duration-1000 delay-300 ease-out origin-bottom-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      :class="
        isOpen
          ? '-translate-x-[80%] -translate-y-[70%] -rotate-12 scale-100'
          : '-translate-x-1/2 -translate-y-[40%] rotate-0 scale-95 opacity-0'
      "
      style="z-index: 5"
    >
      <div class="w-full h-[75%] overflow-hidden mb-2">
        <img
          :src="getContent('image_couple', '/images/generated/original.jpeg')"
          class="w-full h-full object-contain"
          alt="Couple Photo"
        />
      </div>
      <p class="font-handwriting text-center text-gray-800 text-xl font-bold">
        Böblingen
      </p>
    </div>

    <!-- Photo 2 (Right) -->
    <div
      class="absolute left-1/2 top-1/2 w-48 h-60 md:w-64 md:h-80 bg-white p-2 transition-all duration-1000 delay-300 ease-out origin-bottom-right shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      :class="
        isOpen
          ? '-translate-x-[20%] -translate-y-[65%] rotate-6 scale-100'
          : '-translate-x-1/2 -translate-y-[40%] rotate-0 scale-95 opacity-0'
      "
      style="z-index: 6"
    >
      <div class="w-full h-[75%] overflow-hidden mb-2">
        <img
          src="/images/generated/photo-couple-symbolic.png"
          class="w-full h-full object-cover"
        />
      </div>
      <p class="font-handwriting text-center text-gray-800 text-xl font-bold">
        Zelda & Hycenth
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
