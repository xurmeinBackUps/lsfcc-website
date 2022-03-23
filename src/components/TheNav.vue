<template>
  <nav class="nav-links">
    <ul class="no-bullets">
      
      <li class="logo-link">
        <RouterLink to="/">
          <img alt="Lincoln School for Colored Children project logo" class="logo" src="@/assets/icons/logo.png" />
        </RouterLink>
      </li>
      <div class="nav-link-items">
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/generated-welcome-page">Welcome</RouterLink>
      </li>
      <li>Sponsors</li>
    </div>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>

.logo {
  width: 5em;
}

.no-bullets {
  list-style: none;
}

.logo-link {
  float: left;
}

.nav-link-items {
  float: right;
}
</style>