<template>
  <div>
    <p>投稿ページです</p>
    <AppTextarea
      v-model="params.title"
      :value="params.title"
      class="title"
      name="title"
      label="タイトル"
      @input="title = $event"
    />
    <AppTextarea
      v-model="params.content"
      :value="params.content"
      class="content"
      name="content"
      label="内容"
      @input="content = $event"
    />
    <AppButton
      text="投稿"
      class="button"
      @clickButton="createNewPost(params)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { usePost, PostParams } from '@/repository/post';

export default defineComponent({
  setup() {
    const { createNewPost } = usePost();
    const params = ref<PostParams>({
      title: '',
      content: '',
    });

    return { params, createNewPost };
  },
});
</script>
