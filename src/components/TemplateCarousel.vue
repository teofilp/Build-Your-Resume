<template>
  <div class="wrapper">
    <div class="slider">
      <div class="separator">
        <div class="left_separator" @click="slideLeft"></div>
        <div class="right_separator" @click="slideRight"></div>
      </div>
      <div class="slider_inner_wrapper">
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
          </div>
        </div>
        <div class="slider_item">
          <div class="scaler">
            <i class="fas fa-chevron-right next_template" @click="slideRight"></i>
            <i class="fas fa-chevron-left previous_template" @click="slideLeft"></i>
            <img src="https://source.unsplash.com/user/erondu/422x594" alt>
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
      activeTemplateIndex: 0,
      numberOfTemplates: -1,
      availableForSwipe: true,
      slides: []
    };
  },
  mounted() {
    this.handleTemplates();
  },
  methods: {
    handleTemplates() {
      this.slides = Array.prototype.slice.call(
        document.getElementsByClassName("slider_item")
      );
      this.numberOfTemplates = this.slides.length;
      this.resizeTemplates(this.slides);
      this.positionActiveTemplate(this.slides[this.activeTemplateIndex]);
      this.positionLeftTemplate(
        { arr: this.slides, index: this.activeTemplateIndex },
        4
      );
      this.positionRightTemplate(
        { arr: this.slides, index: this.activeTemplateIndex },
        4
      );
    },
    positionActiveTemplate(slide) {
      slide.classList.add("active");
      slide.style.left = window.innerWidth / 2 - slide.offsetWidth / 2 + "px";
    },
    resizeTemplates(slides) {
      slides.map(el => {
        let height = el.offsetHeight;
        el.style.width = height * 0.71 + "px";
        el.style.top = height / 8 + "px";
      });
    },
    positionLeftTemplate(wrap, shouldContinue) {
      let index = wrap.index;
      index += wrap.arr.length;
      index--;
      index %= wrap.arr.length;

      let leftTemplate = wrap.arr[index];
      let rightTemplate = wrap.arr[wrap.index];

      leftTemplate.style.left =
        rightTemplate.getBoundingClientRect().left -
        leftTemplate.offsetWidth -
        40 +
        "px";
      if (shouldContinue > 0) {
        wrap.index = index;
        this.positionLeftTemplate(wrap, shouldContinue - 1);
      }
    },
    positionRightTemplate(wrap, shouldContinue) {
      let index = wrap.index;
      index += wrap.arr.length;
      index++;
      index %= wrap.arr.length;

      let rightTemplate = wrap.arr[index];
      let leftTemplate = wrap.arr[wrap.index];

      rightTemplate.style.left =
        leftTemplate.getBoundingClientRect().right + 40 + "px";

      if (shouldContinue > 0) {
        wrap.index = index;
        this.positionRightTemplate(wrap, shouldContinue - 1);
      }
    },
    slideLeft() {
      if (this.availableForSwipe) this.disableSwipe();
      else return;

      this.slides[this.activeTemplateIndex].classList.remove("active");
      let activeLeft = this.getActiveTemplateLeftBoundary();
      this.moveLeftTemplatesToRight(
        this.slides.length,
        this.getNextIndex(this.activeTemplateIndex)
      );

      let nextActive = this.getPreviousIndex(this.activeTemplateIndex);
      this.changeActive(
        this.slides[this.activeTemplateIndex],
        this.slides[nextActive]
      );

      this.animateLeft(this.slides[nextActive], activeLeft, 300);

      this.increaseActiveTemplateIndex();
    },
    moveLeftTemplatesToRight(many, currIndex) {
      many--;
      let index = currIndex;
      let currentEl = this.slides[currIndex];
      index += this.slides.length;
      index--;
      index %= this.slides.length;
      if (many > 0) this.moveLeftTemplatesToRight(many, index);
      let leftEl = this.slides[index];

      this.animateLeft(leftEl, currentEl.getBoundingClientRect().left, 300);
      if (many == 0) return;
    },

    animateLeft(element, position, duration) {
      let distanceToTravel = Math.abs(
        element.getBoundingClientRect().left - position
      );

      if (distanceToTravel >= (3 / 4) * window.innerWidth) {
        $(element).css("left", position);
        return;
      }

      $(element).animate(
        {
          left: position
        },
        duration
      );
    },
    changeActive(oldActive, newActive) {
      $(newActive).addClass("active");
    },
    getActiveTemplateLeftBoundary() {
      return this.slides[this.activeTemplateIndex].getBoundingClientRect().left;
    },
    getNextIndex(currIndex) {
      return (currIndex + this.slides.length + 1) % this.slides.length;
    },
    getPreviousIndex(currIndex) {
      return (currIndex + this.slides.length - 1) % this.slides.length;
    },
    increaseActiveTemplateIndex() {
      this.activeTemplateIndex += this.numberOfTemplates;
      this.activeTemplateIndex--;
      this.activeTemplateIndex %= this.numberOfTemplates;
    },
    decreaseActiveTemplateIndex() {
      this.activeTemplateIndex += this.numberOfTemplates;
      this.activeTemplateIndex++;
      this.activeTemplateIndex %= this.numberOfTemplates;
    },
    disableSwipe() {
      this.availableForSwipe = false;
      let instance = this;
      setTimeout(() => {
        instance._data.availableForSwipe = true;
      }, 400);
    },
    slideRight() {
      if (this.availableForSwipe) this.disableSwipe();
      else return;

      this.slides[this.activeTemplateIndex].classList.remove("active");
      let activeLeft = this.getActiveTemplateLeftBoundary();
      this.moveRightTemplatesToLeft(
        this.slides.length,
        this.getNextIndex(this.activeTemplateIndex)
      );

      let nextActive = this.getNextIndex(this.activeTemplateIndex);
      this.changeActive(
        this.slides[this.activeTemplateIndex],
        this.slides[nextActive]
      );

      this.animateLeft(this.slides[nextActive], activeLeft, 300);

      this.decreaseActiveTemplateIndex();
    },
    moveRightTemplatesToLeft(many, currIndex) {
      many--;
      let index = currIndex;
      let currentEl = this.slides[currIndex];
      index += this.slides.length;
      index++;
      index %= this.slides.length;
      if (many > 0) this.moveRightTemplatesToLeft(many, index);
      let leftEl = this.slides[index];

      this.animateLeft(leftEl, currentEl.getBoundingClientRect().left, 300);
      if (many == 0) return;
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(81, 92, 107);
}
.slider {
  max-width: 5000px;
  position: absolute;
  height: 80%;
  top: 15%;
}
.slider_inner_wrapper {
  max-width: 5000px;
  width: 5000px;
  position: relative;
  height: 100%;
}
.slider_item {
  height: 80%;
  left: -100%;
  background: #aaa;
  position: relative;
  position: absolute;
  z-index: 2;
  border-radius: 0.2rem;
}

.active {
  z-index: 10;
}
.scaler {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  border-radius: 0.2rem;
  border: 0.3rem solid transparent;
}

.active .scaler {
  transform: scale(1.1);
  background: white;
  border-color: #ff6d67;
}

.separator {
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.separator .right_separator {
  width: 50vw;
  height: 100%;
  float: left;
  background: linear-gradient(
    to left,
    rgba(81, 92, 107, 0.8),
    rgba(81, 92, 107, 0.2)
  );
}
/* rgba(81, 92, 107, 0.8) */
.separator .left_separator {
  width: 50vw;
  height: 100%;
  float: left;
  background: linear-gradient(
    to right,
    rgba(81, 92, 107, 0.8),
    rgba(81, 92, 107, 0.2)
  );
}
.left_separator:hover,
.right_separator:hover,
i:hover {
  cursor: pointer;
}
i.previous_template,
i.next_template {
  position: absolute;
  background: #ff6d67;
  color: white;
  font-size: 2rem;
  padding: 0.35rem 0.5rem;
  top: calc(50% - 1.5rem);
  opacity: 0;
  transition: opacity 0.3s;
}
i.previous_template {
  right: calc(100% + 0.2rem);
}

i.next_template {
  left: calc(100% + 0.2rem);
}

.active i {
  opacity: 1;
}

.scaler img {
  width: 100%;
  height: 100%;
}
</style>


