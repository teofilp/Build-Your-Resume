<template>
  <div class="wrapper">
    <div class="container">
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
        </div>
      </nav>
      <div class="steps">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3 class="step_number">1</h3>
              <p>Choose from our professionally designed resumes</p>
            </div>
            <div class="col-md-4">
              <h3 class="step_number">2</h3>
              <p>Fill in your details with our simple prompts</p>
            </div>
            <div class="col-md-4">
              <h3 class="step_number">3</h3>
              <p>Download & start and get a job today!</p>
            </div>
          </div>
        </div>
      </div>
      <div id="geo"></div>
      <div class="head">
        <h2 class="mb-5 pb-2">
          Build your resume with us
          <br>Intuitive. Easy to use. Professional.
        </h2>
        <div class="row">
          <router-link tag="div" to="/app" class="button col-md-8 offset-md-2">Start brewing now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  position: fixed;
  height: 100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  bottom: 0;
  left: 0;
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
  height: 60%;
  width: 60px;
  text-align: center;
  margin-top: 20px;
  padding-top: 15px;
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
  width: calc(100% - 80px);
  margin-left: 10px;
  margin-top: 25px;
  user-select: none;
}
</style>