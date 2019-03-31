<template>
  <div class="wrapper container">
    <h2>
      <b>Personal Details</b>
    </h2>
    <div class="row mt-3">
      <div class="col-md-5 p-0">
        <label class="col-md-12">Job title</label>
        <custom-input-field
          placeholder="e.g. Teacher"
          type="text"
          :model="$store.state.resume.personal_details"
          :attr="'job_title'"
        ></custom-input-field>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-5 p-0">
        <label class="col-md-12">First Name</label>
        <custom-input-field
          type="text"
          :model="$store.state.resume.personal_details"
          :attr="'first_name'"
        ></custom-input-field>
      </div>
      <div class="col-md-5 offset-md-2 p-0">
        <label class="col-md-12">Last Name</label>
        <custom-input-field
          type="text"
          :model="$store.state.resume.personal_details"
          :attr="'last_name'"
        ></custom-input-field>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-5 p-0">
        <label class="col-md-12">Email</label>
        <custom-input-field
          type="email"
          :model="$store.state.resume.personal_details"
          :attr="'email'"
        ></custom-input-field>
      </div>
      <div class="col-md-5 offset-md-2 p-0">
        <label class="col-md-12">Phone Number</label>
        <custom-input-field
          type="text"
          :model="$store.state.resume.personal_details"
          :attr="'phone_number'"
        ></custom-input-field>
      </div>
    </div>

    <div class="additional_details" :class="{'active': additionalPanelVisible}">
      <div class="row mt-3">
        <div class="col-md-5 p-0">
          <label class="col-md-12">Country</label>
          <custom-input-field
            type="text"
            :model="$store.state.resume.personal_details"
            :attr="'country'"
          ></custom-input-field>
        </div>
        <div class="col-md-5 offset-md-2 p-0">
          <label class="col-md-12">City</label>
          <custom-input-field
            type="text"
            :model="$store.state.resume.personal_details"
            :attr="'job_title'"
          ></custom-input-field>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 p-0">
          <label class="col-md-12">Address</label>
          <custom-input-field
            type="address"
            :model="$store.state.resume.personal_details"
            :attr="'address'"
          ></custom-input-field>
        </div>
        <div class="col-md-5 offset-md-2 p-0">
          <label class="col-md-12">Postal Code</label>
          <custom-input-field
            type="text"
            :model="$store.state.resume.personal_details"
            :attr="'postal_code'"
          ></custom-input-field>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 p-0">
          <label class="col-md-12">Nationality</label>
          <custom-input-field
            type="text"
            :model="$store.state.resume.personal_details"
            :attr="'nationality'"
          ></custom-input-field>
        </div>
        <div class="col-md-5 offset-md-2 p-0">
          <label class="col-md-12">Place of Birth</label>
          <custom-input-field
            type="text"
            :model="$store.state.resume.personal_details"
            :attr="'place_of_birth'"
          ></custom-input-field>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 p-0">
          <label class="col-md-12">Date of Birth</label>
          <custom-input-field
            type="email"
            :model="$store.state.resume.personal_details"
            :attr="'date_of_birth'"
          ></custom-input-field>
        </div>
      </div>
    </div>

    <h5 class="mt-3 mb-5 additional_info_toggler" @click="toggleAdditionalInfoPanel">{{getMessage}}</h5>
  </div>
</template>
<script>
import CustomInputField from "../../assets/CustomInputField.vue";
export default {
  data() {
    return {
      additionalPanelVisible: false
    };
  },
  components: {
    CustomInputField
  },
  methods: {
    toggleAdditionalInfoPanel() {
      this.additionalPanelVisible = !this.additionalPanelVisible;
    }
  },
  computed: {
    getMessage() {
      return !this.additionalPanelVisible
        ? "Show additional information"
        : "Hide additional information";
    }
  }
};
</script>
<style scoped>
.additional_details {
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: height 0.3s, opacity 0.3s;
}

.additional_details.active {
  height: auto;
  opacity: 1;
}
.additional_info_toggler {
  font-size: 0.8em;
  color: #32abdb;
}
.additional_info_toggler:hover {
  cursor: pointer;
}
</style>


