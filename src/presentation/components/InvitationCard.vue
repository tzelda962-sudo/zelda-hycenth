<template>
  <div
    class="w-full h-full bg-white p-6 shadow-xl flex flex-col items-center justify-center text-center font-serif text-gray-800 border-4 border-gray-100 transform transition-transform duration-1000"
  >
    <div class="absolute top-4 right-4 text-xs text-gray-400">
      RSVP by May 1st
    </div>

    <h1 class="text-4xl md:text-5xl font-dancing-script mb-4 text-pink-600">
      Erica & Mictor
    </h1>

    <div class="w-16 h-1 bg-pink-200 mb-6"></div>

    <p class="text-lg mb-2 italic">Request the honor of your presence</p>
    <p class="text-xl font-bold mb-6">at their wedding</p>

    <div class="flex flex-col gap-1 mb-8">
      <span class="text-2xl font-bold">Saturday, June 15th</span>
      <span class="text-lg">2026</span>
      <span class="text-md text-gray-500">at 4:00 PM</span>
    </div>

    <div class="border-t border-b border-gray-200 py-4 w-3/4">
      <p class="text-lg font-medium">Sunset Beach Resort</p>
      <p class="text-sm text-gray-500">Maui, Hawaii</p>
    </div>

    <button
      class="mt-8 px-8 py-2 border border-pink-500 text-pink-600 hover:bg-pink-50 transition-colors uppercase tracking-widest text-sm"
    >
      RSVP Now
    </button>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.font-dancing-script {
  font-family: "Dancing Script", cursive;
}

.font-serif {
  font-family: "Playfair Display", serif;
}
</style>
