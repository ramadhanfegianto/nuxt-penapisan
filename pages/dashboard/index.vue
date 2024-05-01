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
      WELCOME <b>{{ commonStore.data?.nama }}</b>
    </div>
  </page>
</template>