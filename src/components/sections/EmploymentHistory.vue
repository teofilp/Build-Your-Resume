<template>
  <div class="container wrapper">
    <h2>
      <b>Employment History</b>
    </h2>
    <!-- education items -->
    <div class="mt-3">
      <div
        v-for="(employmentItem, index) in getEmploymentHistory"
        :key="index"
        class="item_wrapper"
      >
        <div class="row item_expand" @click="toggleExpand(employmentItem)">
          <h5
            class="col-md-10"
          >{{employmentItem.title}} at {{employmentItem.employer}}, {{ 'Apr 2019 - Apr 2019' }}</h5>
          <i
            class="fas fa-trash delete_icon col-md-1 mt-3 px-2"
            @click="deleteEmploymentItem(employmentItem);"
          ></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
        </div>
        <shared-custom-item
          v-show="employmentItem.expanded"
          :model="employmentItem"
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
      $store.commit('hide', getEmploymentHistory);
      $store.commit('addEmploymentItem');
    "
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add employment</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SharedCustomItem from "../../assets/SharedCustomItem.vue";
export default {
  computed: {
    ...mapGetters(["getEmploymentHistory"])
  },
  components: {
    SharedCustomItem
  },
  methods: {
    toggleExpand(employmentItem) {
      if (employmentItem.expanded == true) {
        employmentItem.expanded = false;
      } else {
        this.$store.commit("hide", this.getEmploymentHistory);
        employmentItem.expanded = true;
      }
    },
    deleteEmploymentItem(employmentItem) {
      this.$store.commit("deleteEmploymentItem", employmentItem);
    }
  }
};
</script>
<style scoped>
</style>


