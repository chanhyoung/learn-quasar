<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">
        formatDate - {{ formatDate(new Date(), FORMAT) }}
      </div>
      <div class="text-h6">
        addToDate - {{ formatDate(addToDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        subtractFromDate -
        {{ formatDate(subtractFromDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Format Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">pad - {{ pad('hello', 10, '#') }}</div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Type Checking Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">objA === objB - {{ objA === objB }}</div>
      <div class="text-h6">objA === objB - {{ deepEqual(objA, objB) }}</div>
    </section>
  </q-page>
</template>

<script setup>
import { date, format, is } from 'quasar';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';
const { formatDate, addToDate, subtractFromDate } = date;

const { pad } = format;

const { deepEqual } = is;

const objA = { name: 'abc', hobby: 'game' };
const objB = { name: 'abc', hobby: 'game' };
</script>

<style lang="scss" scoped></style>
