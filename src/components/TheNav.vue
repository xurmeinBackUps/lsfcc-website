<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/vue-logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <v-chip>
          <RouterLink to="/">Splash</RouterLink>
        </v-chip>
        <v-chip>
          <RouterLink to="/about">About</RouterLink>
        </v-chip>
        <v-chip>
          <RouterLink to="/generated-welcome">Welcome</RouterLink>
        </v-chip>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped></style>