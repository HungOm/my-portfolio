<template>
  <div class="">
    <div class="brand-container text-red-400" >

      <!-- disable-elint-invalid-first-character-of-tag-name -->
      <NuxtLink to='/'><h1 id="brand" class="text-red-400" > Om </h1></NuxtLink>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"    
 
export default defineComponent({

});
</script>
<style scoped>



#brand{
    position:fixed;
    text-decoration-thickness: 10rem;

    left:0.5rem;
    top:0;  
    margin:10px;
    color: rgba(10, 10, 10, 0.986); 
    font-size: 40px;
    cursor: pointer;
    color:var(--primary-color);
    z-index: 10;


}
</style>
