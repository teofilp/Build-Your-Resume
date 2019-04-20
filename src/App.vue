<template>
  <div id="app">
    <resume-builder v-show="getActiveBuilder"></resume-builder>
    <resume-preview></resume-preview>
  </div>
</template>

<script>
import ResumeBuilder from "./components/ResumeBuilder.vue";
import ResumePreview from "./components/ResumePreview.vue";
import { EventBus } from "./main.js";
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
  }
};
</script>


<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
