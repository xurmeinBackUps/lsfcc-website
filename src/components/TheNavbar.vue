<template>
  <q-header reveal elevated class="bg-primary text-white text-center">
    <q-toolbar class="nav-links">
      <ul class="no-bullets">
        <li>
          <router-link to="/">
            <img
              alt="Lincoln School for Colored Children project logo"
              class="logo"
              src="@/assets/icons/logo.png"
            />
          </router-link>
        </li>
        <q-toolbar-title class="site-title">Lincoln School for Colored Children Project</q-toolbar-title>
        <div class="nav-links__right">
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/generated-welcome-page">Welcome</router-link>
          </li>
          <li>Sponsors</li>
        </div>
      </ul>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {
  QHeader,
  QToolbar,
  QToolbarTitle
} from 'quasar';
</script>

<style lang="scss" scoped>
.nav-links {
  display: inline-block;
  width: 100vw;

  &__right {
    float: right;
    top: 15px;
  }
}

.site-title {
  margin: auto;
}

.logo {
  width: 4.5em;
  float: left;
}

.no-bullets {
  list-style: none;
}
</style>
