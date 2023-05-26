<template>
  <div id="app_wrapper">
    <div id="loading_bar">
      <div class="text_wrapper_absolute">
        <div class="text_wrapper">
          <h2 class="loading_message">Loading</h2>
        </div>
      </div>
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
      activeBuilder: true,
    };
  },
  computed: {
    getActiveBuilder() {
      return this.activeBuilder;
    },
  },
  components: {
    ResumeBuilder,
    ResumePreview,
  },
  created() {
    let instance = this;
    EventBus.$on("previewUpdated", (isActive) => {
      instance._data.activeBuilder = isActive;
    });
    this.$store.dispatch("loadResume");
  },
  mounted() {},
};
</script>

<style>
#app_wrapper {
  width: 100%;
  height: 100vh;
}

#loading_bar {
  position: fixed;
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

.text_wrapper_absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0);
  border-radius: 50%;
  animation: antifade 3s infinite linear;
}
.text_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
h2.loading_message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(151, 177, 219, 1);
  font-weight: 400;
  text-transform: uppercase;
  font-size: 25px;
  border-radius: 50%;
  text-align: center;
  padding: 10px;
  letter-spacing: 1px;
}

@keyframes antifade {
  0% {
    background: rgba(255, 255, 255, 1);
  }

  50% {
    background: rgba(255, 255, 255, 0.2);
  }
  100% {
    background: rgba(255, 255, 255, 1);
  }
}
</style>
