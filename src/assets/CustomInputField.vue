<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model[attr]"
      @click="selectInputContent"
    >
    <div class="after"></div>
  </div>
</template>
<script>
export default {
  props: ["type", "placeholder", "model", "attr"],
  methods: {
    selectInputContent(ev) {
      ev.target.select();
    }
  }
};
</script>
<style scoped>
div {
  padding: 0;
}
input {
  width: 100%;
  height: 100%;
  background: #efefef;
  border: none;
  font-size: 1em;
  padding: 12px 15px;
  border-radius: 4px;
}

input:focus {
  outline: none;
}

input::-webkit-input-placeholder {
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

input:focus ~ div.after {
  width: 100%;
  left: 0;
}
</style>


