<script lang="ts" setup>
    definePageMeta({
        middleware: ['check-auth']
    })
    const drawer = ref(false)
    
    const hideSideBar = ref(false)

</script>

<style scoped>
    .sidebar{
        height: 100vh;
        width: 200px;
    }
    .container{
        height: 100vh;
    }
</style>

<template>
    <el-container class="bg-white-500">
        <el-container class="container">
            <el-aside v-if="!hideSideBar" class="sidebar"> 
                <sidebar @collapse="$event => drawer = $event" />
            </el-aside>
            <el-container class="bg-gray-100">
                <el-header><el-button @click="hideSideBar = !hideSideBar">Hide</el-button></el-header>
                <el-main>
                    <NuxtPage></NuxtPage>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
