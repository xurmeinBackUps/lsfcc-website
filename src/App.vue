<template>
  <div class="app-container">
    <TheNav class="navigation"/>
    <RouterView class="content"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue';
</script>

<style>
@import '@/assets/scss/base.scss';

.content {
  position:absolute;
  margin-top: 10em;
}
</style>
