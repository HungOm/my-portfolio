<template>
  <div class="container">
    <div>
      <div class="circular-wave">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>

      <div class="circle">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>


       <div class="circle-2">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>

  <div class="circle-3">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>

        <div class="circle-4">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>

         <div class="circle-5">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>

             <div class="circle-6">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>


      <div class="circle-left-lengthy">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>
      <div class="circle-right-lengthy">
        <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
      </div>
    </div>
    <div class="circular-wrapper">
      <!-- <img  src="~/assets/profile.png" alt="" class="hero-image"> -->
    </div>


    <div class="rope">

    </div>

      <div class="rope-2">
        <!-- <dotted-background/> -->

    </div>
       <div class="rope-3">
        <!-- <dotted-background/> -->

    </div>

        <div class="rope-4">
        <!-- <dotted-background/> -->

    </div>
    

    
    <div class="hero-wrapper">
      <img src="~/assets/profile.png" alt="" class="hero-image" />
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DottedBackground from "../utils/DottedBackground.vue";

export default defineComponent({
  components: { DottedBackground },});
</script>
<style scoped>
.container {
  top: 15%;
  position: absolute;
}
.circular-wrapper {
  height: 20px;
  width: 24px;
  top: 23rem;
  /* margin-top: 8rem; */
  left: 15%;
  position: absolute;
  border-radius: 71% 29% 34% 66% / 30% 30% 70% 70% ;
  /* background-color: var(--primary-color); */
  /* background-color: var(--primary-high-transparent); */

  background: rgb(130,84,249);
background: linear-gradient(90deg, rgba(130,84,249,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);

  animation: spin-right 20s linear infinite;
  z-index: 2;
  /* border: 2px solid white;; */
}

.circle {
  height: 20px;
  width: 24px;
  top: 1rem;
  /* margin-top: 8rem; */
  left: 14%;

  position: absolute;
  border-radius: 41% 59% 67% 33% / 37% 56% 44% 63%  ;
  /* background-color: var(--primary-high-transparent); */
  animation: spin-left 20s linear infinite;
  z-index: 3;

background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.9822303921568627) 21%, rgba(230,78,169,1) 90%);
}


.circle-2 {
  height: 10px;
  width: 10px;
  top: 28rem;
  /* margin-top: 4rem; */
  left: 15.8%;

  position: absolute;
  border-radius: 31% 69% 59% 41% / 23% 24% 76% 77% ;
  /* background-color: var(--primary-high-transparent); */
  animation: spin-left 50s linear infinite;
  z-index: 2;

   background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);

}


.circle-3 {
  height: 20px;
  width: 20px;
  top: 24rem;
  /* margin-top: 4rem; */
  left: 18%;

  position: absolute;
  border-radius: 50% / 50% 40%;
  /* background-color: var(--primary-high-transparent); */
  animation: spin-left 20s linear infinite;
  z-index: 2;

    background: rgb(130,84,249);
background: linear-gradient(90deg, rgba(130,84,249,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);

}



.circle-4 {
  height: 30px;
  width: 30px;
  top: 28rem;
  /* margin-top: 4rem; */
  left: 22%;

  position: absolute;
  border-radius:50%;
  /* background-color: var(--primary-high-transparent); */
  animation: spin-left 20s linear infinite;

z-index: 2;
    background: rgb(130,84,249);
background: linear-gradient(90deg, rgba(130,84,249,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);

}

.circle-5 {
  height: 20px;
  width: 20px;
  top: 30rem;
  /* margin-top: 4rem; */
  left: 38%;

  position: absolute;
  border-radius:31% 69% 16% 84% / 69% 100% 0% 31% ;
  /* background-color: var(--primary-high-transparent); */
  /* animation: spin-left 20s linear infinite; */

background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);
}

.circle-7 {
  height: 20px;
  width: 20px;
  top: 30rem;
  /* margin-top: 4rem; */
  left: 18%;

  position: absolute;
  border-radius:31% 69% 16% 84% / 69% 100% 0% 31% ;
  /* background-color: var(--primary-high-transparent); */
  /* animation: spin-left 20s linear infinite; */
  z-index: 2;

background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);
}







.circle-left-lengthy {
  height: 30px;
  width: 34px;
  /* top: 30%; */
  margin-top: 5rem;
  left: 9%;
  position: absolute;
  border-radius: 44% 23% 85% 29% / 89% 51% 44% 8%;
  /* background-color: var(--primary-low-transparent); */
  animation: spin-left 45s linear infinite;
  z-index: 2;
    /* border: 2px solid white;; */
       background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);

}

.circle-right-lengthy {
  height: 20px;
  width: 14px;
  /* top: 30%; */
  margin-top: 3.5rem;
  left: 10%;
  position:absolute;
  border-radius: 44% 23% 85% 29% / 89% 51% 44% 8%;
  /* background-color: var(--primary-low-transparent); */
  animation: spin-right 45s linear infinite;
  z-index: 2;
  background: rgb(152, 147, 165);
background: linear-gradient(90deg, rgba(130,84,249,0.8841911764705882) 32%, rgba(230,78,169,0.6376925770308124) 78%);
}

.hero-image {
  height: 444px;
  width: 444px;
  animation: none;
  /* top: 28%; */
  left: 12%;

  position: absolute;
  border-radius: 50%;
  border-radius: 71% 29% 34% 66% / 30% 30% 70% 70% ;
  /* background-color: var(--primary-low-transparent); */
background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%);
z-index: 2;
}

/* .hero-image:hover{
   height: 446px;
   width: 446px;

} */

.rope{
  position: absolute;
 height: 198rem;
  width:218rem;
  top:2rem;
  left:-20%;
  /* background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%); */

  border-radius:100% 100% 100% 100% / 100% 100% 94% 100%    ;
z-index: 0;

/* box-shadow: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%);; */
   
   border:1px dashed white;
    
    animation: spin-left 300s linear infinite;
    opacity: 0.5;

}
.rope-2{
  position: absolute;
   height: 200rem;
  width:220rem;
  top:1rem;
  left:-20%;
  /* background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%); */

  border-radius:100% 100% 100% 100% / 100% 100% 96% 87%    ;
z-index: 0;

box-shadow: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%);;
   
   border:1px dashed white;
    
    animation: spin-right 300s linear infinite;
    opacity: 0.5;


}


.rope-3{
  position: absolute;
   height: 200rem;
  width:220rem;
  top:-1rem;
  left:-20%;
  /* background: rgb(45,157,242);
background: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%); */

  border-radius:100% 100% 100% 100% / 100% 100% 96% 87%    ;
z-index: 0;

box-shadow: linear-gradient(90deg, rgba(45,157,242,0.8841911764705882) 21%, rgba(230,78,169,1) 90%);;
   
   border:2px dashed white;
    
    animation: spin-right 1000s linear infinite;
    opacity: 0.2;

}


</style>


