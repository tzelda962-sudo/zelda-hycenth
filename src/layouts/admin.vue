<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Navbar -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="font-bold text-xl text-[#152146]"
                >Z&H Admin Dashboard</span
              >
            </div>
          </div>
          <div class="flex items-center">
            <button
              @click="signOut"
              class="text-sm font-medium text-red-600 hover:text-red-900"
              v-if="user"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- Main content -->
    <main class="flex-grow max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const signOut = async () => {
  await supabase.auth.signOut();
  navigateTo("/admin/login");
};
</script>
