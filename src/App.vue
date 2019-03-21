<template>
  <div id="app">
    <resume-builder></resume-builder>
    <resume-preview></resume-preview>
  </div>
</template>

<script>
import ResumeBuilder from './components/ResumeBuilder.vue';
import ResumePreview from './components/ResumePreview.vue';
export default {
  components: {
    ResumeBuilder,
    ResumePreview
  }
}
</script>


<style>
  #app {
    width: 100%;
    height: 100vh;
  }
</style>
