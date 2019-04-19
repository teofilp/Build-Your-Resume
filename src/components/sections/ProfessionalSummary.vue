<template>
  <div class="wrapper container">
    <h2>
      <b>Professional Summary</b>
    </h2>
    <div class="row mb-5 mt-3" style="position: relative">
      <label class="col-md-12">Include 2-3 clear sentences about your overall experience</label>
      <textarea
        placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of ..."
        class="col-md-12"
        rows="5"
      ></textarea>
      <div class="after"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
textarea {
  resize: none;
  position: relative;
  border: none;
  background: rgba(151, 177, 219, 0.2);
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
  position: relative;
  left: 50%;
  top: 100%;
  width: 1px;
  height: 2px;
  background: #4286f4;
  opacity: 0;
  transition: width 0.3s, left 0.3s;
}

textarea:focus ~ div.after {
  opacity: 1;
  width: 100%;
  left: 0;
}
</style>

