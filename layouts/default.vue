<script lang="ts" setup>
    import { definePageMeta } from "~/node_modules/nuxt/dist/pages/runtime/composables"

    definePageMeta({
        middleware: ['check-auth']
    })
    const drawer = ref(false)


</script>

<style scoped>
    html {
        width: 100%; /* or any other value like px, vw, etc. */
        height: 100%; /* or any other value like px, vh, etc. */
    }
</style>

<template>
    <el-container>
        <el-header class="bg-red-700">MENU</el-header>
        <el-container>
            <el-aside width="200px">
                <sidebar @collapse="$event => drawer = $event" />
            </el-aside>
            <el-container>
                <el-main>
                    <NuxtPage></NuxtPage>
                </el-main>
                <el-footer>{{ drawer }}</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
