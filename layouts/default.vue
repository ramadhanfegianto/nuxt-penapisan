<script setup lang="ts">
import AdminView from "./admin.vue";

const authStore = useAuthStore();

const adminPage = ref(true) as boolean;

const drawer = ref(true) as boolean;

onMounted(() => {     
  if (authStore.token != "") {
    adminPage.value = true;
  }
});
</script>

<template>
  <v-layout class="rounded rounded-md">
    <template v-if="adminPage"><AdminView></AdminView></template>
    <v-main class="bg-gray-100">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-layout>
</template>
