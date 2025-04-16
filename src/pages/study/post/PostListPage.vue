<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="text-h4">게시글 목록</div>
      <q-space></q-space>
      <q-btn
        style="min-width: 100px"
        color="primary"
        label="글쓰기"
        to="/post/create"
      />
    </div>

    <q-separator class="q-my-md"></q-separator>
    <div class="row q-col-gutter-md">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card
          flat
          bordered
          class="bg-grey-2 my-card cursor-pointer"
          @click="goPage(post.id)"
        >
          <q-card-section>
            <div class="text-h6">{{ post.title }}</div>
            <div class="text-subtitle2">{{ post.tags }}</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            {{ post.content }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { fetchPosts } from 'src/api/posts.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
posts.value = fetchPosts();

const goPage = id => {
  router.push(`/post/detail/${id}`);
};
</script>

<style lang="scss" scoped></style>
