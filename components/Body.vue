<template>
  <div class="body-section">
    <!-- <MiddleBlock /> -->
    <div class="section container flex flex-row min-h-screen min-w-full">
      <section class="body left min-h-full w-6/12" id="left">
        <div class="container">
          <BrandHero />
        </div>
      </section>

      <section class="body right min-h-full w-6/12" id="right">
        <!-- <CircleShape/> -->

        <div class="intro-section">
          <div class="text-wrapper ml-12">
            <div class="intro-title">
              <h6>Hello,my name is</h6>
              <h1 class="brand-title -ml-2">Hung Om</h1>
            </div>

            <div class="intro">
              <p class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem neque odit
                libero? Minus ex, harum odio, vitae recusandae nesciunt qui debitis aut
                saepe perspiciatis quisquam dicta soluta quasi enim! Numquam.
              </p>
            </div>

            <div class="action-button">
              <Button :button="{ text: 'View portfolio', href: '/portfolio' }" />
            </div>
          </div>
        </div>

        <!-- <div class="intro-patterns">
          <div class="shape-1">
            <ShapeOne />
          </div>

          <div class="shape-2">
            <ShapeCircle />
          </div>

          <div class="shape-3">
            <ShapeCircle />
          </div>
        </div> -->

        <div class="social-icons">
          <div class="line left-line">
            <horizontal-line />
          </div>

          <li>
            <fs-icon :icon="['fab', 'github']" class="icon" />
          </li>

          <li>
            <fs-icon :icon="['fab', 'twitter']" class="icon" />
          </li>

          <li>
            <fs-icon :icon="['fab', 'linkedin-in']" class="icon" />
          </li>

          <div class="line right-line">
            <horizontal-line />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import BrandHero from "./Brand/BrandHero.vue";
import MiddleBlock from "./Brand/MiddleBlock.vue";
import Button from "./utils/Button.vue";
import HorizontalLine from "./utils/HorizontalLine.vue";
import ShapeCircle from "./utils/ShapeCircle.vue";
import ShapeOne from "./utils/ShapeOne.vue";

export default defineComponent({
  components: { Button, BrandHero, ShapeOne, MiddleBlock, ShapeCircle, HorizontalLine },

  data: () => {
    return {
      active: false,
    };
  },
  methods: {
    toggle(): void {
      this.active = !this.active;
    },
  },
});
</script>
<style scoped>
.body-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden !important;
  position: relative;
  padding: 1rem;
  background-color: var(--background);
  color: white;
}

.shape-1 {
  top: 85%;
  position: absolute;
  left: 70%;
  z-index: 2;
}
.shape-2 {
  top: 95%;
  position: absolute;
}

.shape-3 {
  top: 56%;
  left: 90%;
  position: absolute;
  z-index: 5;
}

.intro-section {
  top: 15%;
  position: absolute;
  /* color: var(--primary-color); */
  padding: 1rem;
  /* z-index: 1; */
  /* background-color:var(--primary-color); */
  /* padding:0.5rem; */
}

.text-wrapper {
  position: relative;
  width: 500px;
  height: 400px;
  padding: 1rem;
  margin-left: 1rem;
  z-index: 2;
  /* border: 2px solid var(--primary-color); */
  /* background:var(--on-background); */
}

.text-wrapper::before,
.text-wrapper::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;
  /* border: 2px solid yellow; */
  transition: all 0.3s ease-out;
  padding: 1rem;
}

.text-wrapper::before {
  /* background-color: var(--on-background-alt); */
  /* background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 50%, #f9c1ff 100%); */

  top: -15px;
  left: -15px;
  /* padding:2rem; */
  /* margin:2rem; */
  z-index: -21;
}

.text-wrapper::after {
  bottom: -15px;
  right: -15px;
  /* border: 2px solid yellow; */
}

.text-wrapper:hover::before {
  top: 8px;
  left: 8px;
  padding: 1rem;
}

.text-wrapper:hover::after {
  bottom: 8px;
  right: 8px;
  padding: 1rem;
}
/* .text-wrapper:hover {
  top: 25px;
  left: 25px;
  padding: 1rem;
} */

.social-icons {
  top: 85%;
  left: 8%;
  /* position: absolute; */
  position: relative;
  display: flex;

  /* background: red; */
}

.social-icons li {
  list-style: none;
  /* width: 60px;
  height: 60px; */
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.1); */
  margin: 10px;
  margin-top: 1.5rem;
}
.social-icons .icon {
  /* background-color: ivory; */
  position: relative;

  color: rgb(240, 236, 236);
  font-size: 1.2rem;
  /* background: #fff; */
  border-radius: 50%;
  margin: 28%;
}

.line {
  position: relative;
  margin-top: 2.4rem;
}

.action-button {
  /* top: 70%;
  left: 30%; */
  position: relative;
  width: 12rem;
  margin-top: 1rem;
}

.right {
  /* box-shadow: 0 30px 40px rgba(0,0,0,.1); */
}
.intro-title {
  top: 30%;
  /* position: relative; */
  z-index: 1;
}
</style>
