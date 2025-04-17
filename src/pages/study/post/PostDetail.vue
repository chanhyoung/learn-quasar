<template>
  <q-page class="q-pa-xl">
    <div class="text-h4">게시글 상세</div>
    <q-separator class="q-my-md"></q-separator>
    <q-card bordered class="q-mb-md my-card" flat>
      <q-card-section>
        <div class="text-h6">
          {{ post.title }}
        </div>
        <div class="text-subtitle2">{{ post.tags }}`</div>
      </q-card-section>

      <q-card-section>
        {{ post.content }}
      </q-card-section>
      <q-card-section class="text-right">
        {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
      </q-card-section>
    </q-card>

    <div class="row q-gutter-x-sm">
      <q-btn label="이전글" color="primary" outline to="/post/list" />
      <q-btn label="다음글" color="primary" outline to="/post/list" />
      <q-space></q-space>
      <q-btn label="목록" color="primary" outline to="/post/list" />
      <q-btn label="수정" color="primary" @click="goEdit(post.id)" />
      <q-btn label="삭제" color="negative" @click="onDelete(post.id)" />
    </div>

    <!-- <p>params: {{ $route }}</p> -->
  </q-page>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById, deletePost } from 'src/api/posts.js';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const goEdit = id => {
  router.push(`/post/edit/${id}`);
};

const post = ref({
  id: null,
  title: null,
  content: null,
  tags: [],
  createdAt: null,
});

const fetchPost = async () => {
  console.log('id: ', route.params.id);
  try {
    const { data } = await getPostById(route.params.id);
    setPost(data);
  } catch (err) {
    console.error(err);
  }
};

const setPost = data => {
  post.value.id = data.id;
  post.value.title = data.title;
  post.value.content = data.content;
  post.value.tags = data.tags;
  post.value.createdAt = data.createdAt;
};
fetchPost();

const onDelete = async id => {
  if (confirm('삭제 하시겠습니까?') === false) return;
  try {
    await deletePost(id);
    router.push('/post/list');
  } catch (err) {
    console.error(err);
  }
};
</script>

<style lang="scss" scoped></style>
