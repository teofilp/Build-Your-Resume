<template>
  <div class="wrapper">
    <ul class="mobile_nav" :class="activeClass">
      <li class="mt-4">
        <a>Templates</a>
      </li>
      <li>
        <a>Examples</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
    </ul>
    <div class="container" style="height: 90%">
      <nav>
        <div class="container">
          <div class="logo">
            <img src="../assets/logo.png" alt>
          </div>
          <ul>
            <li class="mt-4">
              <a>Templates</a>
            </li>
            <li>
              <a>Examples</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
          <i class="fas fa-bars mobile_nav_toggler" @click="toggleMobileNav"></i>
        </div>
      </nav>

      <div id="geo"></div>
      <div class="head">
        <h2 class="mb-5 pb-2">
          Build your resume with us
          <br>Intuitive. Easy to use. Professional.
        </h2>
        <div class="row">
          <router-link tag="button" to="/app" class="button col-md-8 offset-md-2">Start brewing now</router-link>
        </div>
      </div>
    </div>
    <div class="steps">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-12">
            <h3 class="step_number">1</h3>
            <p>Choose from our professionally designed resumes</p>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <h3 class="step_number">2</h3>
            <p>Fill in your details with our simple prompts</p>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <h3 class="step_number">3</h3>
            <p>Download & and apply for a job today!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>Copyright 2019 Resume Builder</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "inactive"
    };
  },
  methods: {
    toggleMobileNav() {
      if (this.activeClass !== "active") {
        this.activeClass = "active";
      } else if (this.activeClass === "active") {
        this.activeClass = "inactive";
      }
      console.log(this.activeClass);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.wrapper {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/home.jpg");
}

.head {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  user-select: none;
}

.head h2 {
  text-align: center;
  font-size: 2.5rem;
  z-index: 3;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}

#geo {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  clip-path: polygon(0 0, 0 45%, 50% 75%, 100% 45%, 100% 0);
  z-index: 1;
}
.button {
  text-align: center;
  padding: 1.2rem 4rem;
  background: #478dff;
  font-size: 1.5rem;
  border-radius: 0.9rem;
  color: white;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid transparent;
  transition: background-color 0.2s;
}
.button:hover {
  cursor: pointer;
  background: #5193ff;
}

nav {
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
}
nav .container {
  height: 100%;
}

.logo {
  width: 80px;
  height: 100%;
  display: inline-block;
}
.logo img {
  width: 100%;
  height: 100%;
}
.logo:hover {
  cursor: pointer;
}

ul {
  float: right;
  list-style: none;
  height: 100%;
  display: relative;
}

ul li {
  display: inline-block;
  position: relative;
  height: calc(100%-1.5rem);
  margin-left: 2rem;
}

ul li a {
  position: relative;
  text-align: center;
  vertical-align: baseline;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 500;
  transition: color;
}

ul li a::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}

ul li:hover a::before {
  width: 100%;
  height: 100%;
  border-color: #478dff;
}

ul li:hover {
  color: #478dff;
  cursor: pointer;
}

.steps {
  position: relative;
  width: 100%;
  background: rgb(255, 255, 255);
  bottom: 0;
  left: 0;
  box-shadow: 1px 1px 5px #aaa;
}
.steps .container {
  height: 100%;
}
.steps .row {
  height: 100%;
}
.steps .container .row div {
  height: 100%;
}

.step_number {
  height: 60px;
  width: 60px;
  text-align: center;
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  padding-top: 1.4rem;
  font-weight: 700;
  color: white;
  background: rgba(71, 141, 255, 0.8);
  border-radius: 50%;
  display: inline-block;
  float: left;
  user-select: none;
}

.step_number ~ p {
  color: #555;
  height: 100%;
  float: left;
  max-width: calc(100% - 80px);
  margin-left: 10px;
  margin-top: 25px;
  user-select: none;
}

.footer {
  width: 100%;
  background: white;
}

.footer h2 {
  color: #4286f4;
  padding: 1.25rem;
  padding-top: 1.6rem;
  font-size: 0.8rem;
  text-align: center;
}

.mobile_nav_toggler {
  font-size: 3.5rem;
  color: #478dff;
  float: right;
  padding-top: 1rem;
}

ul.mobile_nav {
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  left: -100;
  opacity: 0;
  z-index: 9;
}
ul.active {
  left: 0;
  opacity: 1;
  transition: left 0.5s, opacity 0.5s;
}

ul.mobile_nav.inactive {
  left: -100%;
  opacity: 0;
  transition: left 0.5s, opacity 0.5s;
}

ul.mobile_nav li {
  display: block;
  padding-left: 3rem;
  padding-top: 8rem;
}

ul.mobile_nav li a {
  font-size: 5rem;
  color: #478dff;
}

@media only screen and (min-width: 500px) {
  .mobile_nav_toggler {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .step_number ~ p {
    text-align: center;
  }

  .step_number {
    margin-left: 2rem;
  }
}

@media only screen and (max-width: 500px) {
  nav .container ul {
    display: none;
  }
  nav .container ul.mobile_nav {
    display: block;
  }

  .logo {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
}

@media only screen and (max-width: 370px) {
  .step_number {
    width: 40px;
    height: 40px;
    padding-top: 1.2rem;
  }

  .step_number ~ p {
    margin-top: 20px;
  }
}
</style>