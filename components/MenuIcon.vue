<template>
  <div class="container">
    <div class="menu-icon-wrapper">
      <div class="menu-icon" :class="active ? 'change' : ''" @click="toggle">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>

    <div
      class="overlay"
      :class="active ? 'overlay-slide-right' : 'overlay-slide-left'"
      @click="toggle"
      id="overlay"
    >
      <nav>
        <ul>
          <li id="nav-1"><a href="/">Home </a></li>
          <li id="nav-2"><a href="/aboutme">About</a></li>
          <li id="nav-3"><a href="/skills">Skills</a></li>
          <li id="nav-4"><a href="/portfolio">Projects</a></li>
          <li id="nav-5"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
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
.menu-icon-wrapper {
  display: inline;
  width: 40px;
  top: 1rem;
  right: 1.2rem;
  position: fixed;
  text-align: right;
  z-index: 10;
}

.container .menu-icon {
  cursor: pointer;
  z-index: 10;
  position: relative;
  /* background-color: white; */
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 4px;
  background-color:var(--primary-color);

  margin: 6px 0;
  transition: 0.4s;
  align-items: right;
}
.bar1,
.bar3 {
  /* margin-right: 1rem; */
  width: 2rem;
}
.bar2 {
  margin-left: 0.8rem;
  transition: 0.1s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
  background-color: rgb(214, 214, 214);
}

.change .bar2 {
  opacity: 0;
  transition: 2s;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
  background-color: rgb(214, 214, 214);
}

.overlay {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translatew(-100vw);
}

.overlay-slide-right {
  transition: all 0.3s ease-in-out;
  transform: translatew(0);
}

.overlay-slide-left {
  transition: all 0.3s ease-in-out;
  transform: translate(-100vw);
}

nav,
nav ul {
  height: 100vh;
  margin: 0;
  padding: 0;
}

nav ul {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  list-style: none;
}

nav ul li {
  height: 20%;
  overflow: hidden;
}

nav li a {
  position: relative;
  top: 45%;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-weight: 900;
}
</style>
