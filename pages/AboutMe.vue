<template>
  <div class="section">
    <div class="section-wrapper p-6">
      <div class="abt-wrapper  flex">
        <!-- <div class="w-2/12 z-2">
          <h4 class="title">About Me</h4>
        </div> -->
        <div class="z-2 p-2 w-full h-8/10" id="aboutme-wrapper">
          <div class="">
            <h1 class="ml-4" id="aboutme-title">About Me.</h1>
          </div>

          <div class="" id="about-me">
            <div class="divide left">
              <div class="skill">
                <div class="skill-image w-4/12">
                  <div class="image-wrapper">
                    <img src="~/assets/undraw_developer_story_dark.svg" alt="" />
                  </div>
                </div>

                <div class="skill-paragragh w-8/12">
                  <div class="aboutme-head">
                    <h5 class="title">Engeering</h5>
                    <h6 class="sub-title">View my Github</h6>
                  </div>
                  <ul>
                    <li>
                      hasdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam dolores quis, officiis quisquam, expedita ex similique
                      tempore eveniet impedit nulla sunt odio ut porro culpa saepe, sint
                      necessitatibus fugiat! Magni!
                    </li>
                  </ul>
                </div>
              </div>

              <div class="skill">
                <div class="skill-image w-4/12">
                  <div class="image-wrapper">
                    <img src="~/assets/undraw_solution_mindset_dark.svg" alt="" />
                  </div>
                </div>
                <div class="skill-paragragh w-8/12">
                  <div class="aboutme-head">
                    <h5 class="title">Design Thinking</h5>
                    <h6 class="sub-title">View my Github</h6>
                  </div>
                  <ul>
                    <li>
                      hasdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam dolores quis, officiis quisquam, expedita ex similique
                      tempore eveniet impedit nulla sunt odio ut porro culpa saepe, sint
                      necessitatibus fugiat! Magni!
                    </li>
                  </ul>
                </div>
              </div>

              <!-- <div class="skill">
                <h5 class="title">Leadership</h5>
                <ul>
                  <li>
                    hasdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam dolores quis, officiis quisquam, expedita ex similique tempore
                    eveniet impedit nulla sunt odio ut porro culpa saepe, sint
                    necessitatibus fugiat! Magni!
                  </li>
                </ul>
              </div> -->
            </div>
            <div class="divide right">
              <div class="skill">
                <div class="skill-image w-4/12">
                  <div class="image-wrapper">
                    <img src="~/assets/undraw_solution_mindset_dark.svg" alt="" />
                  </div>
                </div>
                <div class="skill-paragragh w-8/12">
                  <div class="aboutme-head">
                    <h5 class="title">Design</h5>
                    <h6 class="sub-title">View my Github</h6>
                  </div>
                  <ul>
                    <li>
                      hasdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam dolores quis, officiis quisquam, expedita ex similique
                      tempore eveniet impedit nulla sunt odio ut porro culpa saepe, sint
                      necessitatibus fugiat! Magni!
                    </li>
                  </ul>
                </div>
              </div>

              <div class="skill">
                <div class="skill-image w-4/12">
                  <div class="image-wrapper">
                    <img src="~/assets/undraw_educator_dark.svg" alt="" />
                  </div>
                </div>
                <div class="skill-paragragh w-8/12">
                  <div class="aboutme-head">
                    <h5 class="title">Teach</h5>
                    <h6 class="sub-title">View My classes</h6>
                  </div>
                  <ul>
                    <li>
                      hasdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam dolores quis, officiis quisquam, expedita ex similique
                      tempore eveniet impedit nulla sunt odio ut porro culpa saepe, sint
                      necessitatibus fugiat! Magni!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dottedbackground-1">
        <dotted-background />
      </div>
      <div id="dottedbackground-2">
        <dotted-background />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DottedBackground from "../components/utils/DottedBackground.vue";

export default defineComponent({
  components: { DottedBackground },
  // mounted: () => {
  //   var i = 0;
  //   var txt = "Lorem ipsum typing effect!"; /* The text */
  //   var speed = 100; /* The speed/duration of the effect in milliseconds */
  //   function typeWriter() {
  //     if (i < txt.length) {
  //       let as = document.getElementById("demo") as HTMLElement;
  //       as.innerHTML += txt.charAt(i);
  //       i++;
  //       setTimeout(typeWriter, speed);
  //     }
  //   }
  //   typeWriter();
  // },
});
</script>
<style scoped>
.section-wrapper {
  height: 100vh;
  width: 100vw;
  display: block;
  justify-content: center;
  align-items: center;
  background: var(--background);
}
.abt-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

#aboutme-wrapper {
  height: 95vh;
  /* width: 70vw; */
  /* align-self: left; */
  align-items: center;
  justify-content: center;
}
#dottedbackground-1 {
  position: relative;
  height: 300px;
  width: 300px;
  bottom: 80%;
  left: 8%;
  z-index: 1;
  /* opacity: 0.5; */
}

#dottedbackground-2 {
  position: relative;
  height: 300px;
  width: 300px;
  /* top: 50%;
  left: 76%; */
  left:76%;
  bottom:110%;
  z-index: 1;
  overflow: hidden;
  /* opacity: 0.5; */
}

#about-me {
  /* height: 90vh;
  width: 90vw;
  padding: 0.5rem;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex; */

  display: flex;
  align-items: center;
  justify-content: center;
}
#aboutme-title {
  color: white;
  margin-left: 10.5rem;
}
/* #demo, */
.title {
  position: relative;
  color: white;
}

.divide {
  /* background-color: rgba(240, 219, 219, 0.26); */
  height: 100%;
  width: 50%;
  /* padding: 2rem; */
  display: block;
  color: white;
}

.left,
.right {
  padding: 1.5rem;
}

.skill {
  margin-top: 1rem;
  display: flex;
}
.aboutme-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
}

.sub-title {
  font-size: 16px;
}
.skill-image {
  display: flex;

  justify-content: center;
  align-items: center;
  margin: -1rem;
}
.image-wrapper {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
</style>
