<template>
  <v-app>
    <TheNav />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue';
</script>

<style>
@import '@/assets/scss/base.scss';


</style>
