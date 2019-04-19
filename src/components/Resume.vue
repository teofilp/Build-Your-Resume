<template>
  <div id="root" class="wrapper smurf">
    <div id="general_info_panel">
      <div class="head">
        <h2 class="name">John Smith</h2>
        <h4 class="title">IT Project Manager</h4>
      </div>

      <div class="personal_info mt-3">
        <h2 class="head">Personal info</h2>

        <div class="mt-2">
          <h5 class="title">
            <b>Address</b>
          </h5>
          <h6>
            134 Rightward Way
            <br>Portland, ME, 04019
          </h6>
        </div>

        <div class="mt-2">
          <h5 class="title">
            <b>Phone</b>
          </h5>
          <h6>774-987-4009</h6>
        </div>

        <div class="mt-2">
          <h5 class="title">
            <b>E-mail</b>
          </h5>
          <h6>j.smith@uptowork.com</h6>
        </div>

        <div class="mt-2">
          <h5 class="title">
            <b>LinkedIn</b>
          </h5>
          <h6>
            <a href="#">linkedIn.com/johnutw</a>
          </h6>
        </div>
      </div>

      <div class="skills mt-3">
        <h2 class="head">Skills</h2>

        <div class="skill_item">
          <h5 class="title">C#</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 75%"></div>
          </div>
          <h6 class="level_name">Advanced</h6>
        </div>

        <div class="skill_item mt-3">
          <h5 class="title">Java</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 25%"></div>
          </div>
          <h6 class="level_name">Beginner</h6>
        </div>

        <div class="skill_item mt-3">
          <h5 class="title">MongoDB</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 50%"></div>
          </div>
          <h6 class="level_name">Intermidiate</h6>
        </div>

        <div class="skill_item mt-3">
          <h5 class="title">UNIX</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 100%"></div>
          </div>
          <h6 class="level_name">Master</h6>
        </div>

        <!-- end of skill list -->
        <div class="clearfix"></div>
      </div>

      <div class="languages mt-2">
        <h2 class="head">Languages</h2>

        <div class="language_item mt-3">
          <h5 class="title">English</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 100%"></div>
          </div>
          <h6 class="level_name">Master</h6>
        </div>

        <div class="language_item mt-3">
          <h5 class="title">French</h5>
          <div class="level_bar_wrapper">
            <div class="level_bar" style="width: 50%"></div>
          </div>
          <h6 class="level_name">Intermediate</h6>
        </div>
      </div>
    </div>

    <div id="relevant_info_panel"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#root {
  --smurf-bg: #88ccff;
  --smurf-dark-bg: #68beff;
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
}

.smurf #general_info_panel .head h2.name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0 0.5rem;
  color: white;
}

.smurf #general_info_panel .head h4.title {
  font-weight: 500;
  color: white;
  font-size: 0.9rem;
  padding: 0.3rem 0 0 0.5rem;
}

.smurf h2.head {
  color: white;
  width: 100%;
  font-weight: 500;
  padding: 0.3rem 0 0.5rem 0.5rem;
  background: var(--smurf-dark-bg);
}

.smurf #general_info_panel h5.title,
.smurf #general_info_panel h6 {
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  padding: 0.3rem 0 0 0.5rem;
}

.smurf #general_info_panel .personal_info h6 {
  padding-top: 0.1rem;
  font-size: 0.7rem;
}

.smurf .level_bar_wrapper {
  width: calc(100% - 1rem);
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
</style>


