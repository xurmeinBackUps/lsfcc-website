<template>
  <div class="app-container">
    <TheNav class="navigation"/>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue';
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.app-container {
  height: 100vh;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
}

.navigation {
  position: fixed;
  top: 0;
  height: 10em;
  width: 100%;
  background: $white;
  color: $copy;
  border-bottom: 1px $copy solid;
}

.content {
  margin-top: 11em;
}
</style>
