<template>
  <div class="dropdown_wrapper wrapper" @click="toggleDropDown">
    <div class="row">
      <h5 class="col-lg-8 col-md-8 col-sm-8 col-8">{{getActiveTheme | capitalize }}</h5>
      <i
        class="fas col-3 col-sm-3 col-md-3 offset-xs-2 mt-3"
        :class="{'fa-chevron-up': isActive, 'fa-chevron-down': !isActive}"
      ></i>
      <div class="wrapper_after" :class="{'active': isActive}"></div>
      <div class="dropdown_options_wrapper" :class="{'active' : isActive}">
        <ul id="dropdown-ul">
          <li
            class="li-item"
            v-for="(option, index) in getAvailableThemes"
            :key="index"
            :class="{'active': option.name === getActiveTheme}"
            @click="updateActiveOption(option)"
          >
            <h5 class="li-item">{{ option.name | capitalize }}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isActive = !this.isActive;
    },
    updateActiveOption(option) {
      this.$store.state.activeTheme = option.name.toLowerCase();
    }
  },
  computed: {
    ...mapGetters(["getThemes", "getActiveTheme"]),
    getAvailableThemes() {
      return this.getThemes.filter(theme => theme.available);
    }
  },
  mounted() {
    let vueInstance = this;
    document.querySelector("body").addEventListener("click", function(ev) {
      document
        .querySelector(".dropdown_options_wrapper")
        .classList.remove("active");
      if (vueInstance._data.isActive) vueInstance.toggleDropDown();
    });

    document
      .querySelector(".dropdown_wrapper")
      .addEventListener("click", function(ev) {
        ev.stopPropagation();
      });
  }
};
</script>
<style scoped>
.wrapper {
  z-index: 10;
  background: rgba(151, 177, 219, 0.2);
  border-radius: 4px;
}
.wrapper h5 {
  font-size: 1em;
  padding: 0.8em 0.5em;
  height: 100%;
  margin: 0;
}
.wrapper i {
  font-size: 0.9em;
  transition: transform 0.3s;
  text-align: right;
}

.wrapper i.active {
  transform: rotate(180deg);
}
.wrapper_after {
  position: absolute;
  left: 50%;
  width: 0;
  bottom: 0;
  height: 2px;
  transition: width 0.3s, left 0.3s;
}
.wrapper_after.active {
  width: 100%;
  left: 0;
  background: #4286f4;
}
.wrapper:hover {
  cursor: pointer;
}

.dropdown_options_wrapper {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  background: rgba(181, 207, 249, 1);
  height: 0px;
  overflow: auto;
  transition: height 0.3s;
  box-shadow: 2px 3px 8px #aaa;
}

.dropdown_options_wrapper.active {
  height: 170px;
}
.dropdown_options_wrapper ul {
  width: 100%;
  list-style: none;
  margin: 0;
}

.dropdown_options_wrapper ul li:hover {
  background: rgba(81, 131, 211, 0.7);
  color: white;
}

ul li.active {
  color: #fff;
}

.dropdown_options_wrapper::-webkit-scrollbar {
  width: 8px;
}

.dropdown_options_wrapper::-webkit-scrollbar-thumb {
  background: #5183d3;
  border-radius: 10px;
}

.dropdown_options_wrapper::-webkit-scrollbar-thumb:hover {
  background: #5183d3;
}
</style>


