<template>
  <!-- <div> -->
    <fs-icon  icon="long-arrow-alt-right"  id="arrow"/>
  <!-- </div> -->
</template>

<script lang="ts">
export default {

};
</script>
<style scoped>

#arrow {
  animation: slide-right 1s linear infinite;
}

@keyframes slide-right{
  0%,
  100% {
    transform: translate(0, 0) ;
  }

  50% {
    transform: translate(10px, 0);
  }
}
</style>
