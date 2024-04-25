<script setup lang="ts">
import { useCommonStore } from '#imports';

definePageMeta({
  middleware: ["check-auth"],
});

const commonStore = useCommonStore()

const doAction =  async () => {
  await commonStore.getUser()  
}

</script>

<template>
  <page>
    <div class="m-3">
      <v-btn @click="doAction">Get User</v-btn>
      {{ commonStore.data }}
    </div>
  </page>
</template>