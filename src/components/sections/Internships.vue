<template>
  <div class="container wrapper">
    <h2>
      <b>Internships</b>
    </h2>
    <!-- education items -->
    <div class="mt-3">
      <div
        v-for="(internshipItem, index) in getInternshipHistory"
        :key="index"
        class="item_wrapper"
      >
        <div class="row item_expand" @click="toggleExpand(internshipItem)">
          <h5
            class="col-md-10 col-sm-9 col-9"
          >{{internshipItem.title}} at {{internshipItem.employer}}, {{ 'Apr 2019 - Apr 2019' }}</h5>
          <i
            class="fas fa-trash delete_icon col-md-1 col-sm-1 col-1 mt-3 px-2"
            @click="deleteInternship(internshipItem);"
          ></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 col-sm-1 col-1 mt-3"></i>
        </div>
        <shared-custom-item
        class="expandable"
        :class="{active : internshipItem.expanded}"
          :model="internshipItem"
          :attr1="'title'"
          :attr2="'employer'"
          :label1="'Job title'"
          :label2="'Employer'"
        ></shared-custom-item>
      </div>
    </div>

    <div
      class="col-md-12 add_button"
      @click="
      $store.commit('hide', getInternshipHistory);
      $store.commit('addInternship');
    "
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add internship</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SharedCustomItem from "../../assets/SharedCustomItem.vue";
export default {
  computed: {
    ...mapGetters(["getInternshipHistory"])
  },
  components: {
    SharedCustomItem
  },
  methods: {
    toggleExpand(internshipItem) {
      if (internshipItem.expanded == true) {
        internshipItem.expanded = false;
      } else {
        this.$store.commit("hide", this.getInternshipHistory);
        internshipItem.expanded = true;
      }
    },
    deleteInternship(internshipItem) {
      this.$store.commit("deleteInternship", internshipItem);
    }
  }
};
</script>
<style scoped>
</style>


