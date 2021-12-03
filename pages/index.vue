<template>
  <div>
    <Body />
    <!-- <SideNav/> -->

    <!-- <skills/> -->
    <portfolio />

    <about-me />

    <mystacks />

    <skill-level />

    <contact/>

  </div>
</template>

<script lang="ts">
import SkillLevel from "~/components/SkillLevel.vue";
import AboutMe from "./AboutMe.vue";
import Contact from './Contact.vue';
import Mystacks from "./mystacks.vue";
import Portfolio from "./Portfolio.vue";
import Skills from "./skills.vue";
// import Vue from "vue";

export default {
  components: { Portfolio, AboutMe, Skills, Mystacks, SkillLevel, Contact },

  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.4s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
