<script setup lang="ts">

const props = defineProps<{rail?: boolean}>()

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
    href:"/"
  },
  {
    icon: "mdi-account-supervisor-circle",
    title: "Supervisors",
    value: "supervisors",
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
    <NuxtLink v-for="items in menus" :key="items" :to="items.value"
      ><v-list-item
        :prepend-icon="items.icon"
        :title="items.title"
        :value="items.value"
      ></v-list-item
    ></NuxtLink>

    <v-list-subheader v-if="props.rail">PENGGUNA</v-list-subheader>
    <v-list-item prepend-icon="mdi-account-circle" title="Users"></v-list-item>

  </v-list>
</template>