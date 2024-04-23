<script lang="ts" setup>

definePageMeta({
    middleware: ['check-auth']
})

const layoutStore = useLayoutStore()
layoutStore.breadcrumb = [
        {
          title: 'Home',
          disabled: false,
          href: '/',
        },
        {
          title: 'Master',
          disabled: false,
          href: '',
        },
        {
          title: 'Master Bobot',
          disabled: true,
          href: '',
        },
      ]

</script>

<template>
    <page>

    </page>
</template>