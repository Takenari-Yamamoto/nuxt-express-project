<template>
  <div class="index-page">
    <p>全ての投稿</p>
    <div
      v-for="(post, index) in postList"
      :key="index"
      class="post-card"
      @click="moveToDetail(post._id)"
    >
      <div class="contents">
        <p>Id: {{ post._id }}</p>
        <p>Title: {{ post.title }}</p>
        <p>Content: {{ post.content }}</p>
      </div>
      <div class="buttons">
        <AppButton
          color="red"
          text="削除"
          @clickButton="deletePost(post._id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, useRouter } from '@nuxtjs/composition-api';
import { usePost } from '@/repository/post';

export default defineComponent({
  setup() {
    const { fetchPosts, postList, deletePost } = usePost();
    const router = useRouter();

    onMounted(() => {
      fetchPosts();
    });

    const moveToDetail = (id: string) => {
      router.push(`posts/${id}`);
    };
    return { postList, deletePost, moveToDetail };
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

.post-card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;

  > .buttons {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }
}
</style>
