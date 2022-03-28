<template>
  <q-layout view="hHh lpR fFf" container class="app-container">
    <TheNavbar />

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import {
  QLayout,
  QPageContainer,
  QPage
} from 'quasar';
import TheNavbar from './components/TheNavbar.vue';
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Forum&family=Roboto&display=swap");

.app-container {
  height: 100vh;
}
</style>
