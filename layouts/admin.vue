<script lang="ts" setup>
const drawer = ref(true);

const commonStore = useCommonStore();

const authStore = useAuthStore();

const menu = ref(false);

const router = useRouter();

onMounted(() => {
  commonStore.getUser();
});

const actionLogout = async () => {
  await authStore.logout();
  await authStore.checkToken();
  router.push("/login");
};
</script>

<template>
  <v-navigation-drawer
    :rail="!drawer"
    permanent
    elevation="0"
    left
    app
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
  >
    <!-- Logo -->
    <div class="pa-5">LOGO</div>
    <!-- Menu -->
    <Menu :rail="drawer"></Menu>
  </v-navigation-drawer>

  <v-app-bar color="light" elevation="3" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>

      <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
    </template>

    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="~/assets/images/jds.png"
            :subtitle="commonStore.data?.user_level"
            :title="commonStore.data?.nama"
          >
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="text" @click.prevent="actionLogout">
            Log Out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
