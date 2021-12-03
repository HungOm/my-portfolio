<template>
  <div class="shape-1-wrapper">
      <div class="shape-1-circle bg-blue-500"></div>
  </div>
</template>

<script lang="ts">

// import { defineComponent } from "@vue/composition-api"    
 
export default {

};
</script>
<style scoped>

.shape-1-circle{
    /* position: absolute; */
width:500px;
height:500px;
border-radius: 76% 55% 51% 49% / 63% 52% 63% 55% ;
transform: rotate(30deg);
  background-color: rgba(94, 158, 243, 0.9);
    animation:spin-right 10s linear infinite;



/* z-index: 5; */

}

</style>
