<template>
  <div class="wrapper container">
    <h2>
      <b>Languages</b>
    </h2>

    <div class="row mt-3">
      <!-- individual els -->
      <div v-for="(language, index) in getLanguages" :key="index" class="item_wrapper col-md-12">
        <div class="row item_expand" @click="toggleExpand(language)">
          <h5
            class="col-md-10 col-sm-9 col-9"
          >{{language.language}} - {{language.level | capitalize}}</h5>
          <i
            class="fas fa-trash delete_icon col-md-1 col-sm-1 col-1 mt-3 px-2"
            @click="deletelanguage(language);"
          ></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 col-sm-1 col-1 mt-3"></i>
        </div>

        <div class="languages_details" :class="{'inactive': !language.expanded}">
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
      class="add_button"
      @click="
      $store.commit('hide', getLanguages);
      $store.commit('addLanguage');
    "
    >
      <h5>
        <i class="fas fa-plus mt-3"></i> Add language
      </h5>
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
  max-height: 400px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: max-height 0.3s, margin-bottom 0.2s;
}

.languages_details.inactive {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  margin-bottom: 0;
}
</style>


