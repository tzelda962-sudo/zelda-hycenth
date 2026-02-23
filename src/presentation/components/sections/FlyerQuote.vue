<script setup lang="ts">
import { useSiteContent } from "../../../composables/useSiteContent";

const { getContent } = useSiteContent();
</script>

<template>
  <div class="relative w-full mt-8 mb-16 pt-16 md:pt-24">
    <!-- Asymmetric Floral Cluster -->
    <div
      class="absolute -top-24 -left-16 md:-left-4 w-64 md:w-96 pointer-events-none z-30 transform -rotate-12"
    >
      <img
        src="/images/generated/floral-cluster-navy.png"
        class="w-full h-full object-contain"
        alt="Floral Cluster"
      />
    </div>

    <!-- Asymmetric Floral Cluster (Bottom Right) -->
    <div
      class="absolute -bottom-24 -right-16 md:-right-4 w-64 md:w-96 pointer-events-none z-30 transform rotate-168"
    >
      <img
        src="/images/generated/floral-cluster-navy.png"
        class="w-full h-full object-contain"
        alt="Floral Cluster"
      />
    </div>

    <!-- Centered Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
      <blockquote
        class="font-serif italic text-2xl md:text-3xl text-[#152146] leading-relaxed mb-6"
      >
        {{
          getContent(
            "bible_verse_text",
            "“Love bears every burden, believes in every promise, and endures every storm.”",
          )
        }}
      </blockquote>
      <cite
        class="block font-serif text-[#A87D3B] text-lg md:text-xl uppercase tracking-widest not-italic"
      >
        {{ getContent("bible_verse_reference", "1 Corinthians 13:7-8") }}
      </cite>

      <!-- Year -->
      <div class="mt-12 text-center">
        <span
          class="font-serif text-4xl md:text-5xl text-[#00274D] font-bold tracking-widest"
        >
          {{ getContent("event_year", "2026") }}
        </span>
      </div>
    </div>
  </div>
</template>
