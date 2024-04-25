<script lang="ts" setup>

const router = useRouter()

const authStore = useAuthStore();

const form = authStore.form;

const items = ["2025", "2026"];

const actionLogin = async () => {
  await authStore.login(form)
  router.push({ path:"/dashboard" })
}

</script>

<template>
  <div class="d-flex justify-content-center">
    <v-card min-width="500">
      <form class="m-5">
        <v-text-field v-model="form.username" label="Username" required></v-text-field>

        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-select
          v-model="form.tahun"
          :items="items"
          label="Tahun"
          required
        ></v-select>

        <v-checkbox
          v-model="form.checkbox"
          label="Remember me"
          required
        ></v-checkbox>

        <v-btn class="me-4" color="primary" @click.prevent="actionLogin()"> Login </v-btn>
      </form>
    </v-card>
  </div>
</template>