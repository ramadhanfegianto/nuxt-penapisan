<script setup lang="ts">
import AdminView from "./admin.vue";

const authStore = useAuthStore();

const drawer = ref(true) as boolean;

const router = useRouter();

const hasToken = computed(() => authStore.getToken);

</script>

<template>
  <v-layout class="rounded rounded-md">
    <template v-if="hasToken"><AdminView></AdminView></template>
    <v-main class="bg-gray-100">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-layout>
</template>
