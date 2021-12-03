<template>
  <div class="portfolio-section min-h-screen p-6 w-full">
    <div class="section portfolio-container">
      <div id="dotted-background">
        <dotted-background />
      </div>
      <!-- <div class="project-wrapper"> -->

      <div class="section-title">
        <h1 class="title">Hello title</h1>
      </div>

      <div class="wrapper"  style="background-image: url('~/assets/coding-laptop-min.jpeg')">
        <div class="css-grid">

          <div class="card-overlay">

          </div>

          <div class="card-wrapper">
            <div class="car-image" >
              <img src="~/assets/coding-laptop-min.jpeg" alt="" class="card-image">


            </div>

            <div class="card">
              <div class="card-header">
                <h1>Hello</h1>


              </div>

              <div class="card-body"></div>

            </div>

          </div>
        </div>
        <div class="css-grid">Two</div>
        <div class="css-grid">Three</div>
        <div class="css-grid">Four</div>
        <div class="css-grid">Five</div>
        <div class="css-grid">Six</div>
        <div class="css-grid">Seven</div>
        <div class="css-grid">Eight</div>
        <!-- <div class="css-grid">Nine</div> -->
        <!-- <div class="css-grid">Ten</div> -->
        <!-- <div class="css-grid">Eleven</div> -->
        <!-- <div class="css-grid">Twelve</div> -->
      </div>

      <!-- <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div> -->

      <!-- <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div>

        <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div>

        <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div>

        <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div>

        <div class="project-div">
          <div class="project">
            <div class="item">
              <h1>Hello</h1>
            </div>
          </div>
        </div> -->
      <!-- ... -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import DottedBackground from "~/components/utils/DottedBackground.vue";
// import Vue from "vue";

export default {
  components: { DottedBackground },
  transition: {
    name: "portfolio",
    mode: "out-in",
  },
  //   mounted:()=>{
  //     const sections = document.querySelectorAll('.project-div') as NodeListOf<HTMLElement > ;

  // let currentPos = window.pageYOffset;

  // const update = () => {
  // 	const newPos = window.pageYOffset;
  // 	// const diff = newPos - currentPos;
  // 	// const speed = diff * 0.35;
  //         let count = 0 *0.35;

  // 	sections.forEach(element => {

  //    element.style.transform = `skewY(${ count}deg)`;
  //    count++
  //   });
  //   // style.transform = `skewY(${ speed }deg)`;

  // 	currentPos = newPos;

  // 	requestAnimationFrame(update);
  // }

  // // update();
  // setTimeout(update,1000)

  //   }
};
</script>

<style>
.portfolio-container {
  /* z-index: 2; */
  /* padding: 1rem; */
  position: relative;
  /* animation-fill-mode: backwards; */
  /* background-color: rgba(114, 10, 233, 0.116); */
  /* border-radius: 51% 49% 65% 35% / 36% 33% 67% 64%; */
  /* background: linear-gradient(90deg, var(--background)21px, transparent 1%) center, linear-gradient(var(--background)21px, transparent 1%) center, #d1c5f3;
  background-size: 22px 22px; */
  /* border: 2px solid white; */
  color: white;
  /* background: rgb(45, 97, 242);
  background: linear-gradient(
    90deg,
    rgba(45, 97, 242, 0.9822303921568627) 7%,
    rgba(173, 78, 230, 1) 90%
  ); */

  padding:0.5rem 8rem;
  
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-auto-rows: 18rem;
  gap: 10px;
  /* background-color: #f092f0; */
  margin: 0.2rem;
  min-height: 100vh;
}

@media screen and (max-width: 769px) {
  /* STYLES HERE */

  .wrapper {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 8.8rem;
  gap: 10px;
  /* background-color: #f092f0; */
    /* margin: 0.2rem;
  height: 80vh; */
  }
}

@media only screen and (max-device-width: 480px) {
  /* STYLES HERE */

  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

.css-grid {
  /* margin:0.2rem; */
  /* min-height: 8rem; */
  /* grid-row:1/3; */
  /* overflow: hidden; */
  border-radius: 10px;
  /* border: 2px solid rgba(240, 255, 240, 0.507); */

  /* background: rgb(130, 84, 249);
  background: linear-gradient(
    90deg,
    rgba(130, 84, 249, 1) 42%,
    rgba(230, 78, 169, 1) 93%
  ); */
  position: relative;
  background: #f8f8faa6;
}



.css-grid:hover {
  /* background: rgb(130,84,249);
background: linear-gradient(90deg, rgba(130,84,249,1) 42%, rgba(230,78,169,1) 93%);; */


}

.card-overlay{
  position: absolute;
  height: 100%;
  width: 100%;
    background: rgb(45, 97, 242);
  background: linear-gradient(
    90deg,
    rgba(45, 98, 242, 0.479) 7%,
    rgba(174, 78, 230, 0.76) 90%
  );
  /* min-height: 8rem; */
  transform: translateX(-18rem);
  transition: all 0.3s ease-in;
  opacity: 0;
  z-index: -2;

}

.css-grid:hover .card-overlay{

  /* background: #f092f0; */
  /* min-height: 8rem; */
  transform: translateX(0px);
  opacity: 1;
  z-index: 1;
}

.card-wrapper{
  display: block;
  /* border-radius:10px; */
}

.card-image img{
  border-radius: 10px;
}

.card{
  background: #f092f0;
  position: relative;
}

#dotted-background {
  position: relative;
  width: 100%;
  height: 100%;
  /* border-radius: 51% 49% 65% 35% / 36% 33% 67% 64% ; */
  overflow: hidden;
  z-index: 10;
}

.portfolio-section {
  background-color: #2d262e;
  background: linear-gradient(90deg, var(--background) 21px, transparent 1%) center,
    linear-gradient(var(--background) 21px, transparent 1%) center, #d1c5f3;
  background-size: 22px 22px;
}
.project-wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* background: rgba(255, 255, 255, 0.055); */
  padding: 1rem auto 1rem auto;
}

.project-div {
  position: relative;
  /* width: 18rem;
  height: 15rem; */
  box-shadow: 4px 13px 24px 10px rgba(75, 72, 72, 0.479);
  margin: 0.8rem 1rem;
  z-index: 8;
  background: transparent;
  animation: skewed 3.25s infinite;
  transition: margin 1s linear;
}

.project-div:hover {
  /* animation: skewed 3.25s  infinite; */
}

.project {
  /* width: 290px;
  height: 250px; */
  min-width: 15rem;
  position: relative;
  text-align: center;
  min-height: 20rem;
}

.project::after,
.project::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  /* z-index: 1; */

  /* border: 2px solid red; */
  /* margin: 0.5rem; */
  /* box-shadow: 4px 13px 24px 10px rgba(0, 0, 0, 0.1); */
  transition: 0.3s linear;
}

.project::before {
  content: "";
  width: 100%;
  height: 100%;
  /* position: absolute; */
  top: 3%;
  left: 3%;
  z-index: -3;
  border: 3px solid #bec6f0;
  /* background: rgba(0, 255, 179, 0.897); */
  /* background-image: linear-gradient(45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */
}
.project:hover::before {
  content: "";
  width: 100%;
  height: 100%;
  /* position: absolute; */
  top: -4%;
  left: -4%;
  z-index: -3;
  border: 3px solid #f8f8fa;

  /* background: rgba(0, 255, 179, 0.897); */

  /* margin: 0.5rem; */
  /* box-shadow: 4px 13px 24px 10px rgba(0, 0, 0, 0.1); */
  /* transition: border 0.7s ease-in,color .6s ease-in-out; */
}

.project::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: -3%;
  left: -3%;
  z-index: -3;
  background-color: #de7efb94;
  /* background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%); */

  /* margin: 0.5rem; */
  /* box-shadow: 4px 13px 24px 10px rgba(0, 0, 0, 0.1); */
  /* transition: border 0.7s ease-in,color .6s ease-in-out; */
}

.project:hover::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 4%;
  left: 4%;
  z-index: 1;
  background-color: transparent;

  border: 3px solid #ffffff;

  /* background-color: #f7f4f3; */
  /* background-image: linear-gradient(62deg, #eee1d9 0%, #d1c7ae 100%); */

  /* margin: 0.5rem; */
  /* box-shadow: 4px 13px 24px 10px rgba(0, 0, 0, 0.1); */
  /* transition: border 0.7s ease-in,color .6s ease-in-out; */
}

.item {
  width: 100%;
  height: 22rem;
  position: relative;
  /* color:white; */
  box-shadow: 4px 13px 14px 10px rgba(0, 0, 0, 0.5);
  background-color: #f092f0;
  background-image: linear-gradient(0deg, #f092f0 0%, #97d9e1 100%);

  /* animation: load 2.25s infinite; */
}

.project:hover .item {
  /* background: rgb(0, 0, 0); */
  cursor: pointer;
  /* margin:2.5rem; */
  /* transition: slidein 3s linear; */
  z-index: 10;
  /* width: 100%; */
  /* transition: all 0.4s linear; */

  /* background: rgba(0,0,0,0,0.5); */
  /* background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),

    rgba(12, 12, 12, 0.582),
    rgba(224, 224, 148, 0.384),
    rgba(0, 128, 0, 0.575),
    rgba(0, 0, 255, 0.356),
    rgba(150, 76, 202, 0.658)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slidebg 2s linear infinite;  */
  color: white;
  position: relative;

  box-shadow: 4px 8px 26px 6px rgba(245, 242, 242, 0.863);
  overflow: hidden;
  z-index: 9;
}

/* .item:nth-of-type(1) h1 {
  background: transparent;
  color:red;
} */

@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
@keyframes slidein {
  0% {
    transform: translateX(-20rem);
  }

  100% {
    transform: translateX(20rem);
  }
}

@keyframes skewed {
  0% {
    transform: skewY(-2deg);
  }
  /* 33%{
    transform: skewY(33deg);
  }

    60%{
    transform: skewY(65deg);
  } */
  50% {
    transform: skewY(2deg);
  }

  100% {
    transform: skewY(-2deg);
  }
}
</style>
