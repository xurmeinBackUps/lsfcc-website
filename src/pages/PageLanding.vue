<template>
  <div>
    <div class="q-pa-xl splash-grid">
      <RouterLink to="/lincoln-school/building-1">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/lincoln-building-1a.jpg" class="splash-grid__img" />
        </q-card>
      </RouterLink>

      <RouterLink to="/lincoln-school/building-2">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/lincoln-building-2.jpg" class="splash-grid__img" />
        </q-card>
      </RouterLink>

      <RouterLink to="/">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/icons/yearbook.png" class="splash-grid__img" />
        </q-card>
      </RouterLink>

      <RouterLink to="/">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/icons/varsity.png" class="splash-grid__img" />
        </q-card>
      </RouterLink>

      <RouterLink to="/">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/icons/transcription.png" class="splash-grid__img" />
        </q-card>
      </RouterLink>

      <RouterLink to="/">
        <q-card class="card">
          <q-img fit="scale-down" src="@/assets/icons/blog.png" class="splash-grid__img" />
        </q-card>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
  QCard,
  QImg
} from 'quasar';
</script>

<style lang="scss" scoped>
.splash-grid {
  padding-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 50px;

  &__img {
    height: 250px;
  }
}

.card {
  margin: 50px;
}
</style>
