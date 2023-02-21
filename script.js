window.addEventListener("load", start);

/* Get all containers */
const grumpy_container = document.querySelector("#grumpy_container");
const fryingpan_container = document.querySelector("#fryingpanbird_container");
const pinkbird_container = document.querySelector("#pinkbird_container");
const punkbird_container = document.querySelector("#punkbird_container");
const airplaneblue_container = document.querySelector("#airplaneblue_container");
const airplanedarkblue_container = document.querySelector("#airplanedarkblue_container");

/* Get all sprites */
const grumpy_sprite = document.querySelector("#grumpy_sprite");
const fryingpan_sprite = document.querySelector("#fryingpanbird_sprite");
const pinkbird_sprite = document.querySelector("#pinkbird_sprite");
const punkbird_sprite = document.querySelector("#punkbird_sprite");
const airplaneblue_sprite = document.querySelector("#airplaneblue_sprite");
const airplanedarkblue_sprite = document.querySelector("#airplanedarkblue_sprite");

function start() {
  /* Start all animations */
  grumpy_container.classList.add("flying1");
  fryingpan_container.classList.add("flying2");
  pinkbird_container.classList.add("flying3");
  punkbird_container.classList.add("flying4");
  airplaneblue_container.classList.add("airplaneblue_fly");
  airplanedarkblue_container.classList.add("airplanedarkblue_fly");

  /* Add eventlisteners to all animations */
  grumpy_container.addEventListener("click", function () {
    pauseAnimation(grumpy_container);
    hitAnimation(grumpy_sprite);
  });

  airplaneblue_container.addEventListener("click", function () {
    pauseAnimation(airplaneblue_container);
    hitAnimation(airplaneblue_sprite);
  });

  punkbird_container.addEventListener("click", function () {
    pauseAnimation(punkbird_container);
    hitAnimation(punkbird_sprite);
  });
}

function pauseAnimation(elem) {
  elem.classList.add("paused");
}

function hitAnimation(elem) {
    elem.classList.add("hit");
}
