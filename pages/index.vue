<template>
  <div class="index-page">
    <p>全ての投稿</p>
    <div v-for="(post, index) in postList" :key="index" class="post-card">
      <p>Id: {{ post._id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>Content: {{ post.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import { usePost } from '@/repository/post';

export default defineComponent({
  setup() {
    const { fetchPosts, postList } = usePost();

    onMounted(() => {
      fetchPosts();
      console.log(postList);
    });
    return { postList };
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
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
}
</style>
