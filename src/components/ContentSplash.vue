<template>
  <div class="splash-grid">
    <img src="@/assets/lincoln-building-1a.jpg" class="splash-grid__img" />

    <img src="@/assets/lincoln-building-2.jpg" class="splash-grid__img" />

    <img src="@/assets/icons/yearbook.png" class="splash-grid__img" />

    <img src="@/assets/icons/varsity.png" class="splash-grid__img" />

    <img src="@/assets/icons/transcription.png" class="splash-grid__img" />

    <img src="@/assets/icons/blog.png" class="splash-grid__img" />

    <!-- <img
      src="@/assets/icons/yearbook.png"
      class="splash-grid__img"  
    />
     <img
      src="@/assets/icons/yearbook.png"
      class="splash-grid__img"  
    />-->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.splash-grid {
  padding-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 30vh) ;
  column-gap: 1em;
  row-gap: 0.5em;

  &__img {
    height: 20vh;
    margin: auto;
    width: fit-content;
  }
}

.row {
  border: 1px black solid;
}
</style>