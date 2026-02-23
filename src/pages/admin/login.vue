<template>
  <NuxtLayout name="admin">
    <div class="flex items-center justify-center min-h-[70vh]">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-[#152146]">
          Admin Login
        </h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              v-model="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-[#152146] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors"
              type="submit"
              :disabled="loading"
            >
              {{ loading ? "Signing in..." : "Sign In" }}
            </button>
          </div>
          <p v-if="error" class="text-red-500 text-sm italic mt-4 text-center">
            {{ error }}
          </p>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false, // We are rendering NuxtLayout manually inside the template
});

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");
const supabase = useSupabaseClient();
const user = useSupabaseUser();

// Redirect if already logged in
watchEffect(() => {
  if (user.value) {
    navigateTo("/admin");
  }
});

const handleLogin = async () => {
  loading.value = true;
  error.value = "";
  try {
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (authError) throw authError;

    // Watcher will automatically redirect us to /admin
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>
