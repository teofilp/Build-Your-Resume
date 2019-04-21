<template>
  <div id="root" class="wrapper smurf">
    <div id="general_info_panel">
      <div class="head">
        <h2 class="name">{{getPersonalDetails.first_name + " " + getPersonalDetails.last_name}}</h2>
        <h4 class="title">{{getPersonalDetails.job_title}}</h4>
      </div>

      <div class="personal_info mt-3" v-if="isEmptyPersonalInfo">
        <h2 class="head">Personal info</h2>

        <div class="mt-2" v-if="getAddress != ''">
          <h5 class="title">
            <b>Address</b>
          </h5>
          <h6>{{getAddress}}</h6>
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
          <div class="mt-2" v-for="(link, index) in getImportantLinks" :key="index">
            <h5 class="title">
              <b>{{link.label}}</b>
            </h5>
            <h6>
              <a :href="link.link" target="_blank">{{link.link}}</a>
            </h6>
          </div>
        </div>
      </div>

      <div class="skills mt-3" v-if="getImportantSkills.length">
        <h2 class="head">Skills</h2>

        <div
          class="skill_item"
          :class="{'mt-3': index!=0}"
          v-for="(skill, index) in getImportantSkills"
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

    <div id="relevant_info_panel">
      <div class="professional_summary" v-if="getProfessionalSummary.length">
        <h2 class="title">Professional Summary</h2>
        <p>{{getProfessionalSummary}}</p>
      </div>

      <div class="experience" v-if="getRelevantExperience.length">
        <h2 class="title">Experience</h2>

        <!-- start of experience items -->
        <!-- 1 -->
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

      <div class="education" v-if="getRelevantEducation.length">
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

      <div class="courses" v-if="getRelevantCourses.length">
        <h2 class="title">Courses</h2>

        <div class="course-item" v-for="(course, index) in getRelevantCourses" :key="index">
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      skillLevel: {
        beginner: "25%",
        novice: "50%",
        experienced: "75%",
        expert: "100%"
      }
    };
  },
  computed: {
    ...mapGetters([
      "getPersonalDetails",
      "getLinks",
      "getSkills",
      "getLanguages",
      "getProfessionalSummary",
      "getEmploymentHistory",
      "getEducation",
      "getCourses"
    ]),
    getAddress() {
      let address = this.getPersonalDetails.address
        ? this.getPersonalDetails.address
        : "";
      let city = this.getPersonalDetails.city
        ? "\n " + this.getPersonalDetails.city
        : "";
      let country = this.getPersonalDetails.country
        ? ", " + this.getPersonalDetails.country
        : "";
      let postalCode = this.getPersonalDetails.postal_code
        ? ", " + this.getPersonalDetails.postal_code
        : "";

      return address + city + country + postalCode;
    },
    getPhoneNumber() {
      let phoneNumber = this.getPersonalDetails.phone_number;
      let result = "";
      if (phoneNumber.length >= 10) {
        result += "(" + phoneNumber.slice(0, 4) + ") ";
        result += phoneNumber.slice(4, 7) + " ";
        result += phoneNumber.slice(7, phoneNumber.length);
      }

      return result;
    },
    getImportantLinks() {
      if (this.getLinks.length === 1) return this.getLinks;
      else return this.getLinks.slice(0, 2);
    },
    getImportantSkills() {
      if (this.getSkills.length <= 3) return this.getSkills;
      else return this.getSkills.slice(0, 3);
    },
    getRelevantLanguages() {
      if (this.getLanguages <= 3) return this.getLanguages;
      else return this.getLanguages.slice(0, 3);
    },
    getRelevantExperience() {
      if (this.getEmploymentHistory.length <= 3)
        return this.getEmploymentHistory;
      else return this.getEmploymentHistory.slice(0, 3);
    },
    getRelevantEducation() {
      if (this.getEducation.length <= 2) return this.getEducation;
      else return this.getEducation.slice(0, 2);
    },
    getRelevantCourses() {
      if (this.getCourses.length <= 3) return this.getCourses;
      else return this.getCourses.slice(0, 3);
    },
    isEmptyPersonalInfo() {
      let pd = this.getPersonalDetails;
      if (pd.email === "" && pd.phone_number === "" && this.getAddress === "")
        return false;
      return true;
    }
  }
};
</script>
<style scoped>
#root {
  --smurf-bg: #77abff;
  --smurf-dark-bg: #5495ff;
  font-size: 16px;
}
.wrapper {
  width: 100%;
  height: 100%;
}

.wrapper.smurf #general_info_panel {
  background: var(--smurf-bg);
}
a {
  color: white;
}
#general_info_panel {
  position: absolute;
  width: 30%;
  height: 100%;
  left: 0;
  top: 0;
}

#relevant_info_panel {
  position: absolute;
  width: 70%;
  height: 100%;
  left: 30%;
  top: 0;
}

.smurf #general_info_panel .head h2.name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  padding: 0.5em 0 0 0.5rem;
  color: white;
}

.smurf #general_info_panel .head h4.title {
  font-weight: 500;
  color: white;
  font-size: 0.8rem;
  padding: 0.3em 0 0 0.5rem;
}

.smurf h2.head {
  color: white;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.3em 0 0.5em 0.5rem;
  background: var(--smurf-dark-bg);
}

.smurf #general_info_panel h5.title,
.smurf #general_info_panel h6 {
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  padding: 0.3em 0 0 0.5rem;
}

.smurf #general_info_panel .personal_info h6 {
  padding-top: 0.1rem;
  font-size: 0.7rem;
}

.smurf .level_bar_wrapper {
  width: calc(100% - 1em);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 0.4rem;
  border-radius: 8px;
  overflow: hidden;
  background: var(--smurf-dark-bg);
}

.smurf .level_bar_wrapper .level_bar {
  width: 25%;
  height: 100%;
  background: white;
}

.level_name {
  float: right;
  margin-right: 0.5rem;
}

.smurf #relevant_info_panel h2.title {
  font-size: 1rem;
  position: relative;
  margin: 0.5em 0 0.5em 0.5rem;
  padding: 0.3em 0 0.3em 0;
  width: calc(100% - 1em);
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  color: var(--smurf-dark-bg);
}

.smurf #relevant_info_panel .professional_summary h2.title {
  display: none;
}

.smurf #relevant_info_panel .professional_summary p {
  font-size: 0.7rem;
  padding: 0.7em 0.7em 0 0.7rem;
}
.smurf .experience {
  position: relative;
  width: 100%;
}

.smurf #relevant_info_panel .experience {
  width: 100%;
  height: auto;
  position: relative;
}

.smurf #relevant_info_panel div .active_period {
  position: relative;
  overflow: hidden;
  float: left;
  width: 20%;
  height: 100%;
}

.smurf #relevant_info_panel div .active_period h2 {
  font-size: 0.65rem;
  padding: 0.3rem;
  padding-left: 0.6rem;
  line-height: 1.1rem;
  font-weight: 500;
}

.smurf #relevant_info_panel div .description {
  position: relative;
  width: 80%;
  height: 100%;
  float: left;
}

.smurf #relevant_info_panel div .description .job_title,
.smurf #relevant_info_panel div .description .headline {
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
}

.smurf #relevant_info_panel div .description .employer {
  padding-left: 0.3rem;
  font-size: 0.7rem;
}

.smurf #relevant_info_panel div .description p {
  padding: 0em 0.5em 0 0.3rem;
  font-size: 0.6rem;
}
</style>


