<template>
  <div id="app_wrapper">
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
</style>
