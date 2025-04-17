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
    <div class="q-gutter-y-xs">
      <p>Store</p>
      <p>counter: {{ store.counter }}</p>
      <p>doubleCounter: {{ store.doubleCount }}</p>
      <p>
        <q-btn color="primary" label="Counter" @click="store.increment()" />
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import { useCounterStore } from 'src/stores/counter';

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

const store = useCounterStore();
</script>

<style lang="scss" scoped></style>
