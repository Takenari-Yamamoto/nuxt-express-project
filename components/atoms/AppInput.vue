<template>
  <div class="app-input-container">
    <p>{{ label }}</p>
    <input class="app-input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  width: 100%;
  border: 1px solid black;
}
</style>
