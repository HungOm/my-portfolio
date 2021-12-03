<template>
  <div class="shape-circle-wrapper">
      <div class="shape-circle"></div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"    
 
export default defineComponent({

});
</script>
<style scoped>

.shape-circle{
  width: 640px;
  height: 640px;
  border-radius: 50%;
  /* border-style: solid;
  border-width: 45px; */
  /* line-height: 700px; */
  /* border-color: rgb(95, 95, 226); */
  /* padding: 100px 118px; */
  background-color: rgba(52, 104, 247, 0.9);
  /* z-index: 9; */
  /* position:inherit; */

}

</style>
