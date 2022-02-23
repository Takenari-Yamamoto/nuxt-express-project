<template>
  <div class="app-textarea-container">
    <p>{{ label }}</p>
    <textarea v-model="inputText" class="app-textarea" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  setup() {
    const inputText = ref('');
    return { inputText };
  },
});
</script>

<style lang="scss" scoped>
.app-textarea {
  width: 100%;
  border: 1px solid black;
}
</style>
