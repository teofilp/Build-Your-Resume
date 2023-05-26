import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import ResumeApp from "./components/ResumeApp.vue";
import Home from "./components/Home.vue";
import TemplateCarousel from "./components/TemplateCarousel.vue";
import ResumeDownload from "./components/ResumeDownload.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/app",
      component: ResumeApp,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/resume-templates",
      component: TemplateCarousel,
    },
    {
      path: "/download-resume/:resumeInfo",
      component: ResumeDownload,
    },
  ],
});
