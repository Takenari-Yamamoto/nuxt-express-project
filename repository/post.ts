import { ref, useContext } from '@nuxtjs/composition-api';

export interface Post {
  __v: number;
  _id: string;
  content: string;
  created_at: string;
  title: string;
}

export interface PostParams {
  title: string;
  content: string;
}

export const usePost = () => {
  const loading = ref(false);
  const { $axios } = useContext();
  const error = ref('');
  const postList = ref<Post[]>([]);
  const post = ref<Post>();

  const fetchPosts = async () => {
    postList.value = [];
    loading.value = true;
    try {
      loading.value = true;
      const res = await $axios.get('/api/posts');
      postList.value = res.data;
    } catch (err) {
      console.log('API error', error);
    }
    loading.value = false;
  };

  const fetchPostDetail = async (id: string) => {
    postList.value = [];
    loading.value = true;
    try {
      loading.value = true;
      const res = await $axios.get(`post/${id}`);
      postList.value = res.data;
    } catch (err) {
      console.log('API error', error);
    }
    loading.value = false;
  };

  const createNewPost = async (params: PostParams) => {
    console.log(params);
    loading.value = true;
    try {
      loading.value = true;
      await $axios.post('/api/posts', params);
      alert('投稿しました！');
    } catch (err) {
      console.log('API error', error);
      alert('投稿に失敗しました…');
    }
    loading.value = false;
  };

  return {
    loading,
    error,
    fetchPosts,
    post,
    postList,
    fetchPostDetail,
    createNewPost,
  };
};
