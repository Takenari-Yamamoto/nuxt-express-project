<template>
  <div>
    <p>投稿ページです</p>
    <AppTextarea
      v-model="params.title"
      :value="params.title"
      label="タイトル"
      @input="title = $event"
    />
    <AppTextarea
      v-model="params.content"
      :value="params.content"
      label="内容"
      @input="content = $event"
    />
    <AppButton text="投稿" @clickButton="createNewPost(params)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { usePost, PostParams } from '@/repository/post';

export default defineComponent({
  setup() {
    const { createNewPost } = usePost();
    // const title = ref('');
    // const content = ref('');
    const params = ref<PostParams>({
      title: '',
      content: '',
    });

    return { params, createNewPost };
  },
});
</script>
