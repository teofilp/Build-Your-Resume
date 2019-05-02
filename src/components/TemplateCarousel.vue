<template>
  <div class="wrapper">
    <h4 class="headline mt-4">Choose from one of our templates</h4>
    <div class="slider">
      <div class="separator">
        <div class="left_separator">
          <i class="fas fa-chevron-left desktop_previous"></i>
        </div>
        <div class="right_separator">
          <i class="fas fa-chevron-right desktop_next"></i>
        </div>
      </div>
      <div class="slider_inner_wrapper">
        <div v-for="(template, index) in templates" :key="index" class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right mobile next_template"></i>
            <i class="fas fa-chevron-left mobile next_template"></i>
            <div class="img_wrapper">
              <img :src="template" alt>
            </div>
            <div class="not_available">
              <div class="wrap">
                <h2>not available</h2>
              </div>
            </div>
            <h2 class="use_template">use this template</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as carousel_handler from "../assets/js/template_carousel.js";
export default {
  data() {
    return {
      templates: []
    };
  },
  async mounted() {
    for (let i = 1; i <= 7; i++)
      this.templates.push(await require("../assets/img/t" + i + ".png"));

    setTimeout(() => {
      let carousel_config = {
        leftController: [document.querySelector(".left_separator")],
        rightController: [document.querySelector(".right_separator")],
        activeSlideIndex: 4,
        slidesClassName: "slider_item",
        useArrows: true
      };
      carousel_handler.configureCarousel(carousel_config);
    }, 10);
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.wrapper {
  font-family: "Roboto", sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(255, 255, 255);
}
.headline {
  text-align: center;
  color: #478dff;
  font-size: 1.3rem;
}

.slider {
  max-width: 100vw;
  position: absolute;
  height: 90%;
  top: 7%;
}

.slider_inner_wrapper {
  width: 100%;
  position: relative;
  height: 100%;
}

.slider_item {
  height: 80%;
  left: -100%;
  background: #aaa;
  position: relative;
  position: absolute;
  z-index: 2;
  border-radius: 0.2rem;
}

.active {
  z-index: 10;
}

.scaler {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  border-radius: 0.2rem;
  border: 0.3rem solid transparent;
}

.wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

.active .scaler {
  transform: scale(1.1);
  background: white;
  border-color: #478dff;
}

.scaler .not_available {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s;
}

.scaler .not_available .wrap h2 {
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  color: white;
  font-size: 1.4rem;
  text-transform: capitalize;
}

.active .scaler .not_available {
  background: rgba(100, 100, 100, 0.6);
  opacity: 1;
  display: none;
}

.active .scaler .not_available:hover {
  cursor: not-allowed;
}

.active .scaler .use_template {
  opacity: 1;
}

.separator {
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: 3;
}

.separator .right_separator {
  width: 50vw;
  height: 100%;
  position: absolute;
  left: 50%;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
}
/* rgba(255, 255, 255, 0.8) */
.separator .left_separator {
  width: 50vw;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
}
.left_separator:hover,
.right_separator:hover,
i:hover {
  cursor: pointer;
}
i.previous_template,
i.next_template {
  position: absolute;
  background: #478dff;
  color: white;
  font-size: 2rem;
  padding: 0.35rem 0.5rem;
  top: calc(50% - 1.5rem);
  opacity: 0;
  transition: opacity 0.3s;
}
i.previous_template {
  right: calc(100% + 0.2rem);
}

i.next_template {
  left: calc(100% + 0.2rem);
}

i.mobile {
  display: none;
}
.img_wrapper {
  width: 100%;
  height: 100%;
}
.scaler .img_wrapper img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.active .scaler .img_wrapper img {
  filter: grayscale(0);
}

.desktop_next,
.desktop_previous {
  position: absolute;
  font-size: 6rem;
  top: calc(50% - 3rem);
  color: rgba(71, 141, 255, 0.7);
  transition: color 0.3s;
}
.desktop_previous {
  left: 6rem;
}
.desktop_next {
  right: 6rem;
}

.left_separator:hover i,
.right_separator:hover i {
  color: rgb(71, 141, 255);
}

h2.use_template {
  position: absolute;
  color: white;
  top: calc(100% + 0.3rem - 1px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  background: rgb(71, 141, 255);
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 0.3rem solid transparent;
  border-top: none;
  user-select: none;
  opacity: 0;
}

h2.use_template:hover {
  cursor: pointer;
}
</style>


