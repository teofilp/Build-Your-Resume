<template>
  <div id="builder_wrapper" class="container">
    <div class="row mt-5">
      <div id="resume_title_wrapper" class="col-md-4 offset-md-4">
        <input type="text" id="resume_title" value="Untitled" placeholder="Untitled">
        <div id="resume_title_wrapper_after"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log("from resume builder");
  }
};
</script>
<style>
#builder_wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow-y: auto;
  background: white;
}

#resume_title {
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: center;
  border: none;
  font-size: 1.5em;
  color: black;
}
::-webkit-input-placeholder {
  color: black;
}

#resume_title_wrapper_after {
  position: absolute;
  content: "";
  top: 100%;
  left: 50%;
  width: 0;
  height: 2px;
  background: black;
  transition: left 0.2s, width 0.2s;
}
#resume_title:focus {
  outline: none;
}

#resume_title:focus ~ #resume_title_wrapper_after {
  left: 0;
  width: 100%;
}
</style>