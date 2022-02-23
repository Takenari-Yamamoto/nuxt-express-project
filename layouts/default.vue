<template>
  <div>
    <AppHeader :top="tabList.top" :paths="tabList.list" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { tabList } from '../services/tabList';

export default defineComponent({
  setup() {
    return { tabList };
  },
});
</script>
