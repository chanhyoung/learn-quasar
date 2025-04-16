<template>
  <q-page class="q-pa-xl">
    <div class="text-h4">게시글 상세</div>
    <q-separator class="q-my-md"></q-separator>
    <q-card bordered class="q-mb-md my-card" flat>
      <q-card-section>
        <div class="text-h6">{{ post.title }}</div>
        <div class="text-subtitle2">{{ post.tags }}`</div>
      </q-card-section>

      <q-card-section>
        {{ post.content }}
      </q-card-section>
      <q-card-section class="text-right">
        {{ post.createdAt }}
      </q-card-section>
    </q-card>

    <div class="row q-gutter-x-sm">
      <q-btn label="이전글" color="primary" outline to="/post/list" />
      <q-btn label="다음글" color="primary" outline to="/post/list" />
      <q-space></q-space>
      <q-btn label="목록" color="primary" outline to="/post/list" />
      <q-btn label="수정" color="primary" @click="goEdit(post.id)" />
      <q-btn label="삭제" color="negative" />
    </div>

    <!-- <p>params: {{ $route }}</p> -->
  </q-page>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { fetchPost } from 'src/api/posts.js';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const goEdit = id => {
  router.push(`/post/edit/${id}`);
};

const post = ref({});
post.value = fetchPost(route.params.id);

// defineProps({
//   title: {
//     type: Object,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   tags: {
//     type: Array,
//     required: true,
//   },
//   createdAt: {
//     type: String,
//     required: true,
//   },
//   accept: {
//     type: String,
//     required: true,
//   },
// });
</script>

<style lang="scss" scoped></style>
