<template>
  <div class="wrapper container">
    <h2>
      <b>Websites & Social Links</b>
    </h2>
    <!-- here goes array with social links -->
    <div class="row mt-3">
      <!-- individual els -->
      <div
        v-for="(link, index) in getLinks"
        :key="index"
        class="item_wrapper col-md-12 col-sm-12 col-12"
      >
        <div class="row item_expand" @click="toggleExpand(link)">
          <h5 class="col-md-10 col-sm-9 col-9">{{link.label}} - {{link.link}}</h5>
          <i
            class="fas fa-trash delete_icon col-md-1 col-sm-1 col-1 mt-3 px-2"
            @click="deleteLink(link)"
          ></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 col-sm-1 col-1 mt-3"></i>
        </div>
        <div class="link_details" :class="{'inactive': !link.expanded}">
          <div class="row">
            <label for class="col-md-5 col-sm-5 col-5 label">Label</label>
            <label for class="col-md-5 col-sm-5 col-5 label offset-md-2 offset-sm-2">Link</label>
            <custom-input-field class="col-md-5 col-sm-5 col-5" :model="link" :attr="'label'"></custom-input-field>
            <custom-input-field
              class="col-md-5 col-sm-5 col-5 offset-md-2 offset-sm-2"
              :model="link"
              :attr="'link'"
            ></custom-input-field>
          </div>
        </div>
      </div>
      <!-- end of individual els -->
    </div>

    <!-- 
        --------
    -->

    <!-- END -->

    <div
      class="add_button"
      @click="
      $store.commit('hide', getLinks);
      $store.commit('addLink');
    "
    >
      <h5>
        <i class="fas fa-plus mt-3"></i> Add link
      </h5>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CustomInputField from "../../assets/CustomInputField.vue";
export default {
  computed: {
    ...mapGetters(["getLinks"])
  },
  components: {
    CustomInputField
  },
  methods: {
    toggleExpand(link) {
      if (link.expanded === true) {
        link.expanded = false;
      } else {
        this.$store.commit("hide", this.getLinks);
        link.expanded = true;
      }
    },
    deleteLink(link) {
      this.$store.commit("deleteLink", link);
    }
  }
};
</script>
<style scoped>
.link_details {
  width: 100%;
  position: relative;
  max-height: 400px;
  left: 0;
  bottom: 0;
  transition: max-height 0.3s, margin 0.3s;
  margin-bottom: 1.5rem;
}

.link_details.inactive {
  position: relative;
  max-height: 0;
  overflow: hidden;
  margin-bottom: 0;
}
</style>


