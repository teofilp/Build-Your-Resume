<template>
  <div id="root" class="wrapper">
    <div class="header">
      <div class="head">
        <h2 class="name">{{getPersonalDetails.first_name + " " + getPersonalDetails.last_name}}</h2>
        <h4 class="title">{{getPersonalDetails.job_title}}</h4>
      </div>
    </div>

    <div id="relevant_info_panel">
      <div class="professional_summary section" v-if="getProfessionalSummary.length">
        <h2 class="title">Profile</h2>
        <p>{{getProfessionalSummary}}</p>
      </div>

      <div class="education section" v-if="getRelevantEducation.length">
        <h2 class="title">Education</h2>

        <div
          class="education_item"
          v-for="(item, index) in 
        getRelevantEducation"
          :key="index"
        >
          <div class="active_period">
            <h2>
              {{item.date.start.month + ", " +
              item.date.start.year}} - {{
              item.date.end.month + ", " +
              item.date.end.year
              }}
            </h2>
          </div>
          <div class="description">
            <h2 class="headline">
              <b>{{item.degree}}, {{item.institute}}</b>
            </h2>
            <p>{{item.description}}</p>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>

      <div class="experience section" v-if="getRelevantExperience.length">
        <h2 class="title">Experience</h2>

        <div
          class="experience_item"
          v-for="(item, index) in 
        getRelevantExperience"
          :key="index"
        >
          <div class="active_period">
            <h2>
              {{item.date.start.month + ", " +
              item.date.start.year}} - {{
              item.date.end.month + ", " +
              item.date.end.year
              }}
            </h2>
          </div>
          <div class="description">
            <h2 class="job_title">{{item.title}}</h2>
            <h4 class="employer">
              <i>{{item.employer}}</i>
            </h4>
            <p>{{item.description}}</p>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>

      <div class="internships section" v-if="getRelevantInternships.length">
        <h2 class="title">Internships</h2>
        <div
          class="education_item"
          v-for="(item, index) in 
        getRelevantInternships"
          :key="index"
        >
          <div class="active_period">
            <h2>
              {{item.date.start.month + ", " +
              item.date.start.year}} - {{
              item.date.end.month + ", " +
              item.date.end.year
              }}
            </h2>
          </div>
          <div class="description">
            <h2 class="headline">
              <b>{{item.title}}, {{item.employer}}</b>
            </h2>
            <p>{{item.description}}</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="courses section pb-2" v-if="getRelevantCourses.length">
        <h2 class="title">Courses</h2>

        <div class="course_item" v-for="(course, index) in getRelevantCourses" :key="index">
          <div class="active_period">
            <h2>
              {{course.date.start.month + ", " +
              course.date.start.year}} - {{
              course.date.end.month + ", " +
              course.date.end.year
              }}
            </h2>
          </div>
          <div class="description">
            <p class="pt-2">
              <i>{{course.name}}</i>
              at {{course.institute}}
            </p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div id="general_info_panel">
      <div class="personal_info mt-3" v-if="isEmptyPersonalInfo">
        <h2 class="head">General Info</h2>

        <div class="mt-2" v-if="getAddress != ''">
          <h5 class="title">
            <b>Address</b>
          </h5>
          <h6 v-html="getAddress"></h6>
        </div>

        <div class="mt-2" v-if="getPersonalDetails.phone_number != ''">
          <h5 class="title">
            <b>Phone</b>
          </h5>
          <h6>{{getPhoneNumber}}</h6>
        </div>

        <div class="mt-2" v-if="getPersonalDetails.email != ''">
          <h5 class="title">
            <b>E-mail</b>
          </h5>
          <h6>{{getPersonalDetails.email}}</h6>
        </div>

        <div class="links" v-if="getLinks.length">
          <div class="mt-2" v-for="(link, index) in getRelevantLinks" :key="index">
            <h5 class="title">
              <b>{{link.label}}</b>
            </h5>
            <h6>
              <a>{{link.link}}</a>
            </h6>
          </div>
        </div>
      </div>

      <div class="skills mt-3" v-if="getRelevantSkills.length">
        <h2 class="head">Skills</h2>

        <div
          class="skill_item"
          :class="{'mt-3': index!=0}"
          v-for="(skill, index) in getRelevantSkills"
          :key="index"
        >
          <h5 class="title">{{skill.name}}</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" :style="{'width': skillLevel[skill.level]}"></div>
          </div>
          <h6 class="level_name">{{skill.level | capitalize}}</h6>
        </div>

        <div class="clearfix"></div>
      </div>

      <div class="languages mt-2" v-if="getLanguages.length">
        <h2 class="head">Languages</h2>

        <div
          class="language_item mt-3"
          v-for="(language, index) in 
        getRelevantLanguages"
          :key="index"
        >
          <h5 class="title">{{language.language}}</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" :style="{'width': skillLevel[language.level]}"></div>
          </div>
          <h6 class="level_name">{{language.level | capitalize}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { resumeMixin } from "../../resumeMixin";
import { EventBus } from "../../main.js";
export default {
  mixins: [resumeMixin],
  created() {
    EventBus.$on("preparationsBeforeDownload", () => {
      let relevant_section_height = document.querySelector(
        "#relevant_info_panel"
      ).offsetHeight;
      let general_section = document.querySelector("#general_info_panel");
      if (general_section.offsetHeight < relevant_section_height)
        general_section.style.height = relevant_section_height + "px";
    });
  }
};
</script>
<style scoped>
#root {
  --gunpowder-bg: #4a4a4a;
  --gunpowder-dark-bg: #393939;
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}
a {
  color: white;
}
a:hover {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0.1rem;
}

::-webkit-scrollbar-track {
  background: #ddd;
}
::-webkit-scrollbar-thumb {
  background: #eee;
}

::-webkit-scrollbar-thumb:hover {
  background: #eee;
}

#general_info_panel .personal_info h6 {
  padding-top: 0.1rem;
  font-size: 0.7rem;
}

.level_bar_wrapper {
  width: calc(100% - 1rem);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 0.4rem;
  border-radius: 8px;
  overflow: hidden;
}

.level_name {
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
}

#relevant_info_panel div .active_period {
  position: relative;
  overflow: hidden;
  float: left;
  width: 20%;
  height: 100%;
}

#relevant_info_panel div .active_period h2 {
  font-size: 0.65rem;
  padding: 0.3rem;
  padding-left: 0.6rem;
  line-height: 1.1rem;
  font-weight: 500;
}

#relevant_info_panel div .description {
  position: relative;
  width: 80%;
  height: 100%;
  float: left;
}

#relevant_info_panel div .description .job_title,
#relevant_info_panel div .description .headline {
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
}

#relevant_info_panel div .description .employer {
  padding-left: 0.3rem;
  font-size: 0.7rem;
}

#relevant_info_panel div .description p {
  padding: 0rem 0.5rem 0 0.3rem;
  font-size: 0.6rem;
}

.header {
  position: relative;
  z-index: 100;
  width: 100%;
  padding-bottom: 1rem;
  background: var(--gunpowder-dark-bg);
}

#relevant_info_panel {
  position: relative;
  float: left;
  width: 70%;
}
#general_info_panel {
  position: relative;
  float: left;
  width: 30%;
  background: #dfdfdf;
  z-index: 10;
  min-height: 100%;
}
.header div.head {
  height: 10%;
  width: 100%;
  color: white;
  background: var(--gunpowder-dark-bg);
}

.header .head h2 {
  font-size: 1.5rem;
  padding: 0.6rem 0 0 0.6rem;
  margin: 0;
  font-weight: bolder;
}

.header .head h4 {
  font-size: 1.2rem;
  padding: 0.2rem 0 0 0.6rem;
  font-weight: 400;
}

#general_info_panel h2.head,
#relevant_info_panel h2.title {
  color: var(--gunpowder-dark-bg);
  border-bottom: 1px solid var(--gunpowder-dark-bg);
  padding-bottom: 0.2rem;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0 0.6rem;
  text-align: left;
}

#general_info_panel h5.title {
  padding: 0.2rem 0.6rem 0 0.6rem;
  font-size: 0.7rem;
  font-weight: 700;
}
#general_info_panel a {
  color: black;
}
#general_info_panel h6 {
  font-size: 0.7rem;
  padding: 0 0.6rem 0 0.6rem;
}

.level_bar_wrapper {
  background: #c4c4c4;
}
.level_name {
  margin-right: 0;
}
.level_bar_wrapper .level_bar {
  background: var(--gunpowder-dark-bg);
  width: 25%;
  height: 100%;
}

.skill_item {
  margin-top: 0.5rem;
}

.professional_summary .title {
  display: none;
}

.professional_summary p {
  font-size: 0.75rem;
  padding: 0.4rem;
}

#relevant_info_panel h2.title {
  font-size: 1rem;
}
</style>


