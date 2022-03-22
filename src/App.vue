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
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Roboto&display=swap');

.app-container {
  height: 100vh;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
}

.navigation {
  position: fixed;
  height: 100%;
  width: 10em;
  background: $white;
  color: $copy;
  border-right: 1px $copy solid;
}

.content {
  margin-left: 11em;
}
</style>
