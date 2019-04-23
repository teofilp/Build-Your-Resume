<template>
  <div id="preview_wrapper" :class="{active: activeClass}">
    <div id="resume_preview">
      <resume></resume>
      <div class="resume_overlay" @click="enablePreview">
        <i class="fas fa-eye"></i>
      </div>
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
export default {
  data() {
    return {
      activeClass: false,
      previewActive: false
    };
  },
  components: {
    Resume
  },
  mounted() {
    this.setInitialPositionAndDimensionsResumePreview();
  },
  methods: {
    setInitialPositionAndDimensionsResumePreview() {
      let resume_preview = document.querySelector("#resume_preview");
      this.resizeToA4(resume_preview, "85%");
    },
    enablePreview() {
      if (this.previewActive) return;

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
      const filename = "your_resume.pdf";
      const quality = 1;
      html2canvas(document.querySelector("#root"), {
        scale: quality
      }).then(canvas => {
        let pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
        pdf.save(filename);
      });
    },
    saveResume() {
      this.$store.dispatch("saveResume");
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
  overflow-y: auto;
}

#preview_wrapper.active {
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  user-select: none;
}
#preview_wrapper.active .resume_overlay {
  display: none;
}

#resume_preview {
  position: relative;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 15px #222;
}

.resume_overlay {
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.resume_overlay:hover {
  cursor: pointer;
}

.resume_overlay:hover i {
  font-size: 32px;
  padding: 12px;
}

.resume_overlay i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0px;
  padding: 0px;
  background: #2d6fd8;
  color: white;
  border-radius: 50%;
  transition: font-size 0.1s, padding 0.1s;
}

.options {
  position: absolute;
  display: table;
  padding: 0;
  width: 60%;
  height: 60px;
  left: 20%;
  bottom: 2%;
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
</style>


