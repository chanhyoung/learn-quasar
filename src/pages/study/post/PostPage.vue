<template>
  <q-page padding>
    <div class="text-h6">Post Home Page</div>
    <p>{{ $route.path }}</p>
    <q-btn color="primary" label="About으로 이동" @click="goAboutPage" />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goAboutPage = () => {
  router.push('/post/about');
};
</script>

<style lang="scss" scoped></style>
