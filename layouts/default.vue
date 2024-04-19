<script setup lang="ts">
import AdminView from "./admin.vue"

definePageMeta({
    middleware: ['check-auth']
})
const drawer = ref(true)

</script>

<style scoped>

</style>

<template>
    <v-layout class="rounded rounded-md">
        <AdminView></AdminView>
        <v-main>
            <v-container fluid>
                <NuxtPage />
            </v-container>
        </v-main>
    </v-layout>
</template>
