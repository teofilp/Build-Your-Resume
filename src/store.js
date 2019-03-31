import Vue from 'vue'
import Vuex from 'vuex'
import { strictEqual } from 'assert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {
      personal_details: {
        job_title: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        city: '',
        address: '',
        postal_code: '',
        nationality: '',
        place_of_birth: '',
        date_of_birth: ''
      },
      title: 'Untitled',
      links: [{ label: 'something something label', link: 'https://google.com', expanded: false },
      { label: 'something another label', link: 'https://facebook.com', expanded: false }],
      skills: [{ level: 'beginner', name: 'HTML', expanded: false }],
      education: [{
        school: "'Emil Racovita' National College", degree: 'Software Engineering', date: {
          start: {
            month: 'Mar',
            year: 2019
          },
          end: {
            month: 'Jun',
            year: 2020
          }
        }, city: 'Cluj-Napoca', description: '', expanded: true
      }]
    }
  },
  getters: {
    getTitle(state) {
      return state.resume.title;
    },
    getLinks(state) {
      return state.resume.links;
    },
    getSkills(state) {
      return state.resume.skills;
    },
    getEducation(state) {
      return state.resume.education;
    }
  },
  mutations: {
    hide(state, arr) {
      arr.map(el => el.expanded = false);
    },
    addLink(state) {
      state.resume.links.push({
        label: '(Not specified)',
        link: '',
        expanded: true
      });
    },
    deleteLink(state, link) {
      let linkPosition = state.resume.links.indexOf(link);
      state.resume.links.splice(linkPosition, 1);
    },
    addSkill(state) {
      state.resume.skills.push({
        level: 'beginner',
        name: '(Not specified)',
        expanded: true
      });
    },
    deleteSkill(state, skill) {
      let skillIndex = state.resume.skills.indexOf(skill);
      state.resume.skills.splice(skillIndex, 1);
    },
    addEducation(state) {
      state.resume.education.push({
        school: "(Not specified)", degree: '(Not specified)', date: {
          start: {
            month: 'Mar',
            year: 2019
          },
          end: {
            month: 'Jun',
            year: 2020
          }
        }, city: '(Not specified)', description: '', expanded: true

      });
    },
    deleteEducation(state, educationItem) {
      let educationIndex = state.resume.education.indexOf(educationItem);
      state.resume.education.splice(educationIndex, 1);
    }
  },
  actions: {

  }
})
