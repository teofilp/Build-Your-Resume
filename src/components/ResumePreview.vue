<template>
  <div id="preview_wrapper">
    <div id="resume_preview">
      <div class="resume_overlay">
        <i class="fas fa-eye"></i>
      </div>
    </div>
    <ul class="options">
      <li>
        <div>
          <h2>
            <i class="fas fa-share"></i> Share
          </h2>
        </div>
      </li>
      <li>
        <button class="download">Download</button>
      </li>
      <li>
        <div>
          <h2>
            <i class="fas fa-eye"></i>Preview
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    let resume_preview = document.querySelector("#resume_preview");
    let resume_options = document.querySelector(".options");
    resume_preview.style.height = resume_preview.offsetWidth * 1.41 + "px";
    resume_options.style.top =
      resume_preview.offsetHeight / 2 + resume_preview.offsetTop + 30 + "px";
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
* {
  font-family: "Open Sans", sans-serif;
}
#preview_wrapper {
  position: fixed;
  left: 50%;
  top: 0;
  height: 100%;
  width: 50%;
  background: #aaa;
  overflow-y: auto;
}

#resume_preview {
  position: relative;
  width: 60%;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 2px 2px 15px #222;
}

.resume_overlay {
  position: relative;
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
}

.options li {
  display: table-cell;
  text-align: center;
  height: 100%;
}

.options li div h2 {
  color: white;
  font-weight: 300;
  font-size: 1em;
  border-radius: 12px;
  padding: 8px 8px;
  transition: background-color 0.3s;
}

.options li:hover div h2 {
  background: #999;
  cursor: pointer;
}

button.download {
  background: #2d6fd8;
  font-size: 1.2em;
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
</style>


