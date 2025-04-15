<template>
  <q-page padding>
    <div class="text-h6">Post About Page</div>
    <p>{{ $route.path }}</p>
    <q-btn color="primary" label="Home으로 이동" to="/post/home" />
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.path: ', route.path);
</script>

<style lang="scss" scoped></style>
