<script setup lang="ts">
    definePageMeta({
        middleware: ['check-auth']
    })
    const click = () => {
        console.log("testing");
    }

</script>

<template>
    <el-button type="primary" @click.prevent="click">Primary</el-button>
</template>