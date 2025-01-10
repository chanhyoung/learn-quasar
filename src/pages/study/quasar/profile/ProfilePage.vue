<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img ratio="1" src="/logo.png"></q-img>
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">helinlee.gram</span>
          <q-space></q-space>
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1"></q-btn>
            <q-btn outline color="secondary" label="프로필 편집2"></q-btn>
            <q-btn outline color="secondary" label="프로필 편집3"></q-btn>
            <q-btn flat color="secondary" icon="more_horiz"></q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 238</span>
          <span>팔로워 2,032</span>
          <span>팔로우 1,432</span>
        </div>
        <div>
          <div>헬린이</div>
          <div>#ESFJ 인스타잠시 쉬어요</div>
          <div>linktr.ee/gymcoding</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <q-avatar size="70px">
            <q-img ratio="1" src="/logo.png"></q-img>
          </q-avatar>
          <div class="text-center">제목</div>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          label="게시글"
          to="/quasar/profile"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          label="저장됨"
          to="/quasar/profile/saved"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="local_offer"
          label="태그됨"
          to="/quasar/profile/tagged"
          exact
        />
      </q-tabs>
      <router-view></router-view>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
