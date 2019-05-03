<template>
  <div id="app_wrapper">
    <div id="loading_bar">
      <div class="loader_circle"></div>
      <div class="loader_circle loader_circle_reverse"></div>
      <h2 class="loading_message">Loading</h2>
    </div>
    <resume-builder v-show="getActiveBuilder"></resume-builder>
    <resume-preview></resume-preview>
  </div>
</template>

<script>
import ResumeBuilder from "./ResumeBuilder.vue";
import ResumePreview from "./ResumePreview.vue";
import { EventBus } from "../main.js";
export default {
  data() {
    return {
      activeBuilder: true
    };
  },
  computed: {
    getActiveBuilder() {
      return this.activeBuilder;
    }
  },
  components: {
    ResumeBuilder,
    ResumePreview
  },
  created() {
    let instance = this;
    EventBus.$on("previewUpdated", isActive => {
      instance._data.activeBuilder = isActive;
    });

    this.$store.dispatch("loadResume");
  },
  mounted() {}
};
</script>


<style>
#app_wrapper {
  width: 100%;
  height: 100vh;
}

#loading_bar {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  background: rgba(151, 177, 219, 1);
  transition: opacity 0.3s, z-index 0.3s;
}

#loading_bar.active {
  z-index: 9999;
  opacity: 1;
}
.loader_circle {
  width: 15rem;
  height: 15rem;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  border-top: 5px solid #fefefe;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-radius: 50%;
  margin-top: -7.5rem;
  margin-left: -7.5rem;
  animation: loader 1s infinite linear;
}

.loader_circle_reverse {
  width: 13rem;
  height: 13rem;
  margin-top: -6.5rem;
  margin-left: -6.5rem;
  animation: loader-reverse 1.2s infinite linear;
}

.loading_message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 1px;
  animation: fade 2s infinite linear;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loader-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
