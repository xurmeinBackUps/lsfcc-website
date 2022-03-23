<template>
  <nav class="nav-links">
    <ul class="no-bullets">
      <li>
        <RouterLink to="/">
          <img
            alt="Lincoln School for Colored Children project logo"
            class="logo"
            src="@/assets/icons/logo.png"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/generated-welcome-page">Welcome</RouterLink>
      </li>
      <li>Sponsors</li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.nav-links {
  display: inline;
}

.logo {
  width: 5em;
}

.no-bullets {
  list-style: none;
}
</style>