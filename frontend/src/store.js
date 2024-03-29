import Vue from "vue";
import Vuex from "vuex";
import YogurtResume from "./components/ResumeTemplates/YogurtResume.vue";
import SmurfTemplate from "./components/ResumeTemplates/SmurfTemplate.vue";
import GunpowderTemplate from "./components/ResumeTemplates/GunpowderTemplate.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themes: [
      {
        name: "smurf",
        template: SmurfTemplate,
        available: true,
      },
      {
        name: "gunpowder",
        template: GunpowderTemplate,
        available: true,
      },
      {
        name: "yogurt",
        template: YogurtResume,
        available: true,
      },
      {
        name: "t1",
        available: false,
      },
      {
        name: "t2",
        available: false,
      },
      {
        name: "t3",
        available: false,
      },
      {
        name: "t4",
        available: false,
      },
    ],
    activeTheme: {
      name: "yogurt",
      available: true,
      template: YogurtResume,
    },
    resume: {
      personal_details: {
        job_title: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        city: "",
        address: "",
        postal_code: "",
        nationality: "",
        place_of_birth: "",
        date_of_birth: "",
      },
      title: "Untitled",
      professionalSummary: "",
      links: [],
      skills: [],
      education: [],
      employmentHistory: [],
      languages: [],
      courses: [],
      internships: [],
    },
  },
  getters: {
    getPersonalDetails(state) {
      return state.resume.personal_details;
    },
    getTitle(state) {
      return state.resume.title;
    },
    getLinks(state) {
      return state.resume.links;
    },
    getSkills(state) {
      return state.resume.skills;
    },
    getProfessionalSummary(state) {
      return state.resume.professionalSummary;
    },
    getEducation(state) {
      return state.resume.education;
    },
    getEmploymentHistory(state) {
      return state.resume.employmentHistory;
    },
    getLanguages(state) {
      return state.resume.languages;
    },
    getCourses(state) {
      return state.resume.courses;
    },
    getCompleteness(state) {
      let completeness = 0;

      // check personal details
      let personal_details = state.resume.personal_details;

      for (var atr in personal_details) {
        if (personal_details[atr] !== "") completeness += 4;
      }

      if (state.resume.professionalSummary.length > 20) completeness += 10;

      if (state.resume.links.length > 0) completeness += 5;

      if (state.resume.skills.length > 0) completeness += 5;

      if (state.resume.education.length > 0) completeness += 15;

      if (state.resume.employmentHistory.length > 0) completeness += 15;

      if (state.resume.internships.length > 0) completeness += 15;

      return completeness > 100 ? 100 : completeness;
    },
    getThemes(state) {
      return state.themes;
    },
    getActiveTheme(state) {
      return state.activeTheme;
    },
    getInternshipHistory(state) {
      return state.resume.internships;
    },
    getActiveThemeTemplate(state) {
      return state.activeTheme.template;
    },
    getActiveThemeName(state) {
      return state.activeTheme.name;
    },
    getResume(state) {
      return state.resume;
    },
  },
  mutations: {
    hide(state, arr) {
      arr.map((el) => (el.expanded = false));
    },
    addLink(state) {
      state.resume.links.push({
        label: "(Not specified)",
        link: "",
        expanded: true,
      });
    },
    deleteLink(state, link) {
      let linkPosition = state.resume.links.indexOf(link);
      state.resume.links.splice(linkPosition, 1);
    },
    addSkill(state) {
      state.resume.skills.push({
        level: "beginner",
        name: "(Not specified)",
        expanded: true,
      });
    },
    deleteSkill(state, skill) {
      let skillIndex = state.resume.skills.indexOf(skill);
      state.resume.skills.splice(skillIndex, 1);
    },
    addEducation(state) {
      state.resume.education.push({
        institute: "(Not specified)",
        degree: "(Not specified)",
        date: {
          start: {
            month: "Mar",
            year: 2019,
          },
          end: {
            month: "Jun",
            year: 2020,
          },
        },
        city: "(Not specified)",
        description: "",
        expanded: true,
      });
    },
    deleteEducation(state, educationItem) {
      let educationIndex = state.resume.education.indexOf(educationItem);
      state.resume.education.splice(educationIndex, 1);
    },
    addEmploymentItem(state) {
      state.resume.employmentHistory.push({
        title: "(Not specified)",
        employer: "(Not specified)",
        date: {
          start: {
            month: "Mar",
            year: 2019,
          },
          end: {
            month: "Jun",
            year: 2020,
          },
        },
        city: "(Not specified)",
        description: "",
        expanded: true,
      });
    },
    deleteEmploymentItem(state, employmentItem) {
      let employmentIndex = state.resume.employmentHistory.indexOf(
        employmentItem
      );
      state.resume.employmentHistory.splice(employmentIndex, 1);
    },
    addLanguage(state) {
      state.resume.languages.push({
        language: "(Not Specified)",
        level: "beginner",
        expanded: true,
      });
    },
    deleteLanguage(state, language) {
      let languageIndex = state.resume.languages.indexOf(language);
      state.resume.languages.splice(languageIndex, 1);
    },
    updateProfessionalSummary(state, value) {
      state.resume.professionalSummary = value;
    },
    addCourse(state) {
      state.resume.courses.push({
        name: "(Not Specified)",
        institute: "(Not Specified)",
        date: {
          start: {
            year: 2019,
            month: "Apr",
          },
          end: {
            year: 2019,
            month: "Apr",
          },
        },
        expanded: true,
      });
    },
    deleteCourse(state, course) {
      let courseIndex = state.resume.courses.indexOf(course);
      state.resume.courses.splice(courseIndex, 1);
    },
    addInternship(state) {
      state.resume.internships.push({
        title: "(Not specified)",
        employer: "(Not specified)",
        date: {
          start: {
            month: "Mar",
            year: 2019,
          },
          end: {
            month: "Jun",
            year: 2020,
          },
        },
        city: "(Not specified)",
        description: "",
        expanded: true,
      });
    },
    deleteInternship(state, internshipItem) {
      let internshipIndex = state.resume.internships.indexOf(internshipItem);
      state.resume.internships.splice(internshipIndex, 1);
    },
    updateTheme(state, option) {
      state.activeTheme = option;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
  },
  actions: {
    saveResume({ state, commit }) {
      let resume = JSON.parse(JSON.stringify(state.resume));
      commit("hide", resume.skills);
      commit("hide", resume.education);
      commit("hide", resume.links);
      commit("hide", resume.employmentHistory);
      commit("hide", resume.languages);
      commit("hide", resume.courses);
      commit("hide", resume.internships);

      localStorage.setItem("resume", JSON.stringify(resume));
    },
    loadResume({ state }) {
      let resume = JSON.parse(localStorage.getItem("resume"));
      state.resume = resume
        ? resume
        : {
            personal_details: {
              job_title: "",
              first_name: "",
              last_name: "",
              email: "",
              phone_number: "",
              country: "",
              city: "",
              address: "",
              postal_code: "",
              nationality: "",
              place_of_birth: "",
              date_of_birth: "",
            },
            title: "Untitled",
            professionalSummary: "",
            links: [],
            skills: [],
            education: [],
            employmentHistory: [],
            languages: [],
            courses: [],
            internships: [],
          };
    },
  },
});
