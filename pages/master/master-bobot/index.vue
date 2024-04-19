<script lang="ts" setup>
const layoutStore = useLayoutStore()
layoutStore.breadcrumb = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Master",
        path: "#",
    },
    {
        label: "Master Bobot",
        path: "/master/master-bobot",
    }
]

</script>

<template>
    <page>

    </page>
</template>