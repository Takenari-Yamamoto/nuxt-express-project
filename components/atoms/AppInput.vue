<template>
  <div class="app-input-container">
    <p>{{ label }}</p>
    <input v-model="text" class="app-input" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props) {
    const text = toRef(props, 'value');
    return { text };
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  width: 100%;
  border: 1px solid black;
}
</style>
