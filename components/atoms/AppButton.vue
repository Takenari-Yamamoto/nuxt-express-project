<template>
  <div
    class="app-button"
    :class="[{ '-red': color === 'red' }, { '-blue': color === 'blue' }]"
    @click="$emit('clickButton')"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
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
@import 'assets/scss/color';
.app-button {
  padding: 10px;
  font-weight: bold;
  color: black;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;

  &.-red {
    color: white;
    background: red;
  }

  &.-blue {
    color: white;
    background: rgb(0, 153, 255);
  }
}
</style>
