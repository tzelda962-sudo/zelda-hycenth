<script setup lang="ts">
import { useInvitationStore } from "./presentation/state/invitationStore";
import { storeToRefs } from "pinia";
import Envelope from "./presentation/components/Envelope.vue";
import MainInvitationContent from "./presentation/components/MainInvitationContent.vue";

const store = useInvitationStore();
const { isOpen } = storeToRefs(store);
</script>

<template>
  <div class="relative w-full min-h-screen overflow-x-hidden bg-[#e0e0e0]">
    <!-- Fixed Background -->
    <div class="absolute top-0 left-0 w-full h-screen z-0">
      <img
        src="/images/original/beach-background.jpg"
        alt="Background"
        class="w-full h-full object-cover opacity-100"
      />
    </div>

    <!-- Main Content Container -->
    <div
      class="relative z-10 w-full flex flex-col pt-32 transition-all duration-1000"
      :class="isOpen ? 'min-h-screen' : 'h-screen overflow-hidden'"
    >
      <!-- Envelope Section -->
      <!-- Center the envelope specifically -->
      <div
        class="w-full flex-grow flex items-center justify-center relative z-40 transition-all duration-1000 ease-in-out"
        :class="{ 'mb-12': isOpen }"
      >
        <Envelope />
      </div>

      <!-- Main Invitation Content (Revealed on Open) -->
      <!-- Full width, no max-width constraints -->
      <div
        class="relative w-full transition-all duration-1000 delay-500"
        :class="{
          'opacity-0 translate-y-20 pointer-events-none absolute bottom-0':
            !isOpen,
          'opacity-100 translate-y-0 relative': isOpen,
        }"
      >
        <MainInvitationContent />
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap");

html {
  font-family: "Montserrat", sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: #2c3e50; /* Fallback */
}
</style>
