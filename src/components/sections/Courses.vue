<template>
  <div class="container wrapper">
    <h2>
      <b>Courses</b>
    </h2>
    <!-- education items -->
    <div>
      <div v-for="(course, index) in getCourses" :key="index" class="item_wrapper">
        <div class="row item_expand" @click="toggleExpand(course)">
          <h5 class="col-md-10">
            <i>{{course.name}}</i>
            at {{course.institute}}
          </h5>
          <i class="fas fa-trash delete_icon col-md-1 mt-3 px-2" @click="deleteCourse(course);"></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
        </div>
        <shared-custom-item
          v-show="course.expanded"
          :model="course"
          :attr1="'name'"
          :attr2="'institute'"
          :label1="'Name'"
          :label2="'Institute'"
          descriptionVisible="false"
          cityVisible="false"
        ></shared-custom-item>
        <!-- spacer -->
        <div class="py-2" style="width:1px height: 1px" v-if="course.expanded"></div>
      </div>
    </div>

    <div
      class="col-md-12 add_button mt-3"
      @click="
      $store.commit('hide', getCourses);
      $store.commit('addCourse');
    "
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add course</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SharedCustomItem from "../../assets/SharedCustomItem.vue";
export default {
  computed: {
    ...mapGetters(["getCourses"])
  },
  components: {
    SharedCustomItem
  },
  methods: {
    toggleExpand(course) {
      if (course.expanded == true) {
        course.expanded = false;
      } else {
        this.$store.commit("hide", this.getCourses);
        course.expanded = true;
      }
    },
    deleteCourse(course) {
      this.$store.commit("deleteCourse", course);
    }
  }
};
</script>
<style scoped>
</style>


