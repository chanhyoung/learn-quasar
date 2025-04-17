<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">게시글 수정</div>
      <q-separator class="q-my-md" />
      <q-form
        ref="myForm"
        class="q-gutter-y-md q-mt-lg"
        autofocus
        greedy
        @submit.prevent="update"
      >
        <q-input
          outlined
          v-model="post.title"
          label="제목"
          :rules="[val => !!val || '필수 항목입니다']"
        />
        <q-input
          outlined
          v-model="post.content"
          label="내용"
          type="textarea"
          hint="50자 이내로 입력해주세요"
          counter
          :rules="[
            val => !!val || '필수 항목입니다',
            val => val.length <= 50 || '최대 50자 이내로 입력하세요',
          ]"
          lazy-rules
        />
        <q-select
          outlined
          v-model="post.tags"
          :options="tagOptions"
          label="태그"
          emit-value
          multiple
          hint="최대 2개 선택가능합니다"
          :rules="[
            val => val.length > 0 || '필수 항목입니다',
            val => val.length <= 2 || '최대 2개 까지 선택 가능합니다',
          ]"
        />
        <!-- <q-input
          outlined
          v-model="post.createdAt"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.createdAt">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input> -->
        <q-toggle :label="`동의 하시겠습니까?`" v-model="post.accept" />
        <!-- false-value="Disagreed"
          true-value="Agreed" -->
        <div class="row q-gutter-x-sm">
          <q-space></q-space>
          <q-btn label="수정" type="submit" color="primary" />
          <q-btn
            label="취소"
            outline
            color="negative"
            @click="goDetail(post.id)"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from 'src/api/posts.js';
import { useQuasar, date } from 'quasar';
const { formatDate } = date;
const $q = useQuasar();

const route = useRoute();
const router = useRouter();

const post = ref({
  id: '',
  title: '',
  content: '',
  tags: [],
  // createdAt: formatDate(new Date(), 'YYYY/MM/DD'),
  accept: false,
});

const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '페이스북', value: 'facebook' },
  { label: '트위터', value: 'twitter' },
  { label: '애플', value: 'apple' },
  { label: '오라클', value: 'oracle' },
]);

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
  post.value.accept = data.accept;
};
fetchPost();

const update = async () => {
  // myForm.value.validate();

  try {
    console.log('post: ', post.value);
    await updatePost(post.value.id, {
      ...post.value,
    });
    router.push(`/post/detail/${post.value.id}`);
  } catch (err) {
    console.error(err);
  }
};

const goDetail = id => {
  router.push(`/post/detail/${id}`);
};
</script>

<style lang="scss" scoped></style>
