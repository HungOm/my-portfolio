<template>
  <div class="skills-section">
    <div class="skills-wrapper">
      <div class="left pane">
        <div class="experience">
          <!-- <h1>My experience</h1> -->

          <div id="content">
            <h1>Timeline Concept</h1>

            <ul class="timeline">
              <li class="event" data-year="2014 - 2016">
                <h3>Registration</h3>
                <p>
                  Get here on time, it's first come first serve. Be late, get turned away.
                </p>
              </li>
              <li class="event" data-year="2014 - 2016">
                <h3>Opening Ceremony</h3>
                <p>
                  Get ready for an exciting event, this will kick off in amazing fashion
                  with MOP & Busta Rhymes as an opening show.
                </p>
              </li>
              <li class="event" data-year="2014 - 2016">
                <h3>Main Event</h3>
                <p>
                  This is where it all goes down. You will compete head to head with your
                  friends and rivals. Get ready!
                </p>
              </li>
              <li class="event" data-year="2014 - 2016">
                <h3>Closing Ceremony</h3>
                <p>
                  See how is the victor and who are the losers. The big stage is where the
                  winners bask in their own glory.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="right pane">
        <!-- <h1>Work life</h1> -->

        <div class="tool-set">
          <img src="~/assets/undraw_working_from_anywhere_dark.svg" alt="" />
          <!-- <h1>Hello</h1>

          <p class="tool-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem unde
            ratione ipsam. Ut beatae tempore maxime, voluptas voluptates commodi error
            architecto facilis! Rem dolorum at minima commodi eos tenetur enim!
          </p>
        </div>

         <div class="tool-set">
          <h1>Hello</h1>

          <p class="tool-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem unde
            ratione ipsam. Ut beatae tempore maxime, voluptas voluptates commodi error
            architecto facilis! Rem dolorum at minima commodi eos tenetur enim!
          </p>
        </div>


         <div class="tool-set">
          <h1>Hello</h1>

          <p class="tool-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem unde
            ratione ipsam. Ut beatae tempore maxime, voluptas voluptates commodi error
            architecto facilis! Rem dolorum at minima commodi eos tenetur enim!
          </p>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DottedBackground from "../components/utils/DottedBackground.vue";

export default defineComponent({
  components: { DottedBackground },
});
</script>
<style scoped>
.skills-section {
  min-height: 100vh;
  width: 100vw;
  background-color: var(--background);
  display: flex;
  align-items: center;
  /*justify-content: center; */
  color: white;
}

.skills-wrapper {
  /* margin:2rem; */

  display: flex;
  align-items: center;
  justify-content: center;
}

.pane {
  /* min-height: 100%; */
  /* width: 48vw; */
  /* background-color: rgba(255, 255, 255, 0.205); */
}
.skills-wrapper .left {
  width: 50vw;
}

.skills-wrapper .right {
  width: 50vw;
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

#content {
  margin-top: 50px;
  text-align: center;
}
/* Timeline */
.timeline {
  border-left: 4px solid #882cdd;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  /* background: rgba(255, 255, 255, 0.03); */
  color: rgba(255, 255, 255, 0.8);
  font-family: "Source Sans Pro", sans-serif;
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 20px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  /* max-width: 100%; */
  margin-left: 30%;
}
.timeline h1,
.timeline h2,
.timeline h3 {
  /* font-family: 'Oswald', sans-serif; */
  letter-spacing: 1.5px;
  font-weight: 400;
  font-size: 1.4em;
}
.event {
  height: 8rem;
  width: 25rem;
  padding: 1rem;
background: rgb(49,145,156);
background: linear-gradient(90deg, rgba(49,145,156,0.9318102240896359) 7%, rgba(249,104,234,0.8897934173669468) 90%);
  border-radius: 10px;
}
.timeline .event {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  padding-bottom: 25px;
  margin-bottom: 50px;
  position: relative;
}
.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}
.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}
.timeline .event:before {
  left: -42%;
  /* top:-20%; */
  /* color: rgba(255, 255, 255, 0.4); */
  content: attr(data-year);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}
.timeline .event:after {
  box-shadow: 0 0 0 4px #9c2df7;
  left: -26.85px;
  background: #313534;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}
.skills-wrapper .right {
  padding: 2rem;
  bottom: -14rem;
  /* width: 30vw; */
  position: relative;
  overflow: hidden;
}
</style>
