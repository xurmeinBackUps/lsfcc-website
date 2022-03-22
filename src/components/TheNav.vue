<template>
  <header class="navbar">
    <img
      alt="Lincoln School for Colored Children project logo" 
      class="logo" 
      src="@/assets/icons/logo.png" 
      width="125" 
      height="125" 
    />

    <div class="wrapper">
      <nav class="nav-links">
        <ul class="no-bullets">
          <li>
            <RouterLink to="/">Splash</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>        
            <RouterLink to="/generated-welcome-page">Welcome</RouterLink>
          </li>
        </ul>
        
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.no-bullets {
  list-style: none;
}
</style>