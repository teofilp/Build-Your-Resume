var data = {
    activeSlideIndex: -1,
    availableForSwipe: true,
    slides: []
}

var moveRightSlidesToLeft = function (many, currIndex, slides) {
    many--;
    let index = currIndex;
    let currentEl = slides[currIndex];
    index += slides.length;
    index++;
    index %= slides.length;
    if (many > 0) moveRightSlidesToLeft(many, index, slides);

    let leftEl = slides[index];
    animateLeft(leftEl, currentEl.getBoundingClientRect().left, 300);
}

var moveLeftSlidesToRight = function (many, currIndex, slides) {
    let index = currIndex;
    let currentEl = slides[currIndex];
    index += slides.length;
    index--;
    index %= slides.length;
    if (many > 0) moveLeftSlidesToRight(many - 1, index, slides);
    let leftEl = slides[index];

    animateLeft(leftEl, currentEl.getBoundingClientRect().left, 300);
}

var animateLeft = function (element, position, duration) {
    let distanceToTravel = Math.abs(
        element.getBoundingClientRect().left - position
    );
    /// do not animate if element has to move to much, crates ugly effect behind carousel
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
}

var initializeKeyEvents = function () { // triggers for leftArrow < - > rightArrow
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 37) slideLeft();
        else if (event.keyCode == 39) slideRight();
    });
}

var getActiveSlideLeftBoundary = function (el) {
    return el.getBoundingClientRect().left;
}

var slideLeft = function () {
    if (data.availableForSwipe) disableSwipe();
    else return;

    data.slides[data.activeSlideIndex].classList.remove("active");
    let activeLeft = getActiveSlideLeftBoundary(data.slides[data.activeSlideIndex]);
    moveLeftSlidesToRight(
        data.slides.length,
        getNextIndex(data.activeSlideIndex, data.slides),
        data.slides
    );

    let nextActive = getPreviousIndex(data.activeSlideIndex, data.slides);
    changeActive(data.slides[nextActive]);

    animateLeft(data.slides[nextActive], activeLeft, 300);

    increaseActiveSlideIndex();
}

var slideRight = function () {
    if (data.availableForSwipe) disableSwipe();
    else return;
    data.slides[data.activeSlideIndex].classList.remove("active");
    let activeLeft = getActiveSlideLeftBoundary(
        data.slides[data.activeSlideIndex]
    );
    moveRightSlidesToLeft(
        data.slides.length,
        getNextIndex(data.activeSlideIndex, data.slides),
        data.slides
    );

    let nextActive = getNextIndex(data.activeSlideIndex, data.slides);
    changeActive(data.slides[nextActive]);

    animateLeft(data.slides[nextActive], activeLeft, 300);

    decreaseActiveSlideIndex();
}


var configureCarousel = function (config) {

    data.activeSlideIndex = config.activeSlideIndex;
    let slides = Array.prototype.slice.call(
        document.getElementsByClassName(config.slidesClassName)
    );
    data.slides = slides;
    resizeSlides(slides);

    positionActiveSlide(slides[config.activeSlideIndex]);

    positionLeftSlide(
        { arr: slides, index: config.activeSlideIndex },
        Math.floor(slides.length / 2)
    );
    positionRightSlide(
        { arr: slides, index: config.activeSlideIndex },
        Math.floor(slides.length / 2) - 1
    );
    initializeLeftController(config.leftController);
    initializeRightController(config.rightController);
    if (config.useArrows == true)
        initializeKeyEvents();
}
var initializeLeftController = function (leftControllerArr) {
    Array.prototype.forEach.call(leftControllerArr,
        (el) => {
            el.addEventListener('click', function () {
                slideLeft();
            });
        });
}

var initializeRightController = function (rightControllerArr) {
    Array.prototype.forEach.call(rightControllerArr,
        (el) => {
            el.addEventListener('click', function () {
                slideRight();
            });
        })
}

var changeActive = function (newActive) {
    $(newActive).addClass("active");
}

var resizeSlides = function (slides) {
    slides.map(el => {
        let height = el.offsetHeight;
        el.style.width = height * 0.71 + "px";
        el.style.top = height / 8 + "px";
    });
}

var positionActiveSlide = function (activeSlide) {
    activeSlide.classList.add("active");
    activeSlide.style.left = window.innerWidth / 2 - activeSlide.offsetWidth / 2 + "px";
}

var positionLeftSlide = function (wrap, shouldContinue) {
    let index = getPreviousIndex(wrap.index, wrap.arr);

    let leftTemplate = wrap.arr[index];
    let rightTemplate = wrap.arr[wrap.index];

    leftTemplate.style.left =
        rightTemplate.getBoundingClientRect().left -
        leftTemplate.offsetWidth -
        40 +
        "px";
    if (shouldContinue < 0) return;
    wrap.index = index;
    positionLeftSlide(wrap, shouldContinue - 1);
}

var positionRightSlide = function (wrap, shouldContinue) {
    let index = getNextIndex(wrap.index, wrap.arr);

    let rightTemplate = wrap.arr[index];
    let leftTemplate = wrap.arr[wrap.index];

    rightTemplate.style.left =
        leftTemplate.getBoundingClientRect().right + 40 + "px";

    if (shouldContinue == 0) return;
    wrap.index = index;
    positionRightSlide(wrap, shouldContinue - 1);
}

var getNextIndex = function (currIndex, slides) {
    return (currIndex + slides.length + 1) % slides.length;
}

var getPreviousIndex = function (currIndex, slides) {
    return (currIndex + slides.length - 1) % slides.length;
}

var disableSwipe = function () {
    data.availableForSwipe = false;
    setTimeout(() => {
        data.availableForSwipe = true;
    }, 700);
}

var increaseActiveSlideIndex = function () {
    data.activeSlideIndex += data.slides.length;
    data.activeSlideIndex--;
    data.activeSlideIndex %= data.slides.length;
}

var decreaseActiveSlideIndex = function () {
    data.activeSlideIndex += data.slides.length;
    data.activeSlideIndex++;
    data.activeSlideIndex %= data.slides.length;
}

export {
    configureCarousel,
    slideLeft,
    slideRight
};