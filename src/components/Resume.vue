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
          <h6 class="level_name">Intermediate</h6>
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

    <div id="relevant_info_panel">
      <div class="professional_summary">
        <h2 class="title">Professional Summary</h2>
        <p>
          IT Professional with over 10 years of experience specializing in IT department management for international logistics
          companies. I can implement effective IT strategies at local and global levels.
        </p>
      </div>

      <div class="experience">
        <h2 class="title">Experience</h2>

        <!-- start of experience items -->
        <!-- 1 -->
        <div class="experience_item">
          <div class="active_period">
            <h2>2006-12 - 2009-11</h2>
          </div>
          <div class="description">
            <h2 class="job_title">Software Engineer</h2>
            <h4 class="employer">
              <i>Microsoft</i>
            </h4>
            <p>
              Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <!-- 2 -->
        <div class="experience_item">
          <div class="active_period">
            <h2>2004-06 - 2006-12</h2>
          </div>
          <div class="description">
            <h2 class="job_title">Junior Software Developer</h2>
            <h4 class="employer">
              <i>Instagram</i>
            </h4>
            <p>
              Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <!-- 3 -->
        <div class="experience_item">
          <div class="active_period">
            <h2>2004-06 - 2006-12</h2>
          </div>
          <div class="description">
            <h2 class="job_title">iOS Software Developer</h2>
            <h4 class="employer">
              <i>BytesForce</i>
            </h4>
            <p>
              Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. dipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- end of experience items -->
      </div>

      <div class="education">
        <h2 class="title">Education</h2>
        <!-- start of education items -->

        <!-- 1 -->
        <div class="education_item">
          <div class="active_period">
            <h2>2004-06 - 2006-12</h2>
          </div>
          <div class="description">
            <h2 class="headline">
              <b>Master of Computer Science, University of Maryland</b>
            </h2>
            <p>Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <!-- 2 -->
        <div class="education_item">
          <div class="active_period">
            <h2>2004-06 - 2006-12</h2>
          </div>
          <div class="description">
            <h2 class="headline">
              <b>Bachelor of Computer Science, University of Maryland</b>
            </h2>
            <p>Loem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <!-- end of education items -->
        <div class="clearfix"></div>
      </div>

      <div class="certifications">
        <h2 class="title">Certifications</h2>
        <!-- start of certicate items -->
        <!-- 1 -->
        <div class="certifcate_item">
          <div class="active_period">
            <h2>2010-05</h2>
          </div>
          <div class="description">
            <p class="pt-2">PMP - Project Management Institute</p>
          </div>
        </div>
        <!-- 2 -->
        <div class="certifcate_item">
          <div class="active_period">
            <h2>2010-05</h2>
          </div>
          <div class="description">
            <p class="pt-2">CAPM - Project Management Institute</p>
          </div>
        </div>

        <!-- end of certificate items -->
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  font-size: 1.4em;
  letter-spacing: 0.05em;
  padding: 0.5em 0 0 0.5em;
  color: white;
}

.smurf #general_info_panel .head h4.title {
  font-weight: 500;
  color: white;
  font-size: 0.9em;
  padding: 0.3em 0 0 0.5em;
}

.smurf h2.head {
  color: white;
  width: 100%;
  font-weight: 500;
  font-size: 1em;
  padding: 0.3em 0 0.5em 0.5em;
  background: var(--smurf-dark-bg);
}

.smurf #general_info_panel h5.title,
.smurf #general_info_panel h6 {
  color: white;
  font-size: 0.7em;
  font-weight: 400;
  padding: 0.3em 0 0 0.5em;
}

.smurf #general_info_panel .personal_info h6 {
  padding-top: 0.1em;
  font-size: 0.7em;
}

.smurf .level_bar_wrapper {
  width: calc(100% - 1em);
  margin-left: 0.5em;
  margin-right: 0.5em;
  height: 0.4em;
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
  margin-right: 0.5em;
}

.smurf #relevant_info_panel h2.title {
  font-size: 1em;
  position: relative;
  margin: 0.5em 0 0.5em 0.5em;
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
  font-size: 0.7em;
  padding: 0.7em 0.7em 0 0.7em;
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
  font-size: 0.65em;
  padding: 0.8em;
  padding-left: 0.8em;
  line-height: 1.1em;
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
  padding-left: 0.3em;
  padding-top: 0.3em;
  font-size: 0.7em;
  font-weight: 700;
}

.smurf #relevant_info_panel div .description .employer {
  padding-left: 0.3em;
  font-size: 0.7em;
}

.smurf #relevant_info_panel div .description p {
  padding: 0em 0.5em 0 0.3em;
  font-size: 0.6em;
}
</style>


