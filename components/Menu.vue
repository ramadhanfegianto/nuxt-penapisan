<script setup lang="ts">
const props = defineProps<{ rail?: boolean }>();

const menus = ref([
  {
    icon: "mdi-speedometer",
    title: "Dashboard",
    value: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "mdi-email",
    title: "Inbox",
    value: "inbox",
    href: "/",
  },
  {
    icon: "mdi-account-supervisor-circle",
    title: "Manajemen Pengguna",
    value: "manajemen-pengguna",
  },
  {
    icon: "mdi-clock-start",
    title: "Clock-in",
    value: "clockin",
  },
]);
</script>

<template>
  <v-list>
    <v-list-item
        v-for="items in menus" :key="items"
        color="primary"
        :prepend-icon="items.icon"
        :title="items.title"
        :value="items.value"
        :to="items.value"
        exact
      ></v-list-item>
    <v-list-subheader v-if="props.rail">PENGGUNA</v-list-subheader>
    <v-list-item prepend-icon="mdi-account-circle" title="Users"></v-list-item>
  </v-list>
</template>