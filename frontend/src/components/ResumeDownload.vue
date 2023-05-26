<template>
  <component :is="activeTemplate"></component>
</template>
<script>
import { resumeMixin } from "../resumeMixin";
import { mapGetters } from "vuex";

export default {
  mixins: [resumeMixin],
  created() {
    const resumeBase64 = this.$route.params.resumeInfo;
    const resume = JSON.parse(Buffer.from(resumeBase64, "base64").toString());
    this.$store.commit("setResume", resume);
  },
  computed: {
    ...mapGetters(["getActiveThemeTemplate", "getResume"]),
    activeTemplate() {
      return this.getActiveThemeTemplate;
    },
  },
  mounted() {
    $("html").css("font-size", "28px");
  },
  watch: {
    getResume() {
      // if (this.getResume != null) {
      //   setTimeout(() => {
      //     window.print();
      //   }, 100);
      // }
    },
  },
};
</script>
