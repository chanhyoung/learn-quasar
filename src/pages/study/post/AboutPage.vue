<template>
  <q-page padding>
    <div class="text-h6">Post About Page</div>
    <p>{{ $route.path }}</p>
    <div class="q-gutter-y-xs">
      <p>
        <q-btn color="primary" label="Home으로 이동" to="/post/home" />
      </p>
      <p>
        <q-btn
          color="primary"
          label="ShowErrorMessage"
          @click="errorMessage('에러 입니다.')"
        />
      </p>
      <p>
        <q-btn color="primary" label="Notify" @click="notifyMsg" />
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

const route = useRoute();
const $q = useQuasar();

console.log('route.path: ', route.path);

const notifyMsg = () => {
  $q.notify({
    position: 'top-right',
    type: 'positive',
    message: '자료를 저장하였습니다.',
    color: 'blue',
  });
};
</script>

<style lang="scss" scoped></style>
