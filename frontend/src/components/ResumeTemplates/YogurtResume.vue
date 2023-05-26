<template>
  <div id="root" class="wrapper">
    <div class="header">
      <div class="head">
        <h2 class="name">
          {{
            getPersonalDetails.first_name + " " + getPersonalDetails.last_name
          }}
        </h2>
        <h4 class="title">{{ getPersonalDetails.job_title }}</h4>
      </div>
    </div>
    <div class="columns">
      <div id="general_info_panel">
        <div class="personal_info mt-3" v-if="isEmptyPersonalInfo">
          <h2 class="head">Info</h2>

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
            <h6>{{ getPhoneNumber }}</h6>
          </div>

          <div class="mt-2" v-if="getPersonalDetails.email != ''">
            <h5 class="title">
              <b>E-mail</b>
            </h5>
            <h6>{{ getPersonalDetails.email }}</h6>
          </div>

          <div class="links" v-if="getLinks.length">
            <div
              class="mt-2"
              v-for="(link, index) in getRelevantLinks"
              :key="index"
            >
              <h5 class="title">
                <b>{{ link.label }}</b>
              </h5>
              <h6>
                <a>{{ link.link }}</a>
              </h6>
            </div>
          </div>
        </div>

        <div class="skills mt-3" v-if="getRelevantSkills.length">
          <h2 class="head">Skills</h2>
          <div
            class="skill_item"
            :class="{ 'mt-3': index != 0 }"
            v-for="(skill, index) in getRelevantSkills"
            :key="index"
          >
            <h5 class="title">{{ skill.name }}</h5>
            <div class="level_bar_wrapper">
              <div
                class="level_bar"
                :style="{ width: skillLevel[skill.level] }"
              ></div>
            </div>
            <h6 class="level_name">{{ skill.level | capitalize }}</h6>
          </div>
        </div>

        <div class="languages mt-2" v-if="getLanguages.length">
          <h2 class="head">Languages</h2>

          <div
            class="language_item mt-3"
            v-for="(language, index) in getRelevantLanguages"
            :key="index"
          >
            <h5 class="title">{{ language.language }}</h5>
            <div class="level_bar_wrapper">
              <div
                class="level_bar"
                :style="{ width: skillLevel[language.level] }"
              ></div>
            </div>
            <h6 class="level_name">{{ language.level | capitalize }}</h6>
          </div>
        </div>
      </div>
      <div id="relevant_info_panel">
        <div
          class="professional_summary section"
          v-if="getProfessionalSummary.length"
        >
          <h2 class="title">Profile</h2>
          <p>{{ getProfessionalSummary }}</p>
        </div>
        <div class="education section" v-if="getRelevantEducation.length">
          <h2 class="title">Education</h2>

          <div
            class="education_item"
            v-for="(item, index) in getRelevantEducation"
            :key="index"
          >
            <div class="active_period">
              <h2>
                {{ item.date.start.month + ", " + item.date.start.year }} -
                {{ item.date.end.month + ", " + item.date.end.year }}
              </h2>
            </div>
            <div class="description">
              <h2 class="headline">
                <b>{{ item.degree }}, {{ item.institute }}</b>
              </h2>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="experience section" v-if="getRelevantExperience.length">
          <h2 class="title">Experience</h2>

          <div
            class="experience_item"
            v-for="(item, index) in getRelevantExperience"
            :key="index"
          >
            <div class="active_period">
              <h2>
                {{ item.date.start.month + ", " + item.date.start.year }} -
                {{ item.date.end.month + ", " + item.date.end.year }}
              </h2>
            </div>
            <div class="description">
              <h2 class="job_title">{{ item.title }}</h2>
              <h4 class="employer">
                <i>{{ item.employer }}</i>
              </h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="internships section" v-if="getRelevantInternships.length">
          <h2 class="title">Internships</h2>
          <div
            class="education_item"
            v-for="(item, index) in getRelevantInternships"
            :key="index"
          >
            <div class="active_period">
              <h2>
                {{ item.date.start.month + ", " + item.date.start.year }} -
                {{ item.date.end.month + ", " + item.date.end.year }}
              </h2>
            </div>
            <div class="description">
              <h2 class="headline">
                <b>{{ item.title }}, {{ item.employer }}</b>
              </h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="courses section pb-2" v-if="getRelevantCourses.length">
          <h2 class="title">Courses</h2>

          <div
            class="course_item"
            v-for="(course, index) in getRelevantCourses"
            :key="index"
          >
            <div class="active_period">
              <h2>
                {{ course.date.start.month + ", " + course.date.start.year }} -
                {{ course.date.end.month + ", " + course.date.end.year }}
              </h2>
            </div>
            <div class="description">
              <p class="pt-2">
                <i>{{ course.name }}</i>
                at {{ course.institute }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { resumeMixin } from "../../resumeMixin";

export default {
  mixins: [resumeMixin],
};
</script>
<style scoped>
#root {
  --yogurt-bg: #fff;
  --yogurt-dark-bg: #eee;
}
.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.columns {
  display: flex;
}

a {
  color: white;
}
a:hover {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0.2rem;
}

::-webkit-scrollbar-track {
  background: #eee;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
}

::-webkit-scrollbar-thumb:hover {
  background: #eee;
}

#general_info_panel .personal_info h6 {
  font-size: 0.7rem;
  width: 100%;
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

#relevant_info_panel div .active_period h2 {
  font-size: 0.65rem;
  padding: 0.3rem;
  padding-left: 0.6rem;
  line-height: 1.1rem;
  font-weight: 500;
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
  width: (100% - 3rem);
  margin: 0 1.5rem;
  border-bottom: 1px solid var(--yogurt-dark-bg);
}

#general_info_panel {
  position: relative;
  width: 32%;
  padding-left: 1.5rem;
  min-height: 100%;
}

#relevant_info_panel {
  position: relative;
  width: calc(68% - 1.5rem);
  padding-left: 1.5rem;
  border-left: 1px solid var(--yogurt-dark-bg);
}

.header .head h2.name {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-top: 1rem;
}

.header .head h4.title {
  font-size: 0.8rem;
  color: #777;
}

#general_info_panel .head,
#relevant_info_panel h2.title {
  position: relative;
  color: black;
  font-weight: bolder;
  font-size: 1rem;
  padding-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

#general_info_panel .head::after,
#relevant_info_panel h2.title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2rem;
  height: 0.15rem;
  background: black;
}

#general_info_panel h5.title {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: bolder;
}

#general_info_panel h6 {
  color: #777;
  padding-bottom: 0.4rem;
}

#general_info_panel a {
  color: #777;
}

.level_bar_wrapper {
  margin-left: 0;
  width: calc(100% - 1.5rem);
  background: var(--yogurt-dark-bg);
  margin-bottom: 1rem;
}

.level_bar_wrapper .level_bar {
  background: #777;
  height: 100%;
}

.level_name {
  display: none;
}

p.description {
  white-space: pre;
}

#relevant_info_panel h2.title {
  padding-top: 1rem;
}

#relevant_info_panel .section {
  border-bottom: 1px solid var(--yogurt-dark-bg);
  width: 100%;
}
#relevant_info_panel .professional_summary .title {
  display: none;
}
#relevant_info_panel .professional_summary p {
  padding-top: 0.5rem;
  font-size: 0.6rem;
  padding-right: 0;
  width: 100%;
  color: #777;
  margin-bottom: 0.5rem;
}
#relevant_info_panel .experience_item,
#relevant_info_panel .education_item {
  display: flex;
  flex-direction: column;
}
#relevant_info_panel div .active_period {
  order: 1;
}
#relevant_info_panel div .active_period h2 {
  font-size: 0.5rem;
  padding: 0;
  padding-left: 0.3rem;
}
#relevant_info_panel div .description p {
  margin-bottom: 0;
  padding-left: 0.3rem;
}

#relevant_info_panel div h4.employer {
  margin-bottom: 0.25rem;
}

#relevant_info_panel .course_item {
  display: flex;
  flex-direction: row;
}

#relevant_info_panel .course_item .active_period {
  order: 1;
}
#relevant_info_panel .course_item .active_period h2 {
  padding-top: 0.45rem;
  font-size: 0.6rem;
}
</style>
