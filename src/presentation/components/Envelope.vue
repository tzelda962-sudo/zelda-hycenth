<script setup lang="ts">
import { useInvitationStore } from "../state/invitationStore";
import { storeToRefs } from "pinia";
import PhotoCards from "./PhotoCards.vue";
import { useSiteContent } from "../../composables/useSiteContent";

const store = useInvitationStore();
const { isOpen } = storeToRefs(store);
const { getContent } = useSiteContent();

const toggleOpen = () => {
  if (!isOpen.value) {
    store.openInvitation();
  }
};
</script>

<template>
  <div class="relative flex items-center justify-center pt-24 pb-24">
    <!-- Envelope Container -->
    <!-- Envelope Container -->
    <!-- Reverted size to original (600px desktop) -->
    <!-- Removed scale from here to avoid flower artifacts -->
    <div
      class="relative w-[340px] h-[240px] md:w-[600px] md:h-[400px] transition-transform duration-1000 ease-in-out"
      :class="{ 'cursor-pointer': !isOpen }"
      @click="toggleOpen"
    >
      <!-- ============================================== -->
      <!-- OPEN STATE LAYERS (Visible when isOpen = true) -->
      <!-- ============================================== -->

      <!-- Flowers (Behind - Top Left) -->
      <!-- Reduced size and stricter positioning -->
      <!-- Flowers (Behind - Top Left) -->
      <!-- Visible in both states, snug positioning -->
      <!-- Z-30 to be in front of envelopes (z-10/z-20) but behind cards (z-40) -->
      <!-- Moves INWARD (positive translate) when open -->
      <!-- Rotation moved to parent so both images rotate together as a unit -->
      <!-- Flowers (Behind - Top Left) -->
      <!-- Adjusted for new assets -->
      <div
        class="absolute -top-48 -left-12 w-24 md:w-40 z-30 transition-all duration-1000 pointer-events-none origin-center"
        :class="
          isOpen
            ? 'translate-x-4 translate-y-20 -rotate-45'
            : 'translate-x-4 translate-y-16 -rotate-12'
        "
      >
        <img
          src="/images/generated/floral-corner-navy.png"
          class="w-full h-full object-contain"
          alt="Navy Floral Decor"
        />
      </div>

      <!-- Envelope Body (Open Back) -->
      <!-- Only visible when open -->
      <!-- Z-10 (Bottom Layer) -->
      <!-- Scales up individually to 1.6 -->
      <div
        class="absolute inset-0 z-10 transition-all duration-1000 transform origin-center"
        :class="isOpen ? 'opacity-100 scale-[1.6]' : 'opacity-0 scale-100'"
      >
        <img
          src="/images/original/envelope-back.png"
          class="w-full h-full object-contain drop-shadow-2xl"
        />

        <!-- Wax Seal (Open State) -->
        <div
          class="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <img
            :src="
              getContent(
                'image_wax_seal',
                '/images/generated/custom_wax_seal_zh.png',
              )
            "
            class="w-12 md:w-16 opacity-90 drop-shadow-md rounded-full overflow-hidden mix-blend-multiply"
          />
        </div>
      </div>

      <!-- Flowers (Front - Bottom Right) -->
      <!-- Adjusted for new assets -->
      <div
        class="absolute bottom-4 md:-bottom-8 -right-4 md:-right-8 w-28 md:w-48 z-30 transition-all duration-1000 delay-200 pointer-events-none origin-center flex items-center justify-center"
        :class="
          isOpen
            ? '-translate-x-10 translate-y-24 md:translate-y-48'
            : 'translate-0'
        "
      >
        <img
          src="/images/generated/floral-corner-navy.png"
          class="relative z-10 w-full h-full object-contain transform rotate-180"
          alt="Navy Floral Decor"
        />
      </div>

      <!-- Photo Cards Container (Inside) -->
      <!-- Now z-40 to be IN FRONT of flowers (z-20) and Back (z-10) -->
      <!-- Photo Cards Container (Inside) -->
      <!-- Now z-40 to be IN FRONT of flowers (z-20) and Back (z-10) -->
      <!-- Counter-scaled (scale-[0.7]) to keep cards slightly larger than original while envelope zooms (scale-1.6) -->
      <!-- Z-40 (Top Layer) to be IN FRONT of flowers -->
      <!-- Scales to 1.15 to match the previous relative visual size (1.6 * 0.7 = 1.12) -->
      <div
        class="absolute bottom-6 left-0 right-0 h-full flex justify-center items-end z-40 overflow-visible pointer-events-none transition-all duration-1000 ease-in-out origin-bottom"
        :class="isOpen ? 'opacity-100 scale-[1.15]' : 'opacity-0 scale-100'"
      >
        <PhotoCards :is-open="isOpen" />
      </div>

      <!-- ============================================== -->
      <!-- CLOSED STATE LAYERS (Visible when isOpen = false) -->
      <!-- ============================================== -->

      <!-- Closed Front Interface -->
      <!-- Sits on top (z-50) and fades out when clicked -->
      <!-- Z-20: In front of Open Back (z-10), but strictly BEHIND Flowers (z-30) -->
      <!-- Scales up to 1.6 as it fades out to match the zooming Open Envelope -->
      <div
        class="absolute inset-0 z-20 transition-all duration-700 ease-in-out flex items-center justify-center transform origin-center"
        :class="
          isOpen
            ? 'opacity-0 pointer-events-none scale-[1.6]'
            : 'opacity-100 scale-100'
        "
      >
        <!-- Main Closed Envelope Image -->
        <div class="relative w-full h-full">
          <img
            src="/images/original/envelope-front.png"
            class="w-full h-full object-contain"
            alt="Closed Envelope"
          />

          <!-- Wax Seal (Centered on the closed envelope) -->
          <!-- Positioning it manually based on visual center of the envelope image -->
          <div
            class="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 hover:scale-105 transition-transform"
          >
            <img
              :src="
                getContent(
                  'image_wax_seal',
                  '/images/generated/custom_wax_seal_zh.png',
                )
              "
              class="w-24 md:w-32 drop-shadow-lg rounded-full overflow-hidden mix-blend-multiply"
            />
          </div>

          <!-- Click Prompt -->
          <div
            class="absolute bottom-[-60px] md:bottom-[-80px] left-1/2 transform -translate-x-1/2 w-full text-center"
          >
            <p
              class="font-handwriting text-3xl md:text-5xl text-[#A87D3B] animate-pulse drop-shadow-sm font-bold"
            >
              Click to Open
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
