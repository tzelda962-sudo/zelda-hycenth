<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-[#0E4D65] mb-24 w-full max-w-4xl mx-auto"
  >
    <!-- Location -->
    <div class="flex flex-col items-center">
      <h3
        class="font-serif text-2xl md:text-4xl uppercase tracking-widest mb-2 text-[#0E4D65]"
      >
        Böblingen
      </h3>
      <div class="w-12 h-0.5 bg-[#8B4513] my-2"></div>
      <p class="font-serif text-xl md:text-2xl uppercase text-[#0E4D65]">
        Germany
      </p>
    </div>

    <!-- Divider (Vertical on desktop, Horizontal on mobile) -->
    <div class="hidden md:block w-px h-24 bg-[#D4AF37]"></div>

    <!-- Rings Icon (Center) -->
    <div class="w-24 md:w-32 mx-4">
      <img
        src="/images/generated/rings-gold.png"
        alt="Wedding Rings"
        class="w-full h-auto object-contain drop-shadow-md"
      />
    </div>

    <!-- Divider (Vertical on desktop, Horizontal on mobile) -->
    <div class="hidden md:block w-px h-24 bg-[#D4AF37]"></div>

    <!-- Date/Time -->
    <div class="flex flex-col items-center">
      <h3
        class="font-serif text-2xl md:text-4xl uppercase tracking-widest mb-2 text-[#0E4D65]"
      >
        September 12
      </h3>
      <div class="w-12 h-0.5 bg-[#8B4513] my-2"></div>
      <p class="font-serif text-xl md:text-2xl uppercase text-[#0E4D65]">
        16:00 Prompt
      </p>
    </div>
  </div>
</template>
