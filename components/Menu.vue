<script setup lang="ts">

</script>

<template>
    <v-list nav>
        <NuxtLink to="/"><v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item></NuxtLink>
        <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
    </v-list>
</template>