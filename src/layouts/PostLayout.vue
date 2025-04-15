<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title shrink> Post Lecture </q-toolbar-title>
        <div class="q-gutter-x-md">
          <RouterLink to="/post/home" active-class="active">Home</RouterLink>
          <RouterLink to="/post/about" active-class="active">About</RouterLink>
        </div>
        <q-space></q-space>
        <q-btn
          flat
          round
          dense
          :icon="darkModeIcon"
          @click="toggleDarkMode"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-avatar class="q-mr-sm" size="lg">
            <img src="/logo.png" />
          </q-avatar>
          <span>Quasar v{{ $q.version }}</span>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: 'Home',
    icon: 'school',
    to: '/post/home',
  },
  {
    title: 'About',
    icon: 'school',
    to: '/post/about',
  },
];
</script>
<script setup>
import EssentialLink from 'components/EssentialLink.vue';
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const essentialLinks = linksList;
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);

const toggleDarkMode = () => {
  $q.dark.toggle();
  $q.localStorage.set('darkMode', $q.dark.isActive);
};
</script>
