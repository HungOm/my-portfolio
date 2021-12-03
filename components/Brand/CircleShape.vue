<template>
  <div class="container">
      <span class="inner-circle"></span>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"    
 
export default defineComponent({

});
</script>
<style scoped>

.inner-circle{
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border-style: solid;
  border-width: 45px;
  /* line-height: 700px; */
  border-color: rgb(95, 95, 226);
  /* padding: 100px 118px; */
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 1;
  top:30%;
  left:39.888%
}

</style>
