let slider = document.querySelector(".slider");
let sliderInner = document.querySelector(".slider__inner");
let sliderItem = document.querySelectorAll(".slider__item");
let prevBtn = document.querySelector(".slider__prev");
let nextBtn = document.querySelector(".slider__next");

let sliderWidth = sliderInner.clientWidth;
let sliderPos = 0;
let sliderMax = sliderWidth * (sliderItem.length - 1) * -1; 


let toggles = document.querySelectorAll(".toggle");
let toggle, slide;

prevBtn.onclick = prevSlider;
nextBtn.onclick = nextSlider;


function prevSlider() {
  if(sliderPos === 0) {
    sliderPos = sliderMax;
    sliderInner.style.left = `${sliderMax}px`
    toggleCheck();
    return;
  }
  sliderPos += sliderWidth;
  sliderInner.style.left = `${sliderPos}px`;
  toggleCheck();
}

function nextSlider() {
  if(sliderPos === sliderMax) {
    sliderPos = 0;
    sliderInner.style.left = `0px`;
    toggleCheck()
    return;
  }
  sliderPos -= sliderWidth;
  sliderInner.style.left = `${sliderPos}px`;
  toggleCheck();
}

let pressed = false;
let startX;
let x1, x2;

/* GRABBING */
slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - sliderInner.offsetLeft;
  x1 = e.offsetX;
  slider.style.cursor = "grabbing";
})

slider.addEventListener("mouseup", () => {
  pressed = false;
  slider.style.cursor = "grab";
  sliderInner.style.transition = "left 0.5s linear";
  if(x2 < x1 - 100) {
    nextSlider()
    return false;
  }else if(x2 > x1 - 100) {
    prevSlider()
    return false;
  }
})

slider.addEventListener("mousemove", (e) => {
  if(!pressed) return;
  e.preventDefault();
  sliderInner.style.transition = "none";
  x2 = e.offsetX;
  sliderInner.style.left = `${x2 - startX}px`;

})

slider.addEventListener("touchstart", (e) => {
  pressed = true;
  x1 = e.changedTouches[0].clientX;
  startX = x1 - sliderInner.offsetLeft;
  slider.style.cursor = "grabbing";
})

slider.addEventListener("touchend", () => {
  pressed = false;
  slider.style.cursor = "grab";
  sliderInner.style.transition = "left 0.5s linear";
  if(x2 < x1 - 100) {
    nextSlider()
    return false;
  }else if(x2 > x1 - 100) {
    prevSlider()
    return false;
  }
})

slider.addEventListener("touchmove", (e) => {
  if(!pressed) return;
  e.preventDefault();
  sliderInner.style.transition = "none";
  x2 = e.changedTouches[0].clientX;
  sliderInner.style.left = `${x2 - startX}px`;
})

/* TOGGLES */

toggles.forEach(item => {
  item.onclick = toggleClick;
})

function toggleClick() {
  togglesDeactivate();
  toggle = this;
  slide = toggle.getAttribute("data-slide");
  toggles[slide - 1].classList.add("active");
  sliderPos = -(slide - 1) * sliderWidth;
  sliderInner.style.left = sliderPos + "px";
}

function toggleCheck() {
  let num = Math.abs(sliderPos) / sliderWidth;
  togglesDeactivate()
  toggles[num].classList.add("active");
}

function togglesDeactivate() {
  toggles.forEach(item => {
    item.classList.remove("active");
  })
}