<template>
  <div class="item_details">
    <div class="row mt-3">
      <div class="col-md-5" style="padding: 0">
        <label for class="col-md-12 label">{{ label1 }}</label>
        <custom-input-field class="col-md-12" :model="model" :attr="attr1" :label="label1"></custom-input-field>
      </div>
      <div class="col-md-5 offset-md-2" style="padding: 0">
        <label for class="col-md-12 label">{{ label2 }}</label>
        <custom-input-field class="col-md-12" :model="model" :attr="attr2" :label="label2"></custom-input-field>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-5" style="padding: 0">
        <label for class="col-md-12 label">Start & End Date</label>
        <div class="row">
          <custom-date-input :placeholder="'Mar, 2019'" :date="model.date" class="col-md-12"></custom-date-input>
        </div>
      </div>
      <div class="col-md-5 offset-md-2" style="padding: 0">
        <label for class="col-md-12 label">City</label>
        <custom-input-field class="col-md-12" :model="model" :attr="'city'" :label="'City'"></custom-input-field>
      </div>
    </div>

    <div class="row my-4">
      <label class="col-md-12">Description</label>
      <textarea class="col-md-12" rows="5"></textarea>
      <div class="after"></div>
    </div>
  </div>
</template>

<script>
import CustomInputField from "./CustomInputField.vue";
import CustomDateInput from "./CustomDateInput.vue";
export default {
  props: ["model", "attr1", "attr2", "label1", "label2"],
  components: {
    CustomInputField,
    CustomDateInput
  }
};
</script>

<style scoped>
textarea {
  resize: none;
  position: relative;
  border: none;
  background: #eee;
  padding: 12px 15px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
textarea:focus {
  outline: none;
}

textarea::-webkit-input-placeholder {
  color: #aaa;
}

div.after {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 2px;
  background: #32abdb;
  transition: width 0.3s, left 0.3s;
}

textarea:focus ~ div.after {
  width: 100%;
  left: 0;
}
</style>


