<script setup lang="ts">
import { useSiteContent } from "../../../composables/useSiteContent";

const { getContent } = useSiteContent();
</script>

<template>
  <div class="flex flex-col items-center text-center z-10 w-full mb-12">
    <!-- Occasion -->
    <p
      class="font-serif font-black tracking-widest text-[#A87D3B] mt-16 md:mt-24 mb-6 text-2xl md:text-3xl uppercase drop-shadow-md"
    >
      {{ getContent("invitation_title", "INVITATION") }}
    </p>

    <!-- Names -->
    <div class="relative w-full max-w-4xl mx-auto mb-8">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12"
      >
        <h1 class="font-handwriting text-7xl md:text-9xl text-[#152146]">
          {{ getContent("couple_name_1", "Zelda") }}
        </h1>
        <span class="font-handwriting text-5xl md:text-7xl text-[#A87D3B]">
          &amp;
        </span>
        <h1 class="font-handwriting text-7xl md:text-9xl text-[#152146]">
          {{ getContent("couple_name_2", "Hycenth") }}
        </h1>
      </div>
    </div>

    <!-- Celebration Subtitle -->
    <div class="max-w-2xl mx-auto">
      <p
        class="font-serif text-[#A87D3B] text-lg md:text-xl uppercase leading-relaxed tracking-wider border-t border-b border-[#152146]/20 py-4"
      >
        {{
          getContent(
            "invitation_subtitle",
            "You are invited to join us in celebrating our 16th Wedding Anniversary and Church Blessings",
          )
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
