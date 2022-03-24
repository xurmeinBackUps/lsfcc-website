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
      <div class="nav-links__right">
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
.nav-links {
  display: inline;

  &__right {
    float: right;
  }
}

.logo {
  width: 5em;
  float: left;
}

.no-bullets {
  list-style: none;
}
</style>