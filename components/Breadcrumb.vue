<script lang="ts" setup>

const layoutStore = useLayoutStore()

const breadcrumb = layoutStore.breadcrumb

</script>

<template>
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
</template>

