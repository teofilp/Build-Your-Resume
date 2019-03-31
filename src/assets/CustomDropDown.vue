<template>
  <div class="dropdown_wrapper wrapper" @click="toggleDropDown">
    <div class="row">
      <h5 class="col-md-8">{{ active_option }}</h5>
      <i
        class="fas col-md-2 offset-md-2 mt-3"
        :class="{'fa-chevron-up': isActive, 'fa-chevron-down': !isActive}"
      ></i>
      <div class="wrapper_after" :class="{'active': isActive}"></div>
      <div class="dropdown_options_wrapper" :class="{'active' : isActive}">
        <ul id="dropdown-ul">
          <li
            class="li-item"
            v-for="(option, index) in options"
            :key="index"
            :class="{'active': option === active_option}"
            @click="updateActiveOption(option)"
          >
            <h5 class="li-item">{{ option }}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        "Stockholm",
        "Barcelona",
        "Madrid",
        "Milano",
        "Moscow",
        "New York"
      ],
      active_option: "Stockholm",
      isActive: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isActive = !this.isActive;
    },
    updateActiveOption(option) {
      this.active_option = option;
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
  background: #efefef;
  border-radius: 4px;
}
.wrapper h5 {
  font-size: 1em;
  padding: 12px 15px;
  height: 100%;
  margin: 0;
}
.wrapper i {
  font-size: 1em;
  transition: transform 0.3s;
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
  background: #efefef;
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
  color: #c1c1c1;
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


