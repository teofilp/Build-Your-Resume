<template>
  <div id="builder_wrapper" class="container">
    <div class="row mt-5 resume_title_section">
      <div id="resume_title_wrapper" class="col-md-6 offset-md-3">
        <input type="text" class="col-md-4 offset-md-4" id="resume_title"
         placeholder="Untitled" @click="selectTitle" :value="getTitle">
        <i class="fas fa-edit col-md-1 rename_title" @click="selectTitle"></i>
        <div id="resume_title_wrapper_after"></div>
      </div>
    </div>
    <div class="row resume_completeness_section px-5 mt-5">
      <div class="row col-md-12">
        <div class="col-md-6">
          <span class="text-danger mr-2">10%</span> Profile completeness
        </div>
        <div class="col-md-6">
          <span style="float: right"><span class="text-success mr-2">+10%</span> Add Profile Summary</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  created() {
    console.log("from resume builder");
  },
  methods: {
    selectTitle(){
      document.getElementById("resume_title").select();
    }
  },
  computed: {
    ...mapGetters(['getTitle'])
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
  font-size: 1.7em;
  color: black;
}
::-webkit-input-placeholder {
  color: black;
}

.rename_title {
  font-size: 1.3em;
  color: #ccc;
  transition: color .3s;
}
.rename_title:hover {
  cursor: pointer;
  color: black;
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
</style>