<template>
  <div class="" id="line"></div>
</template>

<script lang="ts">
export default {};
</script>
<style scoped>
#line {
  min-width: 100px;
  height: 2px;
  /* background: var(--primary-color);
   */

  background: rgb(45, 97, 242);
  background: linear-gradient(
    90deg,
    rgba(45, 97, 242, 0.9822303921568627) 7%,
    rgba(173, 78, 230, 1) 90%
  );

  border-radius: 10px;
  z-index: 2;
}
</style>
