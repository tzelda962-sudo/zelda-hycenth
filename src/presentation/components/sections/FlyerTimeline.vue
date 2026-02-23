<script setup lang="ts">
import { useSiteContent } from "../../../composables/useSiteContent";

const { getContent } = useSiteContent();
</script>

<template>
  <section
    class="py-24 relative text-white bg-cover bg-center w-full"
    style="
      background-image: url(&quot;/images/original/timeline-background.jpg&quot;);
    "
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-[#152146]/80 mix-blend-multiply"></div>

    <div class="relative z-10 container mx-auto px-4 text-center max-w-7xl">
      <!-- Section Title -->
      <div class="mb-12 md:mb-16">
        <h3
          class="font-handwriting text-5xl md:text-7xl mb-4 md:mb-6 text-[#F6F7EC]"
        >
          Timeline of Events
        </h3>
        <p
          class="font-serif italic text-lg md:text-xl text-[#F6F7EC]/80 tracking-wide"
        >
          (Click on any location below to open in Google Maps)
        </p>
      </div>

      <!-- Main Timeline Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-4 text-[#F6F7EC] gap-8 lg:gap-0"
      >
        <!-- Friday Column -->
        <div class="lg:col-span-1 flex flex-col items-center relative">
          <!-- Vertical Divider (Right border) -->
          <div
            class="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-[#F6F7EC]/40"
          ></div>

          <!-- Header -->
          <div class="h-24 flex items-center justify-center">
            <h4 class="font-serif text-2xl md:text-3xl italic leading-tight">
              Friday<br /><span class="not-italic font-bold">11.09</span>
            </h4>
          </div>

          <!-- Icon -->
          <div class="h-32 flex items-end justify-center pb-4">
            <img
              src="/images/original/icon-coffee.png"
              class="w-20 h-20 object-contain brightness-0 invert"
              alt="Meet & Greet"
            />
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-[#F6F7EC]/40 my-4"></div>

          <!-- Event Details -->
          <div class="pt-2 px-4">
            <p class="font-serif text-2xl italic mb-1">
              {{ getContent("timeline_1_time", "18:00") }}
            </p>
            <p class="font-serif text-xl uppercase tracking-widest mb-4">
              {{ getContent("timeline_1_title", "Meet & Greet") }}
            </p>
            <a
              :href="
                getContent(
                  'timeline_1_url',
                  'https://maps.app.goo.gl/74erQitRL1ZEgh5j8',
                )
              "
              target="_blank"
              class="flex flex-col items-center gap-1 opacity-90 hover:opacity-100 hover:text-white transition-colors group"
            >
              <p
                class="font-serif italic text-lg leading-snug group-hover:underline"
              >
                {{
                  getContent(
                    "timeline_1_location",
                    "Katholische Kirche St. Maria (Alfred Delp Haus)",
                  )
                }}
              </p>
              <p class="text-sm">
                {{
                  getContent(
                    "timeline_1_address",
                    "Berliner Str. 14, 71034 Böblingen",
                  )
                }}
              </p>
            </a>
            <p class="text-xs mt-4 opacity-75">
              {{
                getContent(
                  "timeline_1_note",
                  "2hrs Free parking is around the neighborhood",
                )
              }}
            </p>
          </div>
        </div>

        <!-- Saturday Column (Span 2) -->
        <div class="lg:col-span-2 flex flex-col relative">
          <!-- Vertical Divider (Right border) -->
          <div
            class="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-[#F6F7EC]/40"
          ></div>

          <!-- Header -->
          <div class="h-24 flex items-center justify-center">
            <h4 class="font-serif text-2xl md:text-3xl italic leading-tight">
              Saturday<br /><span class="not-italic font-bold">12.09</span>
            </h4>
          </div>

          <!-- Events Grid (Nested) -->
          <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <!-- Event 1: Church Service -->
            <div class="flex flex-col items-center relative gap-0 pb-8 lg:pb-0">
              <!-- Mobile Divider -->
              <div
                class="lg:hidden w-full h-px bg-[#F6F7EC]/30 absolute bottom-0"
              ></div>

              <div class="h-32 flex items-end justify-center pb-4">
                <img
                  src="/images/original/icon-church.png"
                  class="w-20 h-20 object-contain brightness-0 invert"
                  alt="Church Service"
                />
              </div>
              <div class="w-full h-px bg-[#F6F7EC]/40 my-4"></div>
              <div class="pt-2 px-4">
                <p class="font-serif text-2xl italic mb-1">
                  {{ getContent("timeline_2_time", "16:00 (prompt)") }}
                </p>
                <p class="font-serif text-xl uppercase tracking-widest mb-4">
                  {{
                    getContent("timeline_2_title", "Church Blessings & Vows")
                  }}
                </p>
                <a
                  :href="
                    getContent(
                      'timeline_2_url',
                      'https://maps.app.goo.gl/74erQitRL1ZEgh5j8',
                    )
                  "
                  target="_blank"
                  class="flex flex-col items-center gap-1 opacity-90 hover:opacity-100 hover:text-white transition-colors group"
                >
                  <p
                    class="font-serif italic text-lg leading-snug group-hover:underline"
                  >
                    {{
                      getContent(
                        "timeline_2_location",
                        "Katholische Kirche St. Maria",
                      )
                    }}
                  </p>
                  <p class="text-sm">
                    {{
                      getContent(
                        "timeline_2_address",
                        "Berliner Str. 14, 71034 Böblingen",
                      )
                    }}
                  </p>
                </a>
                <p class="text-xs mt-4 opacity-75">
                  {{
                    getContent(
                      "timeline_2_note",
                      "2hrs Free parking is around the neighborhood",
                    )
                  }}
                </p>
              </div>
            </div>

            <!-- Event 2: Reception -->
            <div class="flex flex-col items-center relative gap-0 pt-8 lg:pt-0">
              <div class="h-32 flex items-end justify-center pb-4">
                <img
                  src="/images/original/icon-dinner.png"
                  class="w-20 h-20 object-contain brightness-0 invert"
                  alt="Reception"
                />
              </div>
              <div class="w-full h-px bg-[#F6F7EC]/40 my-4"></div>
              <div class="pt-2 px-4">
                <p class="font-serif text-2xl italic mb-1">
                  {{ getContent("timeline_3_time", "19:00") }}
                </p>
                <p class="font-serif text-xl uppercase tracking-widest mb-4">
                  {{
                    getContent("timeline_3_title", "Reception & Celebration")
                  }}
                </p>
                <a
                  :href="
                    getContent(
                      'timeline_3_url',
                      'https://maps.app.goo.gl/zf3xpVabHPf4RXin9',
                    )
                  "
                  target="_blank"
                  class="flex flex-col items-center gap-1 opacity-90 hover:opacity-100 hover:text-white transition-colors group"
                >
                  <p
                    class="font-serif italic text-lg leading-snug group-hover:underline"
                  >
                    {{
                      getContent("timeline_3_location", "Melodi Event Centre")
                    }}
                  </p>
                  <p class="text-sm">
                    {{
                      getContent(
                        "timeline_3_address",
                        "Dornierstraße 14, 71034 Böblingen",
                      )
                    }}
                  </p>
                </a>
                <p class="text-xs mt-4 opacity-75">
                  {{
                    getContent(
                      "timeline_3_note",
                      "Cocktail 19:00, Event start 20:00",
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sunday Column -->
        <div class="lg:col-span-1 flex flex-col items-center relative">
          <!-- Header -->
          <div class="h-24 flex items-center justify-center">
            <h4 class="font-serif text-2xl md:text-3xl italic leading-tight">
              Sunday<br /><span class="not-italic font-bold">13.09</span>
            </h4>
          </div>

          <!-- Icon -->
          <div class="h-32 flex items-end justify-center pb-4">
            <img
              src="/images/original/icon-bbq.png"
              class="w-20 h-20 object-contain brightness-0 invert"
              alt="BBQ"
            />
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-[#F6F7EC]/40 my-4"></div>

          <!-- Event Details -->
          <div class="pt-2 px-4">
            <p class="font-serif text-2xl italic mb-1">
              {{ getContent("timeline_4_time", "13:00") }}
            </p>
            <p class="font-serif text-xl uppercase tracking-widest mb-4">
              {{ getContent("timeline_4_title", "After Party Grill (BBQ)") }}
            </p>
            <a
              :href="
                getContent(
                  'timeline_4_url',
                  'https://maps.app.goo.gl/uCHfcaWud9eFMMFt8',
                )
              "
              target="_blank"
              class="flex flex-col items-center gap-1 opacity-90 hover:opacity-100 hover:text-[#A87D3B] transition-colors group"
            >
              <p
                class="font-serif italic text-lg leading-snug group-hover:underline"
              >
                {{ getContent("timeline_4_location", "Häfele-Hütte") }}
              </p>
              <p class="text-sm">
                {{
                  getContent(
                    "timeline_4_address",
                    "Friedhofstraße 27, 72202 Nagold",
                  )
                }}
              </p>
            </a>
            <p class="text-xs mt-4 opacity-75">
              {{
                getContent(
                  "timeline_4_note",
                  "20mins drive from event location",
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
