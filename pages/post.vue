<template>
  <div>
    <p>投稿ページです</p>
    <AppTextarea v-model="text" />
    <AppButton text="投稿" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const text = ref('');

    return { text };
  },
});
</script>
