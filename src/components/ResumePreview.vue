<template>
  <div id="preview_wrapper" :class="{active: activeClass}">
    <div id="resume_preview">
      <component :is="activeResume"></component>
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
// import Resume from "./Resume.vue";
import { EventBus } from "../main.js";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";
import { mapGetters } from "vuex";
import * as uuidv1 from "uuid/v1";
import * as Crypt from "cryptr";
import * as axios from "axios";
export default {
  data() {
    return {
      activeClass: false,
      previewActive: false
    };
  },
  mounted() {
    let instance = this;
    document.addEventListener("resize", () => {
      this.setInitialPositionAndDimensionsResumePreview();
    });
    this.setInitialPositionAndDimensionsResumePreview();
    this.increaseVisitors(process.env.VUE_APP_UPDATE_VISITORS);
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
      if (this.getCompleteness < 70) {
        alert("Your Resume Completeness has to be greater or equal to 70");
        return;
      }

      this.enableLoadingScreen();

      let instance = this;

      setTimeout(() => {
        const filename = uuidv1(); // unique name - id
        const quality = 4;
        let fontSize = {};

        this.resizeWrapperBeforeDownload(fontSize);

        html2canvas(document.querySelector("#root"), {
          scale: quality
        }).then(canvas => {
          var doc = new jsPDF("p", "mm");

          instance.convertToPdf(doc, canvas);
          instance.disableLoadingScreen();
          instance.resizeWrapperAfterDownload(fontSize);
          instance.savePdf(doc, filename);
        });
      }, 300);
    },
    resizeWrapperBeforeDownload(fontSize) {
      let resumeRelevantInfoPanel = document.querySelector(
        "#relevant_info_panel"
      );
      let resume = document.querySelector("#resume_preview");
      resume.style.width = 316 + "px";
      resume.style.height = resume.offsetWidth * 1.41;

      fontSize.value = $("html").css("fontSize");
      fontSize.value = parseInt(fontSize.value) + "px";

      $("html").css("fontSize", "7px");

      let currHeight = resume.offsetHeight;
      resume.style.height = "auto";

      EventBus.$emit("preparationsBeforeDownload");
    },
    resizeWrapperAfterDownload(fontSize) {
      this.setInitialPositionAndDimensionsResumePreview();
      $("html").css("fontSize", fontSize.value);
    },
    convertToPdf(doc, canvas) {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight - 7;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
    },
    enableLoadingScreen() {
      document.querySelector("#loading_bar").classList.add("active");
    },
    disableLoadingScreen() {
      document.querySelector("#loading_bar").classList.remove("active");
    },
    savePdf(doc, filename) {
      doc.save(filename);
      this.uploadResume(filename);
    },
    saveResume() {
      this.$store.dispatch("saveResume");
      this.$swal({
        position: "center",
        type: "success",
        title: "Your resume has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },

    increaseVisitors(increase) {
      if (!increase) return;
      if (localStorage.getItem("visitor")) return;
      localStorage.setItem("visitor", true);

      axios
        .get("https://resume-builder-5c57f.firebaseio.com/meta/visitors.json")
        .then(res => {
          return res.data;
        })
        .then(data => {
          data++;
          return axios.put(
            "https://resume-builder-5c57f.firebaseio.com/meta/visitors.json",
            data
          );
        });
    },
    uploadResume(name) {
      let resume = this.$store.state.resume;
      const crypt = new Crypt("5590fd6409be2494de0226f5d7");
      const encryptedResume = crypt.encrypt(resume);

      axios.put(
        "https://resume-builder-5c57f.firebaseio.com/data/" + name + ".json",
        {
          encryptedResume
        }
      );
    }
  },
  computed: {
    ...mapGetters(["getCompleteness", "getActiveThemeTemplate"]),
    activeResume: function() {
      return this.getActiveThemeTemplate;
    }
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


