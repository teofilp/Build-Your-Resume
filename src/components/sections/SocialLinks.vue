<template>
  <div class="wrapper container">
    <h2>
      <b>Websites & Social Links</b>
    </h2>
    <!-- here goes array with social links -->
    <div class="row mt-3">
      <!-- individual els -->
      <div v-for="(link, index) in getLinks" :key="index" class="item_wrapper col-md-12">
        <div class="row item_expand" @click="toggleExpand(link)">
          <h5 class="col-md-10">{{link.label}} - {{link.link}}</h5>
          <i class="fas fa-trash delete_icon col-md-1 mt-3 px-2" @click="deleteLink(link)"></i>
          <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
        </div>
        <div class="link_details mb-3" :class="{'inactive': !link.expanded}">
          <div class="row">
            <label for class="col-md-5 label">Label</label>
            <label for class="col-md-5 label offset-md-2">Link</label>
            <custom-input-field class="col-md-5" :model="link" :attr="'label'"></custom-input-field>
            <custom-input-field class="col-md-5 offset-md-2" :model="link" :attr="'link'"></custom-input-field>
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
      class="col-md-12 add_button"
      @click="$store.commit('hide', getLinks);
    $store.commit('addLink')"
    >
      <div class="row" style="height: 100%">
        <i class="fas fa-plus mt-3"></i>
        <h5>Add link</h5>
      </div>
    </div>
    <label
      class="col-md-11 label mt-2"
      for
    >You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website</label>
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
  height: auto;
  left: 0;
  bottom: 0;
}

.link_details.inactive {
  position: absolute;
  height: 0;
  overflow: hidden;
}
</style>


