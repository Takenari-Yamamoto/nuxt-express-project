<template>
  <div class="index-page">
    <div class="auth-container box">
      <AppInput v-model="id" label="ログイン" />
      <AppInput v-model="password" label="パスワード" />
      <AppButton text="ログイン" />
    </div>
    <div class="auth-container">
      <AppInput v-model="id" label="ログイン" />
      <AppInput v-model="password" label="パスワード" />
      <AppButton text="会員登録" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const id = ref('');
    const password = ref('');
    const isShowLoginForm = ref(true);

    return { id, password, isShowLoginForm };
  },
});
</script>

<style lang="scss" scoped>
.index-page {
  > .box {
    margin-bottom: 30px;
  }
}

.auth-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
</style>
