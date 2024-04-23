<script lang="ts" setup>
const layoutStore = useLayoutStore();
layoutStore.breadcrumb = [
  {
    title: "Home",
    disabled: false,
    href: "/",
  },
];
</script>

<template>
  <page>
    <v-btn> Button </v-btn>
  </page>
</template>
