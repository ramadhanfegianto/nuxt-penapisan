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
    <v-list >
      <v-list-item prepend-avatar="~/assets/images/jds.png"
        ><template #title>
          <b class="text-sm">PENAPISAN BANKEU</b>
        </template>
      </v-list-item>
    </v-list>
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
      <!-- <v-btn icon="mdi-magnify" variant="text"></v-btn> -->

      <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
    </template>

    <v-menu v-model="menu" :close-on-content-click="false" :location="'bottom'">
      <template v-slot:activator="{ props }">
        <button class="p-0" v-bind="props">
          <v-list>
            <v-list-item
              class="m-0"
              append-avatar="~/assets/images/jds.png"
              :subtitle="commonStore.data?.user_level"
              :title="commonStore.data?.nama"
            >
            </v-list-item>
          </v-list>
        </button>
      </template>

      <v-card min-width="200" class="py-0">
        <!-- <v-list>
          <v-list-item
            prepend-avatar="~/assets/images/jds.png"
            :subtitle="commonStore.data?.user_level"
            :title="commonStore.data?.nama"
          >
          </v-list-item>
        </v-list>

        <v-divider></v-divider> -->
        <v-list>
          <v-list-item>
            <v-list-item-icon class="mr-3"><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-content> Kelola Pengguna </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="text" @click.prevent="actionLogout"> Log Out </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
