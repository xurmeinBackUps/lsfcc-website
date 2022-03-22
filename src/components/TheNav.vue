<template>
  <header class="navbar">
    <img alt="Vue logo" class="logo" src="@/assets/vue-logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav class="nav-links">
        <RouterLink to="/">Splash</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/generated-welcome-page">Welcome</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.navbar {
  display: inline;
  margin-left: 3em;
  margin-right: 3em;
}

.logo {
  float: left;
}
.wrapper {
  float: right;
  // margin-right: 2em;
}
</style>