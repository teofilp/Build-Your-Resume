<template>
  <div id="date">
    <div class="row" style="padding: 0">
      <div class="col-md-6 pr-1 date_wrapper">
        <input
          type="text"
          :placeholder="placeholder"
          :value="date.start.month + ', ' + date.start.year"
          @click="startActive = !startActive; endActive = false"
        >
        <div class="after"></div>
        <div class="date_picker" :class="{'inactive': !startActive}">
          <div class="row mt-3">
            <div class="col-md-2 text-right" @click="decrementStartYear">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="col-md-8">{{ date.start.year }}</div>
            <div class="col-md-2" @click="incrementStartYear">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div class="row mt-2 m-3">
            <ul class="col-sm-12">
              <li :class="{active: date.start.month === 'Jan'}" @click="updateStartMonth('Jan')">Jan</li>
              <li :class="{active: date.start.month === 'Feb'}" @click="updateStartMonth('Feb')">Feb</li>
              <li :class="{active: date.start.month === 'Mar'}" @click="updateStartMonth('Mar')">Mar</li>
              <li :class="{active: date.start.month === 'Apr'}" @click="updateStartMonth('Apr')">Apr</li>
            </ul>
            <ul class="col-sm-12">
              <li :class="{active: date.start.month === 'May'}" @click="updateStartMonth('May')">May</li>
              <li :class="{active: date.start.month === 'Jun'}" @click="updateStartMonth('Jun')">Jun</li>
              <li :class="{active: date.start.month === 'Jul'}" @click="updateStartMonth('Jul')">Jul</li>
              <li :class="{active: date.start.month === 'Aug'}" @click="updateStartMonth('Aug')">Aug</li>
            </ul>
            <ul class="col-sm-12">
              <li :class="{active: date.start.month === 'Sep'}" @click="updateStartMonth('Sep')">Sep</li>
              <li :class="{active: date.start.month === 'Oct'}" @click="updateStartMonth('Oct')">Oct</li>
              <li :class="{active: date.start.month === 'Nov'}" @click="updateStartMonth('Nov')">Nov</li>
              <li :class="{active: date.start.month === 'Dec'}" @click="updateStartMonth('Dec')">Dec</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 date_wrapper">
        <input
          type="text"
          :placeholder="placeholder"
          :value="date.end.month + ', ' + date.end.year"
          @click="endActive = !endActive; startActive = false"
        >
        <div class="after"></div>
        <div class="date_picker" :class="{'inactive': !endActive}">
          <div class="row mt-3">
            <div class="col-md-2 text-right" @click="decrementEndYear">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="col-md-8">{{ date.end.year }}</div>
            <div class="col-md-2" @click="incrementEndYear">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div class="row mt-2 m-3">
            <ul class="col-sm-12">
              <li :class="{active: date.end.month === 'Jan'}" @click="updateEndMonth('Jan')">Jan</li>
              <li :class="{active: date.end.month === 'Feb'}" @click="updateEndMonth('Feb')">Feb</li>
              <li :class="{active: date.end.month === 'Mar'}" @click="updateEndMonth('Mar')">Mar</li>
              <li :class="{active: date.end.month === 'Apr'}" @click="updateEndMonth('Apr')">Apr</li>
            </ul>
            <ul class="col-sm-12">
              <li :class="{active: date.end.month === 'May'}" @click="updateEndMonth('May')">May</li>
              <li :class="{active: date.end.month === 'Jun'}" @click="updateEndMonth('Jun')">Jun</li>
              <li :class="{active: date.end.month === 'Jul'}" @click="updateEndMonth('Jul')">Jul</li>
              <li :class="{active: date.end.month === 'Aug'}" @click="updateEndMonth('Aug')">Aug</li>
            </ul>
            <ul class="col-sm-12">
              <li :class="{active: date.end.month === 'Sep'}" @click="updateEndMonth('Sep')">Sep</li>
              <li :class="{active: date.end.month === 'Oct'}" @click="updateEndMonth('Oct')">Oct</li>
              <li :class="{active: date.end.month === 'Nov'}" @click="updateEndMonth('Nov')">Nov</li>
              <li :class="{active: date.end.month === 'Dec'}" @click="updateEndMonth('Dec')">Dec</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startActive: false,
      endActive: false
    };
  },
  props: ["date", "placeholder"],

  methods: {
    incrementStartYear() {
      this.date.start.year++;
    },
    decrementStartYear() {
      this.date.start.year--;
    },
    incrementEndYear() {
      this.date.end.year++;
    },
    decrementEndYear() {
      this.date.end.year--;
    },
    updateStartMonth(month) {
      this.date.start.month = month;
      this.startActive = !this.startActive;
    },
    updateEndMonth(month) {
      this.date.end.month = month;
      this.endActive = !this.endActive;
    }
  },
  mounted() {
    let vueInstance = this;
    document.querySelector("body").addEventListener("click", function() {
      vueInstance._data.startActive = false;
      vueInstance._data.endActive = false;
    });

    let arr = document.getElementsByClassName("date_wrapper");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", function(ev) {
        ev.stopPropagation();
      });
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
  background: rgba(151, 177, 219, 0.2);
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

div.after,
div.pr-1.after {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 2px;
  background: #4286f4;
  transition: width 0.3s, left 0.3s;
}

input:focus ~ div.after {
  width: 100%;
  left: 0;
}
div.pr-1 input:focus ~ div.after {
  width: 98%;
  left: 0;
}
.date_picker {
  z-index: 10;
  position: absolute;
  top: calc(100% + 5px);
  width: 140%;
  background: white;
  border-radius: 4px;
  box-shadow: 1px 2px 10px #aaa;
  overflow: hidden;
}

.date_picker.inactive {
  height: 0;
}
.date_picker .col-md-8 {
  text-align: center;
}

.date_picker .col-md-8:hover {
  user-select: none;
}

.date_picker i {
  transition: color 0.3s;
  color: rgb(66, 134, 244);
}
.date_picker .col-md-2:hover {
  cursor: pointer;
}

.date_picker .col-md-2:hover i {
  color: #4286f4;
}

.row ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.row ul li {
  display: inline-block;
  width: 25%;
  padding: 5px;
  text-align: center;
  border-radius: 12px;
  font-size: 0.9em;
  transition: background-color 0.3s, color 0.3s;
}
.row ul li.active {
  background: #4286f4;
  color: white;
}
.row ul li:hover {
  background: rgba(66, 134, 244, 0.7);
  color: white;
  cursor: pointer;
}
.row ul li.active:hover {
  background: #4286f4;
}
</style>


