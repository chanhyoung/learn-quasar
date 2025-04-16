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
        @submit="onSubmit"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[val => !!val || '필수 항목입니다']"
        />
        <q-input
          outlined
          v-model="form.content"
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
          v-model="form.tags"
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
        <q-input
          outlined
          v-model="form.createdAt"
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
        </q-input>
        <q-toggle :label="`동의 하시겠습니까?`" v-model="form.accept" />
        <!-- false-value="Disagreed"
          true-value="Agreed" -->
        <div class="row q-gutter-x-sm">
          <q-space></q-space>
          <q-btn label="수정" type="submit" color="primary" />
          <q-btn
            label="취소"
            outline
            color="negative"
            @click="goDetail(form.id)"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchPost } from 'src/api/posts.js';
import { useQuasar, date } from 'quasar';
const { formatDate } = date;
const $q = useQuasar();

const route = useRoute();
const router = useRouter();

const form = ref({
  title: '',
  content: '',
  tags: [],
  createdAt: formatDate(new Date(), 'YYYY/MM/DD'),
  accept: false,
});

const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '페이스북', value: 'facebook' },
  { label: '트위터', value: 'twitter' },
  { label: '애플', value: 'apple' },
  { label: '오라클', value: 'oracle' },
]);

form.value = fetchPost(route.params.id);

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의 해주세요!!!');
    return;
  }
  $q.loading.show();
  setTimeout(() => {
    $q.loading.hide();
    alert('수정 성공~!');
  }, 1000);

  console.log('form: ', form.value);
};

const goDetail = id => {
  router.push(`/post/detail/${id}`);
};
</script>

<style lang="scss" scoped></style>
