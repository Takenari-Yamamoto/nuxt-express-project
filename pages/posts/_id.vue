<template>
  <div>
    <p>詳細ページです</p>
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
    <AppButton text="編集" @clickButton="editPost(postDetail._id, params)" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useContext,
} from '@nuxtjs/composition-api';
import { usePost, PostParams } from '@/repository/post';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const { fetchPostDetail, editPost, postDetail } = usePost();
    const params = ref<PostParams>({
      title: '',
      content: '',
    });

    onMounted(async () => {
      await fetchPostDetail(route.value.params.id);
      if (!postDetail.value) {
        return;
      }
      params.value.title = postDetail.value.title;
      params.value.content = postDetail.value.content;
    });

    return { params, editPost, fetchPostDetail, postDetail };
  },
});
</script>
