<template>
  <v-app>
    <div class="app-container">
      <v-app-bar>
        <TheNav class="navigation" />
      </v-app-bar>
      <v-main class="content">
        <RouterView />
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue';
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.app-container {
  height: fit-content;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
}

.navigation {
  position: fixed;
  top: 0;
  height: 5em;
  width: 100%;
  background: $white;
  color: $copy;
  border-bottom: 1px $copy solid;
}

.content {
  position: fixed;
  top: 6em;

}
</style>
