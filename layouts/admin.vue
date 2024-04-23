<script lang="ts" setup>

const drawer = ref(true)

</script>

<template>
    <v-navigation-drawer :rail="!drawer" permanent elevation="0" left app
        :location="$vuetify.display.mobile ? 'bottom' : undefined">
        <!-- Logo -->
        <div class="pa-5">
            LOGO 
        </div>
        <!-- Menu -->
        <Menu :rail="drawer"></Menu>
    </v-navigation-drawer>

    <v-app-bar color="light" elevation="3" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>
</template>
