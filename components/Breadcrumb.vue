<script lang="ts" setup>

const layoutStore = useLayoutStore()

const breadcrumb = layoutStore.breadcrumb


</script>

<template>
    <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
</template>

