<template>
  <div class="btn-wrapper">
    <!-- <a :href="button.href" class="primary-btn" id="primary-btn"> -->

    <nuxt-link
      :class="'primary-btn'"
      :id="'primary-btn'"
      :to="{ path: `${button.href}` }"
    >
      <sliding-right-arrow />
      <span class="ml-3 whitespace-nowrap"> {{ button.text }} </span>
    </nuxt-link>

    <!-- </a> -->
  </div>
</template>

<script lang="ts">
import SlidingRightArrow from "./SlidingRightArrow.vue";
interface Button {
  text: string;
  href: string;
}
export default {
  components: { SlidingRightArrow },
  props: {
    button: {
      type: Object as () => Button,
      required: true,
    },
  },
};
</script>
<style scoped>
.btn-wrapper {
  max-width: 400px;
  /* position: absolute; */
  /* left: 15%;
  top: 85%; */
}
#primary-btn {
  /* position: relative; */
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  /* background: var(--primary-color); */

  background: rgb(45,97,242);
background: linear-gradient(90deg, rgba(45,97,242,0.9822303921568627) 7%, rgba(173,78,230,1) 90%);

  border-radius: 30px;
  font-size: 0.9rem;
  padding: 8px 20px;
  width: 100%;
  transition: all 0.2s linear;
  display: inline-block;
  text-transform: uppercase;
}

#primary-btn:hover {
  font-size: 1rem;
  /* padding: 7px 18px; */
}

@keyframes slide {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}
</style>
