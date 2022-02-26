<template>
  <div class="app-textarea-container">
    <p>{{ label }}</p>
    <textarea
      v-model="text"
      class="app-textarea"
      @input="$emit('input', text)"
    />
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
    value: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const text = ref(props.value);
    return { text };
  },
});
</script>

<style lang="scss" scoped>
.app-textarea {
  width: 100%;
  border: 1px solid black;
}
</style>
