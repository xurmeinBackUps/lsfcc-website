<template>
    <div class="app-container">
      <TheNav class="navigation" />
        <div class="container">
          <RouterView />
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue';
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Forum&family=Roboto&display=swap");

.app-container {
  height: 100vh;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
}

.navigation {
  position: fixed;
  top: 0;
  height: fit-content;
  width: 100%;
  background: $white;
  color: $copy;
  border-bottom: 1px $copy solid;
  z-index: 10;
}

.container {
  position: relative;
  top: 5em;
  z-index: 5;
}
</style>
