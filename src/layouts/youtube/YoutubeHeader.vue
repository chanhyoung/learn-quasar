<template>
  <q-header class="bg-white text-grey-8" height-hint="56">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm"> </q-btn>
      <q-avatar>
        <q-img ratio="1" src="/logo.png"></q-img>
      </q-avatar>

      <q-toolbar-title shrink class="text-subtitle1 text-weight-bolder">
        GYM CODING
      </q-toolbar-title>
      <q-space></q-space>
      <div class="search row items-center">
        <q-input
          class="col-grow"
          outlined
          square
          dense
          placeholder="검색"
          @focus="isSearchFocus = true"
          @blur="isSearchFocus = false"
        >
          <template v-if="isSearchFocus" #prepend>
            <q-icon name="search"></q-icon>
          </template>
          <template #append>
            <q-icon name="keyboard"></q-icon>
          </template>
        </q-input>
        <q-btn
          class="search-btn"
          icon="search"
          unelevated
          color="grey-3"
          text-color="black"
          square
        ></q-btn>
        <q-btn
          class="q-ml-sm"
          icon="mic"
          unelevated
          color="grey-3"
          text-color="black"
          round
        ></q-btn>
      </div>
      <q-space></q-space>
      <q-btn flat round icon="more_vert"> </q-btn>
      <q-btn outline rounded icon="account_circle" label="로그인"> </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

const isSearchFocus = ref(false);
</script>

<style lang="scss" scoped>
.q-toolbar {
  height: 56px;
  border-style: solid;
  border-width: 0px 0px 1px 0;
  border-color: #c9c9c9;
}
.search {
  min-width: 100px;
  max-width: 600px;
  width: 55%;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
