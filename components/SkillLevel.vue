<template>
  <div class="proficiency bg-blue-900 flex justify-center">
    <div class="flex text-center">
      <div class="flex-1">
        <circular-progress :level="50" />
           <div>

              <h6>Backend</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      </div>

      <div class="flex-1">
        <circular-progress :level="90" />
        <div>

              <h6>Backend</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      
      </div>

      <div class="flex-1">
        <circular-progress :level="70" />

           <div>

              <h6>Front-End</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      </div>

      <!-- <div class="flex-1">
        <circular-progress :level="90" />
      </div> -->
    </div>
 
  </div>
</template>

<script lang="ts">
import CircularProgress from "./utils/CircularProgress.vue";

export default {
  components: { CircularProgress },
};
</script>

<style scoped>
.proficiency{
    padding:2rem;
}
.flex-1{
    margin:auto 3rem auto 3rem;
    color:white;
}
</style>
