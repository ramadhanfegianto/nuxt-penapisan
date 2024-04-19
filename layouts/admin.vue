<script lang="ts" setup>

const drawer = ref(true)

</script>

<template>
    <v-navigation-drawer elevation="0" left app v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined">
        <!-- Logo -->
        <div class="pa-5">
            DISINI LOGO
        </div>

        <!-- Menu -->
        <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar color="light" elevation="0" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>
</template>
