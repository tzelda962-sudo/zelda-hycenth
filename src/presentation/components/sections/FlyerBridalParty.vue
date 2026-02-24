<script setup lang="ts">
import { computed, ref } from "vue";
import { useSiteContent } from "../../../composables/useSiteContent";

const { content } = useSiteContent();

const groomsmenList = computed(() => {
  if (!content.value) return [];
  try {
    const raw = content.value["groomsmen_list"];
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
});

const bridesmaidsList = computed(() => {
  if (!content.value) return [];
  try {
    const raw = content.value["bridesmaids_list"];
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
});

const bridesmaidsIndex = ref(0);
const groomsmenIndex = ref(0);

const nextSlide = (group: "bridesmaids" | "groomsmen") => {
  if (group === "bridesmaids") {
    bridesmaidsIndex.value =
      (bridesmaidsIndex.value + 1) % bridesmaidsList.value.length;
  } else {
    groomsmenIndex.value =
      (groomsmenIndex.value + 1) % groomsmenList.value.length;
  }
};

const prevSlide = (group: "bridesmaids" | "groomsmen") => {
  if (group === "bridesmaids") {
    bridesmaidsIndex.value =
      (bridesmaidsIndex.value - 1 + bridesmaidsList.value.length) %
      bridesmaidsList.value.length;
  } else {
    groomsmenIndex.value =
      (groomsmenIndex.value - 1 + groomsmenList.value.length) %
      groomsmenList.value.length;
  }
};

const getCardStyle = (idx: number, activeIndex: number, totalCount: number) => {
  let diff = idx - activeIndex;
  // Wrap around
  if (diff > totalCount / 2) diff -= totalCount;
  if (diff < -totalCount / 2) diff += totalCount;

  const absDiff = Math.abs(diff);
  const scale = Math.max(1 - absDiff * 0.12, 0.6);
  const translateX = diff * 60;
  const translateZ = -absDiff * 80;
  const rotateY = diff * -8;
  const opacity = absDiff > 3 ? 0 : Math.max(1 - absDiff * 0.25, 0.3);
  const zIndex = 10 - absDiff;

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex,
    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
</script>

<template>
  <section class="w-full py-16 md:py-32 px-6 bg-[#F6F7EC] overflow-hidden">
    <div
      class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-12 justify-center items-center"
    >
      <!-- Bridesmaids Carousel -->
      <div
        v-if="bridesmaidsList.length"
        class="w-full lg:w-1/2 flex flex-col items-center"
      >
        <h3
          class="font-handwriting text-5xl md:text-7xl text-[#152146] mb-10 text-center"
        >
          Bridesmaids
        </h3>

        <!-- 3D Carousel Container -->
        <div class="relative w-full flex items-center justify-center">
          <!-- Left Arrow -->
          <button
            @click="prevSlide('bridesmaids')"
            class="absolute left-0 md:left-4 z-20 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-[#152146] hover:bg-white transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <!-- Cards -->
          <div
            class="relative w-64 h-[380px] md:w-72 md:h-[420px]"
            style="perspective: 1000px"
          >
            <div
              v-for="(person, idx) in bridesmaidsList"
              :key="person.id"
              class="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#A87D3B] cursor-pointer"
              :style="
                getCardStyle(
                  Number(idx),
                  bridesmaidsIndex,
                  bridesmaidsList.length,
                )
              "
              @click="bridesmaidsIndex = Number(idx)"
            >
              <!-- Photo -->
              <img
                v-if="person.image"
                :src="person.image"
                :alt="person.name"
                class="w-full h-full object-cover"
              />
              <!-- Placeholder -->
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-[#152146] to-[#0a1a3a] flex items-center justify-center"
              >
                <div
                  class="w-28 h-28 rounded-full border-2 border-[#A87D3B]/50 bg-[#A87D3B]/10 flex items-center justify-center"
                >
                  <span class="text-[#A87D3B] text-5xl font-handwriting">{{
                    getInitials(person.name)
                  }}</span>
                </div>
              </div>

              <!-- Name Overlay -->
              <div
                class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-14 text-center"
              >
                <h4 class="text-white font-serif text-xl font-bold">
                  {{ person.name }}
                </h4>
                <p
                  class="text-[#A87D3B] font-serif uppercase tracking-widest text-[10px] mt-1"
                >
                  {{ person.role }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right Arrow -->
          <button
            @click="nextSlide('bridesmaids')"
            class="absolute right-0 md:right-4 z-20 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-[#152146] hover:bg-white transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <!-- Dots -->
        <div class="flex gap-2 mt-6">
          <button
            v-for="(_, idx) in bridesmaidsList"
            :key="idx"
            @click="bridesmaidsIndex = Number(idx)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="
              Number(idx) === bridesmaidsIndex
                ? 'bg-[#A87D3B] w-6'
                : 'bg-[#152146]/30'
            "
          />
        </div>
      </div>

      <!-- Groomsmen Carousel -->
      <div
        v-if="groomsmenList.length"
        class="w-full lg:w-1/2 flex flex-col items-center"
      >
        <h3
          class="font-handwriting text-5xl md:text-7xl text-[#152146] mb-10 text-center"
        >
          Groomsmen
        </h3>

        <!-- 3D Carousel Container -->
        <div class="relative w-full flex items-center justify-center">
          <!-- Left Arrow -->
          <button
            @click="prevSlide('groomsmen')"
            class="absolute left-0 md:left-4 z-20 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-[#152146] hover:bg-white transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <!-- Cards -->
          <div
            class="relative w-64 h-[380px] md:w-72 md:h-[420px]"
            style="perspective: 1000px"
          >
            <div
              v-for="(person, idx) in groomsmenList"
              :key="person.id"
              class="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#A87D3B] cursor-pointer"
              :style="
                getCardStyle(Number(idx), groomsmenIndex, groomsmenList.length)
              "
              @click="groomsmenIndex = Number(idx)"
            >
              <!-- Photo -->
              <img
                v-if="person.image"
                :src="person.image"
                :alt="person.name"
                class="w-full h-full object-cover"
              />
              <!-- Placeholder -->
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-[#152146] to-[#0a1a3a] flex items-center justify-center"
              >
                <div
                  class="w-28 h-28 rounded-full border-2 border-[#A87D3B]/50 bg-[#A87D3B]/10 flex items-center justify-center"
                >
                  <span class="text-[#A87D3B] text-5xl font-handwriting">{{
                    getInitials(person.name)
                  }}</span>
                </div>
              </div>

              <!-- Name Overlay -->
              <div
                class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-14 text-center"
              >
                <h4 class="text-white font-serif text-xl font-bold">
                  {{ person.name }}
                </h4>
                <p
                  class="text-[#A87D3B] font-serif uppercase tracking-widest text-[10px] mt-1"
                >
                  {{ person.role }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right Arrow -->
          <button
            @click="nextSlide('groomsmen')"
            class="absolute right-0 md:right-4 z-20 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-[#152146] hover:bg-white transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <!-- Dots -->
        <div class="flex gap-2 mt-6">
          <button
            v-for="(_, idx) in groomsmenList"
            :key="idx"
            @click="groomsmenIndex = Number(idx)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="
              Number(idx) === groomsmenIndex
                ? 'bg-[#A87D3B] w-6'
                : 'bg-[#152146]/30'
            "
          />
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
