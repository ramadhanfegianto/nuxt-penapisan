<script lang="ts" setup>
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
        <el-container>
            <el-aside width="200px">
                <sidebar @collapse="$event => drawer = $event" />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <NuxtPage></NuxtPage>
                </el-main>
                <el-footer>{{ drawer }}</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
