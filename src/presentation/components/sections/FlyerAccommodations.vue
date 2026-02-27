<script setup lang="ts">
import { useSiteContent } from "../../../composables/useSiteContent";

const { getContent } = useSiteContent();
</script>

<template>
  <section class="w-full py-16 md:py-32 px-6 md:px-12">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Left Column: Image with Animated Florals -->
      <div
        class="relative w-full max-w-md mx-auto aspect-square md:aspect-[4/5]"
      >
        <!-- Main Image -->
        <div
          class="w-full h-full rounded-[3rem] overflow-hidden shadow-xl z-10 relative bg-white"
        >
          <img
            :src="
              getContent(
                'image_accommodations',
                '/images/generated/accommodations-luggage.png',
              )
            "
            alt="Luggage"
            class="w-full h-full object-cover opacity-90"
          />
        </div>

        <!-- Animated Florals -->
        <!-- Top Right - Hanging/Shaking -->
        <div
          class="absolute -top-6 -right-6 w-32 md:w-48 z-20 pointer-events-none origin-top-center animate-shake-slow"
        >
          <img
            src="/images/generated/floral-corner-navy.png"
            class="w-full h-full object-contain transform -scale-x-100 -scale-y-100"
          />
        </div>

        <!-- Bottom Left - Hanging/Shaking -->
        <div
          class="absolute -bottom-6 -left-6 w-32 md:w-48 z-20 pointer-events-none origin-bottom-center animate-shake-slow-reverse"
        >
          <img
            src="/images/generated/floral-corner-navy.png"
            class="w-full h-full object-contain transform rotate-180"
          />
        </div>
      </div>

      <!-- Right Column: Text Content -->
      <div class="text-center md:text-left text-[#152146]">
        <p
          class="font-serif tracking-[0.2em] text-[#A87D3B] mb-4 text-lg uppercase"
        >
          Travel & Stay
        </p>
        <h3 class="font-handwriting text-5xl md:text-7xl mb-8">
          Accommodations
        </h3>
        <p class="font-serif text-lg md:text-xl leading-relaxed mb-6">
          {{
            getContent(
              "accommodation_text_1",
              "We have reserved a block of rooms at the",
            )
          }}
          <a
            :href="
              getContent(
                'accommodation_hotel_url',
                'https://maps.app.goo.gl/oA76uMpyKpZTcb5B9',
              )
            "
            target="_blank"
            class="font-bold hover:text-[#A87D3B] transition-colors underline decoration-dotted"
          >
            {{
              getContent("accommodation_hotel_name", "Eleya Hotels Böblingen")
            }}
          </a>
          {{ getContent("accommodation_text_2", "for your convenience.") }}
        </p>

        <!-- Address & Contact -->
        <div class="mb-6 font-serif text-base md:text-lg opacity-90">
          <p>
            {{
              getContent(
                "accommodation_address",
                "Otto-Lilienthal-Straße 18, 71034 Böblingen",
              )
            }}
          </p>
          <div class="mt-4 space-y-1">
            <p>
              <span class="font-bold">Booking Code:</span>
              {{ getContent("accommodation_booking_code", "Ndah") }}
            </p>
            <p>
              <span class="font-bold">Tel:</span>
              <a
                :href="
                  'tel:' +
                  getContent('accommodation_phone', '+49 7031 67799 0').replace(
                    /\s+/g,
                    '',
                  )
                "
                class="hover:underline"
                >{{ getContent("accommodation_phone", "+49 7031 67799 0") }}</a
              >
            </p>
            <p>
              <span class="font-bold">Email:</span>
              <a
                :href="
                  'mailto:' +
                  getContent(
                    'accommodation_email',
                    'stuttgart-boeblingen@elaya-hotels.com',
                  )
                "
                class="hover:underline"
                >{{
                  getContent(
                    "accommodation_email",
                    "stuttgart-boeblingen@elaya-hotels.com",
                  )
                }}</a
              >
            </p>
            <p class="pt-2 flex flex-wrap items-center gap-x-2">
              <span class="font-bold">Closest Landing airport:</span>
              <a
                :href="
                  getContent(
                    'accommodation_airport_url',
                    'https://share.google/t3O1Z9IbWPgnyQ0ln',
                  )
                "
                target="_blank"
                class="font-bold text-[#A87D3B] hover:text-[#152146] transition-colors underline decoration-dotted inline-flex items-center gap-1"
                >{{
                  getContent("accommodation_airport_name", "Stuttgart Airport")
                }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>

        <p
          class="font-serif text-lg md:text-xl leading-relaxed italic text-[#A87D3B]"
        >
          Please ensure to book by
          <span
            class="font-bold underline decoration-dotted text-[#152146] hover:text-[#A87D3B] transition-colors"
            >{{ getContent("accommodation_deadline", "July 10th, 2026") }}</span
          >
          to secure the special group rate.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(1deg);
  }
}

@keyframes shake-reverse {
  0%,
  100% {
    transform: rotate(179deg);
  }
  50% {
    transform: rotate(181deg);
  }
}

.animate-shake-slow {
  animation: shake 6s ease-in-out infinite;
}

.animate-shake-slow-reverse {
  animation: shake-reverse 7s ease-in-out infinite;
}
</style>
