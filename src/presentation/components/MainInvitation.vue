<script setup lang="ts">
// Main Invitation Content
</script>

<template>
  <div>
    <!-- 1. Header / Intro (PBznF7ZyYKp7zqc6) -->
    <section
      class="w-full bg-repeat text-[#401015] font-serif relative py-12 md:py-24 px-6 md:px-16"
      style="
        background-image: url(&quot;/images/generated/beach_sand_texture.png&quot;);
      "
    >
      <!-- Two separate containers (Text & Image) on the sand background -->
      <div
        class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
      >
        <!-- Left Column: Typography & Text -->
        <div
          class="relative flex flex-col justify-center items-center text-center p-4 md:p-8 z-10 w-full"
        >
          <!-- Intro -->
          <p class="font-serif italic text-lg md:text-xl text-[#401015] mb-4">
            Together with our families
          </p>

          <!-- Names -->
          <div class="mb-10 relative w-full max-w-4xl mx-auto">
            <!-- Grid for Names -->
            <div
              class="grid grid-cols-2 gap-x-24 md:gap-x-40 gap-y-4 md:gap-y-6 leading-none"
            >
              <!-- Top Left -->
              <h1
                class="font-handwriting text-5xl md:text-7xl text-[#401015] text-right whitespace-nowrap pr-8 md:pr-16"
              >
                Erica
              </h1>
              <!-- Top Right -->
              <h1
                class="font-handwriting text-5xl md:text-7xl text-[#401015] text-left whitespace-nowrap"
              >
                Mictor
              </h1>

              <!-- Bottom Left -->
              <h1
                class="font-handwriting text-5xl md:text-7xl text-[#401015] text-right whitespace-nowrap transform translate-x-6 md:translate-x-10 pr-8 md:pr-16"
              >
                Njong
              </h1>
              <!-- Bottom Right -->
              <h1
                class="font-handwriting text-5xl md:text-7xl text-[#401015] text-left whitespace-nowrap transform translate-x-6 md:translate-x-10"
              >
                Mengot
              </h1>
            </div>

            <!-- Centered Ampersand -->
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
            >
              <span
                class="font-handwriting text-7xl md:text-9xl text-[#401015]"
              >
                &
              </span>
            </div>
          </div>

          <!-- Invite Text -->
          <p
            class="font-serif italic text-base md:text-lg text-[#401015] mb-8 max-w-lg leading-relaxed"
          >
            Invite you to join us as we celebrate the beginning of our new life
            together
          </p>

          <!-- Date Display -->
          <div
            class="flex items-center justify-center gap-4 mb-10 text-[#401015]"
          >
            <!-- Day Name -->
            <div class="border-t border-b border-[#401015] py-2 px-4">
              <span class="font-handwriting text-3xl md:text-4xl"
                >Saturday</span
              >
            </div>

            <!-- Date/Year -->
            <div
              class="flex flex-col items-center leading-none border-l border-r border-[#401015] px-3 py-1"
            >
              <span class="font-handwriting text-4xl md:text-5xl">20</span>
              <span class="font-handwriting text-3xl md:text-4xl mt-1"
                >2025</span
              >
            </div>

            <!-- Month -->
            <div class="border-t border-b border-[#401015] py-2 px-4">
              <span class="font-handwriting text-3xl md:text-4xl"
                >December</span
              >
            </div>
          </div>

          <!-- Details -->
          <div class="grid grid-cols-2 gap-8 text-[#401015] w-full max-w-md">
            <div class="text-center">
              <h3 class="font-serif font-bold text-lg mb-1 italic">
                Nuptial Blessing
              </h3>
              <p class="text-base mb-1">2:00 pm</p>
              <p class="font-serif italic text-sm">Hotel Ilomba</p>
              <p class="font-serif italic text-sm">Bwambe, Kribi</p>
            </div>
            <div class="text-center">
              <h3 class="font-serif font-bold text-lg mb-1 italic">
                Wedding Reception
              </h3>
              <p class="text-base mb-1">5:00 pm</p>
              <p class="font-serif italic text-sm">
                Kribi Golf and Country Club
              </p>
              <p class="font-serif italic text-sm">Bikondo, Kribi</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Photo & Florals -->
        <!-- Added max-w-md to constrain image size -->
        <div
          class="relative w-full max-w-md mx-auto h-auto aspect-[3/4] rounded-[3rem] shadow-2xl overflow-hidden"
        >
          <!-- Main Photo -->
          <img
            src="/images/original/photo-sunset.jpg"
            alt="Couple at Sunset"
            class="w-full h-full object-cover"
          />

          <!-- Floral Overlays -->
          <!-- Top Right Draping -->
          <div
            class="absolute top-0 right-0 w-32 md:w-60 transform translate-x-1/4 -translate-y-1/4 z-10"
          >
            <!-- Reuse floral assets to simulate the bouquet -->
            <img
              src="/images/original/floral-top-left.png"
              class="w-full h-full object-contain transform rotate-180"
            />
          </div>

          <!-- Bottom Right -->
          <div
            class="absolute bottom-0 right-0 w-24 md:w-48 transform translate-x-1/4 translate-y-1/4 z-10"
          >
            <img
              src="/images/original/floral-bottom-right.png"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Bottom Left / Center -->
          <div
            class="absolute bottom-8 left-0 w-20 md:w-32 transform -translate-x-1/4 z-10"
          >
            <img
              src="/images/original/floral-2.png"
              class="w-full h-full object-contain transform -rotate-45"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Timeline of Events -->
    <section
      class="py-24 relative text-white bg-cover bg-center"
      style="
        background-image: url(&quot;/images/original/timeline-background.jpg&quot;);
      "
    >
      <!-- Dark Overlay for readability -->
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 container mx-auto px-4 text-center max-w-7xl">
        <h3 class="font-handwriting text-5xl md:text-7xl mb-12">
          Timeline of Events
        </h3>

        <!-- Main Layout Grid: 1 Col (Fri) + 4 Cols (Sat) -->
        <div class="grid grid-cols-1 lg:grid-cols-5 text-white">
          <!-- Friday Column (1/5) -->
          <div class="lg:col-span-1 flex flex-col items-center relative">
            <!-- Vertical Divider (Right border) -->
            <div
              class="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white"
            ></div>

            <!-- Header -->
            <div class="h-24 flex items-center justify-center">
              <h4 class="font-serif text-2xl md:text-3xl italic leading-tight">
                Friday<br /><span class="not-italic font-bold">19-12-2025</span>
              </h4>
            </div>

            <!-- Icon Row -->
            <div class="h-32 flex items-end justify-center pb-4">
              <img
                src="/images/original/icon-bbq.png"
                class="w-20 h-20 object-contain invert brightness-0"
                alt="BBQ"
              />
            </div>

            <!-- Horizontal Divider -->
            <div class="w-full h-px bg-white my-4"></div>

            <!-- Details Row -->
            <div class="pt-2">
              <p class="font-serif text-2xl italic mb-1">5:00 pm</p>
              <p class="font-serif text-xl uppercase tracking-widest mb-6">
                Welcome BBQ
              </p>
              <!-- Pin & Location -->
              <div class="flex flex-col items-center gap-1 opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <p class="font-serif italic text-lg">Horlystone</p>
              </div>
            </div>
          </div>

          <!-- Saturday Column (4/5) -->
          <div class="lg:col-span-4 flex flex-col relative">
            <!-- Header -->
            <div class="h-24 flex items-center justify-center">
              <h4 class="font-serif text-2xl md:text-3xl italic leading-tight">
                Saturday<br /><span class="not-italic font-bold"
                  >20-12-2025</span
                >
              </h4>
            </div>

            <!-- Events Grid (4 cols) -->
            <div class="grid grid-cols-2 md:grid-cols-4 w-full">
              <!-- Loop for 4 events: Coffee, Church, Cocktail, Dinner -->

              <!-- 1. Coffee -->
              <div class="flex flex-col items-center relative gap-0">
                <div class="h-32 flex items-end justify-center pb-4">
                  <img
                    src="/images/original/icon-coffee.png"
                    class="w-20 h-20 object-contain invert brightness-0"
                    alt="Breakfast"
                  />
                </div>
                <div class="w-full h-px bg-white my-4"></div>
                <div class="pt-2">
                  <p class="font-serif text-2xl italic mb-1">9:00 am</p>
                  <p class="font-serif text-xl uppercase tracking-widest mb-6">
                    Breakfast
                  </p>
                  <div class="flex flex-col items-center gap-1 opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      />
                    </svg>
                    <p class="font-serif italic text-lg">Horlystone</p>
                  </div>
                </div>
              </div>

              <!-- 2. Mass -->
              <div class="flex flex-col items-center relative gap-0">
                <div class="h-32 flex items-end justify-center pb-4">
                  <img
                    src="/images/original/icon-church.png"
                    class="w-20 h-20 object-contain invert brightness-0"
                    alt="Mass"
                  />
                </div>
                <div class="w-full h-px bg-white my-4"></div>
                <div class="pt-2">
                  <p class="font-serif text-2xl italic mb-1">2:00 pm</p>
                  <p class="font-serif text-xl uppercase tracking-widest mb-6">
                    Mass
                  </p>
                  <div class="flex flex-col items-center gap-1 opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      />
                    </svg>
                    <p class="font-serif italic text-lg">Hotel Ilomba</p>
                  </div>
                </div>
              </div>

              <!-- 3. Cocktail -->
              <div class="flex flex-col items-center relative gap-0">
                <div class="h-32 flex items-end justify-center pb-4">
                  <img
                    src="/images/original/icon-cocktail.png"
                    class="w-20 h-20 object-contain invert brightness-0"
                    alt="Cocktail"
                  />
                </div>
                <div class="w-full h-px bg-white my-4"></div>
                <div class="pt-2">
                  <p class="font-serif text-2xl italic mb-1">5:00 pm</p>
                  <p class="font-serif text-xl uppercase tracking-widest mb-6">
                    Cocktail
                  </p>
                  <div class="flex flex-col items-center gap-1 opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      />
                    </svg>
                    <p class="font-serif italic text-lg">
                      Kribi Golf and Country Club
                    </p>
                  </div>
                </div>
              </div>

              <!-- 4. Reception -->
              <div class="flex flex-col items-center relative gap-0">
                <div class="h-32 flex items-end justify-center pb-4">
                  <img
                    src="/images/original/icon-dinner.png"
                    class="w-20 h-20 object-contain invert brightness-0"
                    alt="Reception"
                  />
                </div>
                <div class="w-full h-px bg-white my-4"></div>
                <div class="pt-2">
                  <p class="font-serif text-2xl italic mb-1">6:00 pm</p>
                  <p class="font-serif text-xl uppercase tracking-widest mb-6">
                    Reception
                  </p>
                  <div class="flex flex-col items-center gap-1 opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      />
                    </svg>
                    <!-- Empty location if not needed, or club -->
                    <p class="font-serif italic text-lg opacity-0">.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo/Map Link (Top Right) -->
        <a
          href="#"
          class="hidden md:flex absolute top-12 right-12 flex-col items-center opacity-80 hover:opacity-100 transition"
        >
          <img
            src="https://static.wixstatic.com/media/2e2a49_2984534a654a4da19da525287431a472~mv2.png/v1/fill/w_44,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_2984534a654a4da19da525287431a472~mv2.png"
            class="w-8 h-12 mb-2"
            alt="Map"
          />
          <p class="font-serif italic text-sm">
            Location links available<br />Tap locations below
          </p>
        </a>
      </div>
    </section>

    <!-- 3. RSVP & Disclosure -->
    <section
      class="w-full bg-repeat text-[#401015] font-serif relative py-12 md:py-24 px-6 md:px-16"
      style="
        background-image: url(&quot;/images/generated/beach_sand_texture.png&quot;);
      "
    >
      <!-- RSVP Section -->
      <div class="mb-20 text-center">
        <h3 class="font-handwriting text-6xl md:text-7xl mb-6">RSVP</h3>
        <p class="text-xl md:text-2xl font-bold italic mb-6">
          This event is strictly on invitation.
        </p>
        <p class="text-lg md:text-xl mb-4 max-w-2xl mx-auto">
          Kindly respond with your attendance and guest count by 10-12-2025.
        </p>
        <p class="text-lg md:text-xl font-light max-w-3xl mx-auto">
          Contact our planners on <span class="font-bold">677 17 17 54</span>,
          <span class="font-bold">694 75 63 92</span> or
          <span class="font-bold">696 94 86 07</span> to RSVP.
        </p>
      </div>

      <!-- Disclosure Section -->
      <div class="mb-16 text-center">
        <h3 class="font-handwriting text-5xl md:text-6xl mb-8">Disclosure</h3>
        <ul class="text-lg md:text-xl space-y-4 max-w-3xl mx-auto list-none">
          <li>
            Priority seating passes for the dinner reception will be provided
            for each of our guests.
          </li>
          <li>Seating arrangements will be organised prior to the event.</li>
          <li>
            Please leave the little ones safe and well looked after at home.
          </li>
          <li>
            Ensure life-guards are on duty before interacting with any body of
            water.
          </li>
        </ul>
      </div>

      <!-- Footer -->
      <p
        class="text-xs text-[#401015]/60 uppercase tracking-widest mt-12 text-center"
      >
        © 2025 Erica & Mictor Wedding
      </p>
    </section>
  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
