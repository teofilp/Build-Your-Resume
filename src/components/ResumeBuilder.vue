<template>
  <div id="builder_wrapper" class="container">
    <div class="row mt-5 resume_title_section">
      <div id="resume_title_wrapper" class="col-md-6 offset-md-3">
        <input
          type="text"
          class="col-md-4 offset-md-4"
          id="resume_title"
          placeholder="Untitled"
          @click="selectTitle"
          :value="getTitle"
        >
        <i class="fas fa-edit col-md-1 rename_title" @click="selectTitle"></i>
        <div id="resume_title_wrapper_after"></div>
      </div>
    </div>

    <div class="row resume_completeness_section mt-5">
      <div class="row col-md-12">
        <div class="col-md-6">
          <span>
            <span class="mr-2 text_danger">10 %</span>
            Profile completeness
          </span>
        </div>
        <div class="col-md-6">
          <span style="float: right">
            <span class="text-success mr-2">+10 %</span> Add Profile Summary
          </span>
        </div>
        <div class="completeness_bar_wrapper mt-3">
          <div class="bg_danger"></div>
        </div>
      </div>
    </div>

    <div class="row mt-5 px-3">
      <label class="col-md-12">Template</label>
      <custom-drop-down class="col-md-5"></custom-drop-down>
    </div>

    <div class="row mt-5">
      <personal-details-section class="col-md-12"></personal-details-section>
    </div>

    <div class="row mt-3">
      <professional-summary></professional-summary>
    </div>

    <div class="row mt-3">
      <social-links></social-links>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CustomDropDown from "../assets/CustomDropDown.vue";
import PersonalDetailsSection from "./sections/PersonalDetailsSection.vue";
import ProfessionalSummary from "./sections/ProfessionalSummary.vue";
import SocialLinks from "./sections/SocialLinks.vue";
export default {
  created() {
    console.log("from resume builder");
  },
  methods: {
    selectTitle() {
      document.getElementById("resume_title").select();
    }
  },
  computed: {
    ...mapGetters(["getTitle"])
  },
  components: {
    CustomDropDown,
    PersonalDetailsSection,
    ProfessionalSummary,
    SocialLinks
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
  overflow-y: auto;
  background: white;
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
  background: black;
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
  width: 10%;
}

.scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}
label.label,
label.col-md-12,
label.col-md-6 {
  font-size: 0.8em;
  padding: 0;
  user-select: none;
  color: #aaa;
}
</style>