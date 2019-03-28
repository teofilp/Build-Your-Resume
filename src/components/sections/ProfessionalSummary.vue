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
      <div class="col-md-11 stylers">
        <ul>
          <li @click="execCommand('bold')"><i class="fas fa-bold"
          :class="{active : commands.bold}"></i></li>
          <li @click="execCommand('italic')"
          ><i class="fas fa-italic"
          :class="{active : commands.italic}"></i></li>
          <li @click="execCommand('underline')"><i class="fas fa-underline"
          :class="{active : commands.underline}"></i></li>
          <li><i class="fas fa-backspace inactive"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      commands: {
        italic: false,
        bold: false,
        underline: false
       }
    }
  },
  methods: {
    execCommand(command){
      this.commands[command] = !this.commands[command];
      console.log(this.commands[command]);
      document.execCommand(command);
    }
  }
};
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

.stylers ul {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  list-style: none;
}

.stylers ul li {
  display: inline-block;
  margin-left: 12px;
}

.stylers ul li i {
  transition: color .3s;
}

.stylers ul li i {
  font-size: .8em;
}

.stylers ul li:hover i {
  color: #32abdb;
  cursor: pointer;
}

.stylers ul li i.active {
  color: #32abdb;
}

.stylers ul li i.inactive {
  color: #bbb;
  cursor: not-allowed;
}
</style>

