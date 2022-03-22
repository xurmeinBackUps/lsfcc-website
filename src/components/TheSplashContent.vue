<template>
  <div class="splash-grid">
 
      
        <img src="@/assets/lincoln-building-1a.jpg" class="splash-grid__img"/>
      
      
      
  
              <img src="@/assets/lincoln-building-2.jpg" class="splash-grid__img"/>

        <img src="@/assets/icons/yearbook.png" class="splash-grid__img"/>
      
      
        <img src="@/assets/icons/varsity.png" class="splash-grid__img"/>
      
   
      
        <img src="@/assets/icons/transcription.png" class="splash-grid__img"/>
      
      
        <img src="@/assets/icons/blog.png" class="splash-grid__img"/>

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
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1em;
  row-gap: 0.5em;

  &__img {
    max-width: 25em;
    
  }
}

.row {
  border: 1px black solid;

 
}
</style>