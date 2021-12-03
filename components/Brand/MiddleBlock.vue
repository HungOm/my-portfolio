<template>
  <div class="middle-block">
    <div class="" id="square-mb"></div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<style scoped>

#square-mb {
  /* padding: 10px; */
  width: 2px;
  height: 330px;
  top: 28%;
  left: 49.9%;
  position: absolute;
  background: rgba(252, 255, 104, 1);
  /* background: var(--primary-color); */
  /* box-shadow: 0 0 0 4px var(--primary-color), 2px 1px 6px 4px rgba(10, 10, 0, 0.5); */

  border-radius: 10px;
  /* border: 1px dashed #fff; */
  z-index: 2;
  animation: hovering 1s linear infinite  ;
}




</style>
