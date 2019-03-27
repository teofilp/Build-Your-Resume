<template>
  <div class="wrapper container">
    <h2>
      <b>Professional Summary</b>
    </h2>
    <div class="row mb-5 mt-3">
      <label class="col-md-12">Include 2-3 clear sentences about your overall experience</label>
      <textarea
        placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of ..."
        class="col-md-11"
        rows="5"
      ></textarea>
      <div class="col-md-11 stylers"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  width: 100%;
}

.wrapper h2 {
  font-size: 1.2em;
  font-weight: 500;
}
.row {
  margin: 0;
}

textarea {
  resize: none;
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

div.stylers {
  background: #eee;
  height: 40px;
}
</style>

