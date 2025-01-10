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

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          :icon="darkModeIcon"
          @click="toggleDarkMode"
        ></q-btn>
        <q-btn round size="sm" class="q-ml-md">
          <q-avatar>
            <img src="/logo.png" />
          </q-avatar>
          <q-menu :offset="[0, 10]">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/quasar/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup to="/auth/sign-in">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
    title: 'Typography',
    icon: 'school',
    to: '/quasar/typography',
  },
  {
    title: 'Colors',
    icon: 'school',
    to: '/quasar/colors',
  },
  {
    title: 'Spacing',
    icon: 'school',
    to: '/quasar/spacing',
  },
  {
    title: 'Breakpoints',
    icon: 'school',
    to: '/quasar/breakpoints',
  },
  {
    title: 'HelperClasses',
    icon: 'school',
    to: '/quasar/helper-classes',
  },
  {
    title: 'Flex Grid 1',
    icon: 'school',
    to: '/quasar/flex-grid-1',
  },
  {
    title: 'Profile',
    icon: 'school',
    to: '/quasar/profile',
  },
  {
    title: 'FormHandling',
    icon: 'school',
    to: '/quasar/form-handling',
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
