<template>
  <div class="app-button">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import 'assets/scss/color';
.app-button {
  padding: 10px;
  color: black;
  text-align: center;
  border: 1px solid black;
}
</style>
