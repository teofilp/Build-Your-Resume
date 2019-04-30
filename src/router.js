import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import ResumeApp from './components/ResumeApp.vue';
import Home from './components/Home.vue';
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/app', component: ResumeApp
  }, {
    path: '/', component: Home
  }]
})
