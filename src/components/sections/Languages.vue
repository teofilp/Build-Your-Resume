<template>
  <div class="wrapper container">
    <h2>
      <b>Languages</b>
    </h2>

    <div class="row mt-3">
      <!-- individual els -->
      <div v-for="(language, index) in getLanguages" :key="index" class="item_wrapper col-md-12">
        <div class="row item_expand" @click="toggleExpand(language)">
          <h5 class="col-md-10">{{language.language}} - {{language.level | capitalize}}</h5>
          <i class="fas fa-trash delete_icon col-md-1 mt-3 px-2" @click="deletelanguage(language);"></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
        </div>

        <div class="languages_details mb-3" :class="{'inactive': !language.expanded}">
          <div class="row">
            <div class="col-md-5" style="padding: 0">
              <label for class="col-md-12 label">Language</label>
              <custom-input-field class="col-md-12" :model="language" :attr="'language'"></custom-input-field>
            </div>

            <div class="col-md-6 offset-md-1" style="padding: 0; height: 100%">
              <label for class="col-md-12 label">Level - {{language.level | capitalize}}</label>
              <skill-level class="col-md-12" style="padding:0;" :skill="language"></skill-level>
            </div>
          </div>
        </div>
      </div>

      <!-- end of individual els -->
    </div>

    <div
      class="col-md-12 add_button"
      @click="
      $store.commit('hide', getLanguages);
      $store.commit('addLanguage');
    "
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add language</h5>
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
    ...mapGetters(["getLanguages"])
  },
  methods: {
    deletelanguage(language) {
      this.$store.commit("deleteLanguage", language);
    },
    toggleExpand(language) {
      if (language.expanded === true) language.expanded = false;
      else {
        this.$store.commit("hide", this.getLanguages);
        language.expanded = true;
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
.languages_details {
  width: 100%;
  position: relative;
  height: auto;
  left: 0;
  bottom: 0;
}

.languages_details.inactive {
  position: absolute;
  height: 0;
  overflow: hidden;
}
</style>


