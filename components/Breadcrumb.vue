<script lang="ts" setup>

const layoutStore = useLayoutStore()

const breadcrumb = layoutStore.breadcrumb

</script>

<template>
    <el-breadcrumb separator="/" >
        <el-breadcrumb-item v-for="item in breadcrumb" v-bind:key="item.label" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

