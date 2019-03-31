<template>
  <div class="wrapper container">
    <h2>
      <b>Skills</b>
    </h2>

    <div class="row mt-3">
      <!-- individual els -->
      <div v-for="(skill, index) in getSkills" :key="index" class="item_wrapper col-md-12">
        <div class="row item_expand" @click="toggleExpand(skill)">
          <h5 class="col-md-10">{{skill.name}} - {{skill.level | capitalize}}</h5>
          <i class="fas fa-trash delete_icon col-md-1 mt-3 px-2" @click="deleteSkill(skill);"></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
        </div>

        <div class="skill_details mb-3" :class="{'inactive': !skill.expanded}">
          <div class="row">
            <div class="col-md-5" style="padding: 0">
              <label for class="col-md-12 label">Skill</label>
              <custom-input-field class="col-md-12" :model="skill" :attr="'name'"></custom-input-field>
            </div>

            <div class="col-md-6 offset-md-1" style="padding: 0; height: 100%">
              <label for class="col-md-12 label">Level - {{skill.level | capitalize}}</label>
              <skill-level class="col-md-12" style="padding:0;" :skill="skill"></skill-level>
            </div>
          </div>
        </div>
      </div>

      <!-- end of individual els -->
    </div>

    <div
      class="col-md-12 add_button"
      @click="
      $store.commit('hide', getSkills);
      $store.commit('addSkill');
    "
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add skill</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomInputField from "../../assets/CustomInputField.vue";
import SkillLevel from "../../assets/SkillLevel.vue";
export default {
  computed: {
    ...mapGetters(["getSkills"])
  },
  methods: {
    deleteSkill(skill) {
      this.$store.commit("deleteSkill", skill);
    },
    toggleExpand(skill) {
      if (skill.expanded === true) skill.expanded = false;
      else {
        this.$store.commit("hide", this.getSkills);
        skill.expanded = true;
      }
    }
  },
  components: {
    CustomInputField,
    SkillLevel
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style scoped>
.skill_details {
  width: 100%;
  position: relative;
  height: auto;
  left: 0;
  bottom: 0;
}

.skill_details.inactive {
  position: absolute;
  height: 0;
  overflow: hidden;
}
</style>


