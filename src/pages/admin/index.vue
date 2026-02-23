<template>
  <div class="px-4 py-6 sm:px-0">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="px-5 py-6 sm:px-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Content Management</h2>
        <p class="text-sm text-gray-500 mt-1">
          Update the text content shown on the invitation. The changes will
          trigger a redeploy of the website.
        </p>
      </div>

      <div v-if="loading" class="text-center py-12">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#152146] mx-auto"
        ></div>
        <p class="mt-4 text-gray-500">Loading contents...</p>
      </div>

      <div v-else class="p-6 space-y-8">
        <div
          v-for="(item, index) in contents"
          :key="item.key"
          class="border border-gray-100 bg-gray-50 p-4 rounded-md"
        >
          <label
            class="block text-base font-medium text-[#152146] mb-1 capitalize"
            >{{ formatKey(item.key) }}</label
          >
          <p class="text-xs text-gray-500 mb-3">{{ item.description }}</p>

          <!-- Image Upload -->
          <div v-if="item.key.startsWith('image_')" class="space-y-4">
            <div class="flex items-center gap-4">
              <div
                class="w-32 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 border"
              >
                <img :src="item.value" class="w-full h-full object-cover" />
              </div>
              <div class="flex-grow">
                <p class="text-xs text-gray-500 mb-2 truncate max-w-sm">
                  {{ item.value }}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  @change="(e) => handleImageUpload(e, item)"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  :disabled="saving[item.key]"
                />
              </div>
            </div>
          </div>

          <!-- Array Input -->
          <div v-else-if="isJsonArray(item.value)" class="space-y-2">
            <div
              v-for="(val, vIndex) in item.value"
              :key="vIndex"
              class="flex items-center gap-2"
            >
              <input
                type="text"
                v-model="item.value[vIndex]"
                class="shadow-sm focus:ring-[#152146] focus:border-[#152146] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
              />
              <button
                @click="removeArrayItem(item, vIndex)"
                class="text-red-500 hover:text-red-700 p-2"
                title="Remove row"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <button
              @click="addArrayItem(item)"
              class="text-sm text-[#A87D3B] hover:text-yellow-700 font-medium mt-1"
            >
              + Add another item
            </button>
          </div>

          <!-- Textarea / Input -->
          <div v-else>
            <textarea
              v-if="String(item.value).length > 50"
              v-model="item.value"
              rows="3"
              class="shadow-sm focus:ring-[#152146] focus:border-[#152146] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            ></textarea>
            <input
              v-else
              type="text"
              v-model="item.value"
              class="shadow-sm focus:ring-[#152146] focus:border-[#152146] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            />
          </div>

          <div class="mt-4 flex items-center">
            <button
              @click="saveContent(item)"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#152146] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#152146] transition-colors"
              :disabled="saving[item.key]"
            >
              {{
                saving[item.key]
                  ? item.key.startsWith("image_")
                    ? "Uploading & Saving..."
                    : "Saving..."
                  : "Save Changes"
              }}
            </button>
            <transition name="fade">
              <span
                v-if="saved[item.key]"
                class="ml-3 text-sm font-medium text-green-600"
                >Successfully saved!</span
              >
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"], // Protect this route
});

const supabase = useSupabaseClient();
const contents = ref<any[]>([]);
const loading = ref(true);
const saving = ref<Record<string, boolean>>({});
const saved = ref<Record<string, boolean>>({});
const pendingImageFiles = ref<Record<string, File>>({});

// Fetch the existing content
onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .order("key");
    if (error) throw error;
    if (data) contents.value = data;
  } catch (e) {
    console.error("Error fetching content:", e);
  } finally {
    loading.value = false;
  }
});

const formatKey = (key: string) => key.replace(/_/g, " ");
const isJsonArray = (val: any) => Array.isArray(val);

const addArrayItem = (item: any) => {
  item.value.push("");
};

const removeArrayItem = (item: any, index: number) => {
  item.value.splice(index, 1);
};

const handleImageUpload = (event: Event, item: any) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    pendingImageFiles.value[item.key] = target.files[0];
  }
};

const saveContent = async (item: any) => {
  saving.value[item.key] = true;
  saved.value[item.key] = false;

  try {
    let finalValue = item.value;

    // Handle Image Upload if one is queued
    if (item.key.startsWith("image_") && pendingImageFiles.value[item.key]) {
      const file = pendingImageFiles.value[item.key];
      const fileExt = file.name.split(".").pop();
      const fileName = `${item.key}-${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("images").getPublicUrl(filePath);

      finalValue = data.publicUrl;
      item.value = finalValue; // strictly to update UI immediately
      delete pendingImageFiles.value[item.key];
    }

    const { error: dbError } = await supabase
      .from("site_content")
      .update({ value: finalValue, updated_at: new Date().toISOString() })
      .eq("key", item.key);

    if (dbError) throw dbError;

    saved.value[item.key] = true;
    setTimeout(() => {
      saved.value[item.key] = false;
    }, 3000);
  } catch (e) {
    console.error("Error saving content:", e);
    alert("Failed to save changes.");
  } finally {
    saving.value[item.key] = false;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
