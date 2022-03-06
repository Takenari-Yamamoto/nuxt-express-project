import { ref, useContext, useRouter } from '@nuxtjs/composition-api';

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
  const router = useRouter();
  const loading = ref(false);
  const { $axios } = useContext();
  const error = ref('');
  const postList = ref<Post[]>([]);
  const postDetail = ref<Post | null>(null);

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
    loading.value = true;
    try {
      const res = await $axios.get(`/api/posts/${id}`);
      postDetail.value = res.data;
    } catch (err) {
      alert('取得に失敗しました…');
      console.log('API error', error);
    }
    loading.value = false;
  };

  const createNewPost = async (params: PostParams) => {
    loading.value = true;
    try {
      await $axios.post('/api/posts', params);
      alert('投稿しました！');
      router.push('/');
    } catch (err) {
      console.log('API error', error);
      alert('投稿に失敗しました…');
    }
    loading.value = false;
  };

  const deletePost = async (id: string) => {
    loading.value = true;
    try {
      await $axios.delete(`/api/posts/${id}`);
      alert('削除しました！');
      location.reload();
    } catch {
      console.log('API error', error);
      alert('削除に失敗しました…');
    }
    loading.value = false;
  };

  const editPost = async (id: string, params: PostParams) => {
    loading.value = true;
    try {
      await $axios.patch(`/api/posts/${id}`, params);
      alert('編集しました！');
      router.push('/');
    } catch {
      console.log('API error', error);
      alert('編集に失敗しました…');
    }
    loading.value = false;
  };

  return {
    loading,
    error,
    fetchPosts,
    postDetail,
    postList,
    fetchPostDetail,
    createNewPost,
    deletePost,
    editPost,
  };
};
