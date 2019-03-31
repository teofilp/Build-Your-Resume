<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-3" :class="activeClass" @click="updateLevel('beginner')"></div>
      <div class="col-md-3" :class="activeClass" @click="updateLevel('novice')"></div>
      <div class="col-md-3" :class="activeClass" @click="updateLevel('experienced')"></div>
      <div class="col-md-3 no_after" :class="activeClass" @click="updateLevel('expert')"></div>
      <div id="thumb" :class="activeThumbClass"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeThumbClass: this.skill.level + "_thumb",
      activeClass: this.skill.level
    };
  },
  props: ["skill"],
  methods: {
    updateLevel(level) {
      this.skill.level = level;
      this.activeThumbClass = level + "_thumb";
      this.activeClass = level;
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.wrapper .row .col-md-3 {
  padding: 22px 10px;
  margin-top: 0;
  transition: background-color 0.3s;
}

.wrapper .row .col-md-3::after {
  content: "";
  position: absolute;
  right: 0;
  top: 40%;
  height: 20%;
  width: 1px;
  background: black;
}

.no_after::after {
  display: none;
}
#thumb {
  position: absolute;
  width: calc(25% - 1px);
  height: 100%;
  border-radius: 4px;
  transition: left 0.3s;
}
.beginner_thumb {
  background: #ff5959;
  left: 0;
}

.novice_thumb {
  background: #f3b721;
  left: 25%;
}

.experienced_thumb {
  background: #80cc14;
  left: 50%;
}

.expert_thumb {
  background: #25b869;
  left: 75%;
}

.beginner {
  background: #ffe0e0;
  transition: background-color 0.3s;
}

.novice {
  background: #f2da9f;
}

.experienced {
  background: rgba(128, 204, 20, 0.4);
}

.expert {
  background: #d7f2e3;
}
</style>


