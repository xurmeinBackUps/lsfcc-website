<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/vue-logo.svg" width="125" height="125" />

    <div class="wrapper">
 

      <nav>
        <RouterLink to="/">Generated Welcome</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import '@/assets/scss/base.scss';


</style>
