<script setup lang="ts">
import { useSiteContent } from "../../../composables/useSiteContent";

const { getContent } = useSiteContent();
</script>

<template>
  <div
    class="w-full bg-repeat text-[#152146] font-serif relative py-16 md:py-32 px-6 md:px-16"
  >
    <!-- RSVP Section -->
    <div class="text-center">
      <h3 class="font-handwriting text-6xl md:text-7xl mb-6 text-[#152146]">
        RSVP
      </h3>
      <p class="text-xl md:text-2xl font-bold italic mb-6 text-[#A87D3B]">
        {{
          getContent("rsvp_note_top", "This event is strictly on invitation.")
        }}
      </p>
      <p class="text-lg md:text-xl mb-4 max-w-2xl mx-auto">
        {{
          getContent(
            "rsvp_note_bottom",
            "Kindly respond with your attendance and guest count by 30.06.2026.",
          )
        }}
      </p>
      <p
        class="text-base md:text-lg mb-8 max-w-2xl mx-auto text-[#152146] font-medium"
      >
        <span class="font-bold underline"
          >{{ getContent("rsvp_note_kids_label", "Reception & Gala") }}:</span
        >
        {{
          getContent(
            "rsvp_note_kids_message",
            "As seating is limited, we kindly request that guests attend without kids. Please notify the host in advance if this is unavoidable",
          )
        }}
      </p>
      <a
        :href="
          getContent('rsvp_link_url', 'https://forms.gle/Gf8Mvt7DMgfpYNLBA')
        "
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-10 py-4 mb-8 bg-[#152146] text-[#F6F7EC] font-serif uppercase tracking-widest hover:bg-[#A87D3B] hover:text-[#152146] transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
      >
        Click here to RSVP
      </a>

      <p class="text-lg md:text-xl font-light max-w-3xl mx-auto mt-4">
        For questions before or during the wedding, contact
        <span class="font-bold">{{
          getContent("rsvp_contacts", [
            "+491784377896",
            "+4915236345161",
            "+4917683170259",
          ]).join(", ")
        }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: "Great Vibes", cursive;
}
</style>
