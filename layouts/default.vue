<template>
  <div>
    <BrandName/>
    <MenuIcon />
    <Nuxt />
  </div>
</template>
<script>
import BrandName from '~/components/Brand/BrandName.vue'
import MenuIcon from '~/components/MenuIcon.vue'
export default {
  components: { BrandName, MenuIcon },
  
}
</script>
