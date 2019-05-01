<template>
  <div id="preview_wrapper" :class="{active: activeClass}">
    <div id="loading_bar">
      <div class="loader_circle"></div>
      <div class="loader_circle loader_circle_reverse"></div>
      <h2 class="loading_message">Loading</h2>
    </div>
    <div id="resume_preview">
      <resume></resume>
    </div>
    <i class="far fa-times-circle disable_preview" v-if="activeClass" @click="disablePreview"></i>
    <ul class="options">
      <li @click="saveResume">
        <div>
          <h2>
            <i class="fas fa-share"></i> Share
          </h2>
        </div>
      </li>
      <li>
        <button class="download" @click="download">Download</button>
      </li>
      <li class="preview_button">
        <div @click="enablePreview">
          <h2>
            <i class="fas fa-eye"></i>Preview
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Resume from "./Resume.vue";
import { EventBus } from "../main.js";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeClass: false,
      previewActive: false,
      abandonedDownload: false
    };
  },
  components: {
    Resume
  },
  mounted() {
    let instance = this;
    document.addEventListener("resize", () => {
      this.setInitialPositionAndDimensionsResumePreview();
    });
    this.setInitialPositionAndDimensionsResumePreview();
    this.increaseVisitors(true);
  },
  methods: {
    setInitialPositionAndDimensionsResumePreview() {
      let resume_preview = document.querySelector("#resume_preview");
      this.resizeToA4(resume_preview, "85%");
    },
    enablePreview() {
      if (this.previewActive) return;
      if (
        document
          .querySelector(".preview_button")
          .classList.contains("mobile_preview_disable")
      )
        return;
      this.previewActive = true;
      EventBus.$emit("previewUpdated", false);

      this.activeClass = true;
      this.previewActive = true;
    },

    resizeToA4(el, heightSize) {
      el.style.height = heightSize;
      el.style.width = el.offsetHeight * 0.71 + "px";
    },
    disablePreview() {
      this.previewActive = false;
      this.activeClass = false;
      EventBus.$emit("previewUpdated", true);
      this.setInitialPositionAndDimensionsResumePreview();
    },
    download() {
      this.abandonedDownload = false;
      if (this.getCompleteness < 70) {
        alert("Your Resume Completeness has to be greater or equal to 70");
        return;
      }
      document.querySelector("#loading_bar").classList.add("active");
      let instance = this;
      setTimeout(() => {
        const filename = "your_resume.pdf";
        const quality = 4;

        let resume = document.querySelector("#relevant_info_panel");
        let currHeight = document.querySelector("#resume_preview").offsetHeight;
        document.querySelector("#resume_preview").style.height = "auto";
        document.querySelector("#resume_preview").style.height =
          Math.max(
            document.querySelector("#resume_preview").offsetHeight +
              resume.scrollHeight +
              20,
            currHeight
          ) + "px";

        html2canvas(document.querySelector("#root"), {
          scale: quality
        }).then(canvas => {
          var imgData = canvas.toDataURL("image/png");
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = (canvas.height * imgWidth) / canvas.width;
          var heightLeft = imgHeight;
          var doc = new jsPDF("p", "mm");
          var position = 0;

          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight - 2;
            doc.addPage();
            doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          instance.setInitialPositionAndDimensionsResumePreview();
          document.querySelector("#loading_bar").classList.remove("active");
          doc.save(filename);
        });
      }, 300);
    },
    saveResume() {
      this.$store.dispatch("saveResume");
    },

    increaseVisitors(productionMode) {
      if (!productionMode) return;
      let instance = this;

      this.$http
        .get("https://stocktrader-f457a.firebaseio.com/visitors.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          data++;
          return this.$http.put(
            "https://stocktrader-f457a.firebaseio.com/visitors.json",
            data
          );
        })
        .then(result => console.log(result));
    }
  },
  computed: {
    ...mapGetters(["getCompleteness"])
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
* {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
#preview_wrapper {
  position: fixed;
  left: 50%;
  top: 0;
  height: 100%;
  width: 50%;
  background: rgba(151, 177, 219, 1);
  user-select: none;
}

#preview_wrapper.active {
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

#resume_preview {
  position: relative;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 15px #222;
  overflow: auto;
}

.options {
  position: absolute;
  display: table;
  padding: 0;
  width: 60%;
  height: 60px;
  left: 20%;
  bottom: 1%;
}
#preview_wrapper.active .options {
  width: 30%;
  left: 35%;
}
.options li {
  display: table-cell;
  text-align: center;
  height: 100%;
}

.options li div h2 {
  color: white;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 12px;
  padding: 8px 8px;
  transition: background-color 0.3s;
}

.options li:hover div h2 {
  background: rgba(45, 111, 216, 0.3);
  cursor: pointer;
}

button.download {
  background: #2d6fd8;
  font-size: 1.2rem;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  color: white;
  transition: background-color 0.3s;
}

i {
  padding-right: 5px;
}

button.download:hover {
  cursor: pointer;
  background: rgb(25, 91, 196);
}

.disable_preview {
  font-size: 3rem;
  color: #ccc;
  position: absolute;
  top: 2%;
  right: 2%;
  transition: color 0.3s;
}
.disable_preview:hover {
  color: #fff;
  cursor: pointer;
}

#preview_wrapper.active .preview_button {
  opacity: 0;
}

#preview_wrapper.active .preview_button:hover,
#preview_wrapper.active .preview_button:hover h2 {
  cursor: default;
}

#loading_bar {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  background: rgba(151, 177, 219, 1);
  transition: opacity 0.3s, z-index 0.3s;
}

#loading_bar.active {
  z-index: 9999;
  opacity: 1;
}
.loader_circle {
  width: 15rem;
  height: 15rem;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  border-top: 5px solid #fefefe;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-radius: 50%;
  margin-top: -7.5rem;
  margin-left: -7.5rem;
  animation: loader 1s infinite linear;
}

.loader_circle_reverse {
  width: 13rem;
  height: 13rem;
  margin-top: -6.5rem;
  margin-left: -6.5rem;
  animation: loader-reverse 1.2s infinite linear;
}

.loading_message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 1px;
  animation: fade 2s infinite linear;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loader-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@media only screen and (max-width: 1725px) {
  #resume_preview {
    width: 65%;
  }
}

@media only screen and (max-width: 1440px) {
  #resume_preview {
    width: 70%;
  }
}

@media only screen and (max-width: 1180px) {
  #preview_wrapper {
    display: none;
  }
}

@media only screen and (max-height: 750px) {
  .options {
    bottom: 0;
    margin-bottom: 0.2rem;
  }
  button.download {
    padding: 12px 25px;
  }
}

@media only screen and (max-width: 500px) {
  .options {
    width: 80%;
    left: 10%;
  }
}
</style>


