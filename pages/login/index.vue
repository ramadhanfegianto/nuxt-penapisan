<script lang="ts" setup>

const router = useRouter()

const authStore = useAuthStore();

const form = authStore.form;

const items = ["2025", "2026"];

const errors = computed(() => authStore.getErrors ? authStore.getErrors : {})

const actionLogin = async () => {
  await authStore.login(form)
}

</script>

<template>
  <div class="flex justify-center item-center">
    <div>
      <v-card min-width="500" class="">
      <div class="flex justify-center item-center mt-5"><h1><b class="">LOGIN</b></h1></div>
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

        <v-btn block class="me-4 w-max" color="primary" @click.prevent="actionLogin()"> Login </v-btn>
      </form>
    </v-card>
    </div>
    
  </div>
</template>