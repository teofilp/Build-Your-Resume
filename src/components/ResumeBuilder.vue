<template>
  <div id="builder_wrapper" class="container">
    <div id="disclaimer_wrapper">
      <h2 class="disclaimer">
        For a better experience please use our desktop version.
        You won't be able to download your resume if you're using an iOS device.
      </h2>
    </div>
    <div class="row mt-5 resume_title_section">
      <div id="resume_title_wrapper" class="col-md-6 col-sm-12 col-12 col-6 offset-md-3">
        <input
          type="text"
          class="col-md-4 col-sm-12 col-12 offset-md-4 offset-sm-12"
          id="resume_title"
          placeholder="Untitled"
          @click="selectTitle"
          :value="getTitle"
        >
        <i class="fas fa-edit col-md-1 col-sm-1 col-1 rename_title" @click="selectTitle"></i>
        <div id="resume_title_wrapper_after"></div>
      </div>
    </div>

    <div class="row resume_completeness_section mt-5">
      <div class="row col-md-12">
        <div class="col-md-6">
          <span>
            <span class="mr-2" :style="{'color': getColor}">{{getCompleteness}} %</span>
            Profile completeness
          </span>
        </div>

        <div class="completeness_bar_wrapper mt-3">
          <div :style="{'width': getCompleteness + '%', 'background-color': getColor}"></div>
        </div>
      </div>
    </div>

    <div class="row mt-5 px-3">
      <label class="col-xs-12 col-sm-12 col-md-12">Template</label>
      <custom-drop-down class="col-xs-12 col-sm-12 col-md-5 col-lg-5"></custom-drop-down>
    </div>

    <div class="row mt-5">
      <personal-details class="col-md-12"></personal-details>
    </div>

    <div class="row mt-3">
      <professional-summary></professional-summary>
    </div>

    <div class="row mt-3">
      <social-links></social-links>
    </div>

    <div class="row mt-5">
      <skills></skills>
    </div>

    <div class="row mt-5">
      <education></education>
    </div>

    <div class="row mt-5">
      <employment-history></employment-history>
    </div>

    <div class="row mt-5">
      <languages></languages>
    </div>

    <div class="row mt-5">
      <courses></courses>
    </div>

    <div class="row mt-5">
      <Internships></Internships>
    </div>

    <div class="row mt-5">
      <div style="width: 2px; height: 200px"></div>
    </div>
    <i class="fas fa-search mobile_preview" @click="enableMobilePreview"></i>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CustomDropDown from "../assets/CustomDropDown.vue";
import PersonalDetails from "./sections/PersonalDetails.vue";
import ProfessionalSummary from "./sections/ProfessionalSummary.vue";
import SocialLinks from "./sections/SocialLinks.vue";
import Skills from "./sections/Skills.vue";
import Education from "./sections/Education.vue";
import EmploymentHistory from "./sections/EmploymentHistory.vue";
import Languages from "./sections/Languages.vue";
import Courses from "./sections/Courses.vue";
import Internships from "./sections/Internships.vue";
export default {
  methods: {
    selectTitle() {
      document.getElementById("resume_title").select();
    },
    enableMobilePreview() {
      document.querySelector("#builder_wrapper").style.display = "none";
      let preview = document.querySelector("#preview_wrapper");
      let resume_preview = document.querySelector("#resume_preview");
      preview.style.display = "block";
      preview.style.width = "100%";
      preview.style.left = "0";
      document
        .querySelector(".preview_button")
        .classList.add("mobile_preview_disable");
      document
        .querySelector(".mobile_preview_disable")
        .addEventListener("click", () => {
          document.querySelector("#builder_wrapper").style.display = "block";
          preview.style.display = "none";
          ev.target.classList.remove("mobile_preview_disable");
        });

      resume_preview.style.width = resume_preview.offsetHeight * 0.71 + "px";
    },
    disclaimerSetup() {
      // target only mobile
      if (window.innerWidth >= 800 && window.innerHeight >= 600) return;

      document.querySelector("#disclaimer_wrapper").classList.add("active");
      setTimeout(() => {
        document
          .querySelector("#disclaimer_wrapper")
          .classList.remove("active");
      }, 6500);
    }
  },
  computed: {
    ...mapGetters(["getTitle", "getCompleteness"]),
    getColor() {
      if (this.getCompleteness < 30) {
        return "red";
      } else if (this.getCompleteness > 70) {
        return "#60d13e";
      } else if (this.getCompleteness > 50) {
        return "#f4df41";
      } else if (this.getCompleteness > 30) {
        return "#f4b942";
      }
    }
  },
  components: {
    CustomDropDown,
    PersonalDetails,
    ProfessionalSummary,
    SocialLinks,
    Skills,
    Education,
    EmploymentHistory,
    Languages,
    Courses,
    Internships
  },
  mounted() {
    this.disclaimerSetup();
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
* {
  padding: 0;
  margin: 0;
}
#builder_wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  padding-left: 5em;
  padding-right: 5em;
  background: white;
}
#disclaimer_wrapper {
  background: white;
  position: absolute;
  left: 50%;
  top: -100%;
  width: 80%;
  transform: translateX(-50%);
  z-index: 999999;
  opacity: 0;
  transition: all 1s;
}
h2.disclaimer {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Roboto", sans-serif;
  background: rgba(66, 134, 244, 0.2);
  padding: 3rem;
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
  color: #333;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
#disclaimer_wrapper.active {
  top: 0;
  opacity: 1;
}
#resume_title {
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: center;
  border: none;
  font-size: 1.7em;
  color: black;
}
::-webkit-input-placeholder {
  color: black;
}

.wrapper {
  width: 100%;
}

.wrapper h2 {
  font-size: 1.2em;
  font-weight: 500;
}
.row {
  margin: 0;
  padding: 0;
}

.rename_title {
  opacity: 0;
  font-size: 1.3em;
  color: #ccc;
  transition: color 0.3s, opacity 0.3s;
}

.rename_title:hover {
  cursor: pointer;
  opacity: 1;
}

#resume_title_wrapper_after {
  position: absolute;
  content: "";
  top: 100%;
  left: 50%;
  width: 0;
  height: 3px;
  background: rgb(66, 134, 244);
  transition: left 0.2s, width 0.2s;
}
#resume_title:hover ~ .rename_title {
  opacity: 1;
}

#resume_title:focus {
  outline: none;
}

#resume_title:focus ~ #resume_title_wrapper_after {
  left: 33%;
  width: 33%;
}

.resume_completeness_section {
  background: white;
  z-index: 11;
  width: 100%;
}

.resume_completeness_section .col-md-6 {
  font-size: 0.8em;
  user-select: none;
  font-family: "Roboto";
  color: #aaa;
}

.resume_completeness_section .col-md-6 span span {
  font-weight: 700;
}

.completeness_bar_wrapper {
  height: 3px;
  width: 100%;
  margin-left: 2%;
  margin-right: 2%;
  background: #ccc;
  box-sizing: border-box;
}
.text_danger {
  color: #f45042;
}

.bg_danger {
  background: #f45042;
}

.completeness_bar_wrapper div {
  height: 100%;
  transition: width 0.3s;
}

/* .scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
} */
label.label,
label.col-md-12,
label.col-md-6 {
  font-size: 0.85em;
  padding: 0;
  user-select: none;
  color: #aaa;
}

.add_button {
  border: 1px dashed rgba(66, 134, 244, 0.3);
  border-left: none;
  border-right: none;
  transition: background-color 0.3s, border-color 0.3s;
}
.add_button:hover {
  cursor: pointer;
  border-color: transparent;
  background: rgba(66, 134, 244, 0.2);
}
.add_button h5 {
  height: 100%;
  margin: 0;
  padding: 1rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #4286f4;
}

.add_button i {
  font-size: 0.9rem;
  height: 100%;
  color: #4286f4;
}

.item_expand:hover {
  cursor: pointer;
}
.item_expand:hover h5 {
  color: #4286f4;
}

.delete_icon,
.expand_icon {
  font-size: 0.95rem;
  text-align: center;
  transition: opacity 0.1s, color 0.1s;
}
.delete_icon {
  text-align: right;
  opacity: 0;
}

.expand_icon {
  color: #bbb;
}

.expand_icon:hover,
.delete_icon:hover {
  color: #5c8cda;
}
.item_expand:hover i.delete_icon,
.item_expand:hover i.expand_icon {
  color: #4286f4;
  opacity: 1;
}

.item_wrapper {
  border-top: 1px solid #eee;
}
.item_wrapper h5 {
  height: 100%;
  font-size: 0.9rem;
  margin: 0;
  padding: 15px 10px;
}
.expandable {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
}
.expandable.active {
  max-height: 700px;
  transition: max-height 0.3s;
}
.mobile_preview {
  position: sticky;
  bottom: 1.5rem;
  right: -1.5rem;
  color: white;
  background: #aaa;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 50%;
  display: none;
}
@media only screen and (max-width: 1180px) {
  #builder_wrapper {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .mobile_preview {
    display: inline;
  }
}
@media only screen and (max-width: 768px) {
  .rename_title {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  div#builder_wrapper {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
@media only screen and (max-width: 450px) {
  div#builder_wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>