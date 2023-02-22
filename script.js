"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  /* Start animations */
  document.querySelector("#grumpy_container").classList.add("flying1");
  document.querySelector("#fryingpanbird_container").classList.add("flying2");
  document.querySelector("#pinkbird_container").classList.add("flying3");
  document.querySelector("#punkbird_container").classList.add("flying4");
  document.querySelector("#airplaneblue_container").classList.add("airplaneblue_fly");
  document.querySelector("#airplanedarkblue_container").classList.add("airplanedarkblue_fly");

  /* EventListeners */
  document.querySelector("#grumpy_container").addEventListener("click", clickGrumpy);
  document.querySelector("#fryingpanbird_container").addEventListener("click", fryingpanClick);
  document.querySelector("#pinkbird_container").addEventListener("click", pinkClick);
  document.querySelector("#punkbird_container").addEventListener("click", punkClick);
  document.querySelector("#airplaneblue_container").addEventListener("click", blueplaneClick);
  document.querySelector("#airplanedarkblue_container").addEventListener("click", darkblueplaneClick);
}

/* Functions for incrementing and decrementing lives and points */

function incrementPoints() {
  points++;
  displayincrementPoints();
}

function displayincrementPoints() {
  document.querySelector("#scorePoints").textContent = points;
}

function decrementLives() {
  displaydecrementLives();
  lives--;
}

function displaydecrementLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

/* Functions for clickable sprites/containers */
/* Bird functions */

function clickGrumpy() {
  // Remove eventlistener
  document.querySelector("#grumpy_container").removeEventListener("click", clickGrumpy);
  // Add pause and hit animations
  document.querySelector("#grumpy_container").classList.add("paused");
  document.querySelector("#grumpy_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#grumpy_container").addEventListener("animationend", grumpyGone);
  // Add point on click
  incrementPoints();
}

function grumpyGone() {
  // Remove eventlistener
  document.querySelector("#grumpy_container").removeEventListener("animationend", grumpyGone);
  // Remove hit animation and paused
  document.querySelector("#grumpy_sprite").classList.remove("hit");
  document.querySelector("#grumpy_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#grumpy_container").classList.remove("flying1");
  document.querySelector("#grumpy_container").offsetWidth;
  document.querySelector("#grumpy_container").classList.add("flying1");
  // Add ability to click again
  document.querySelector("#grumpy_container").addEventListener("click", clickGrumpy);
}

function fryingpanClick() {
  // Remove eventlistener
  document.querySelector("#fryingpanbird_container").removeEventListener("click", fryingpanClick);
  // Add pause and hit animations 
  document.querySelector("#fryingpanbird_container").classList.add("paused");
  document.querySelector("#fryingpanbird_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#fryingpanbird_container").addEventListener("animationend", fryingpanGone);
  // Add point on clicked
  incrementPoints();
}

function fryingpanGone() {
  // Remove eventlistener
  document.querySelector("#fryingpanbird_container").removeEventListener("animationend", fryingpanGone);
  // Remove hit animation and paused
  document.querySelector("#fryingpanbird_sprite").classList.remove("hit");
  document.querySelector("#fryingpanbird_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#fryingpanbird_container").classList.remove("flying2");
  document.querySelector("#fryingpanbird_container").offsetWidth;
  document.querySelector("#fryingpanbird_container").classList.add("flying2");
  // Add ability to click again
  document.querySelector("#fryingpanbird_container").addEventListener("click", fryingpanClick);
}

function pinkClick() {
  // Remove eventlistener
  document.querySelector("#pinkbird_container").removeEventListener("click", pinkClick);
  // Add pause and hit animations 
  document.querySelector("#pinkbird_container").classList.add("paused");
  document.querySelector("#pinkbird_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#pinkbird_container").addEventListener("animationend", pinkGone);
  // Add point on clicked
  incrementPoints();
}

function pinkGone() {
  // Remove eventlistener
  document.querySelector("#pinkbird_container").removeEventListener("animationend", pinkGone);
  // Remove hit animation and paused
  document.querySelector("#pinkbird_sprite").classList.remove("hit");
  document.querySelector("#pinkbird_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#pinkbird_container").classList.remove("flying3");
  document.querySelector("#pinkbird_container").offsetWidth;
  document.querySelector("#pinkbird_container").classList.add("flying3");
  // Add ability to click again
  document.querySelector("#pinkbird_container").addEventListener("click", pinkClick);
}

function punkClick() {
  // Remove eventlistener
  document.querySelector("#punkbird_container").removeEventListener("click", punkClick);
  // Add pause and hit animations 
  document.querySelector("#punkbird_container").classList.add("paused");
  document.querySelector("#punkbird_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#punkbird_container").addEventListener("animationend", punkGone);
  // Add point on clicked
  incrementPoints();
}

function punkGone() {
  // Remove eventlistener
  document.querySelector("#punkbird_container").removeEventListener("animationend", punkGone);
  // Remove hit animation and paused
  document.querySelector("#punkbird_sprite").classList.remove("hit");
  document.querySelector("#punkbird_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#punkbird_container").classList.remove("flying4");
  document.querySelector("#punkbird_container").offsetWidth;
  document.querySelector("#punkbird_container").classList.add("flying4");
  // Add ability to click again
  document.querySelector("#punkbird_container").addEventListener("click", punkClick);
}

/* Plane functions */

function blueplaneClick() {
  // Remove eventlistener
  document.querySelector("#airplaneblue_container").removeEventListener("click", blueplaneClick);
  // Add pause and hit animations
  document.querySelector("#airplaneblue_container").classList.add("paused");
  document.querySelector("#airplaneblue_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#airplaneblue_container").addEventListener("animationend", blueplaneGone);
  // Remove life when clicked
  decrementLives();
}

function blueplaneGone() {
  // Remove eventlistener
  document.querySelector("#airplaneblue_container").removeEventListener("animationend", blueplaneGone);
  // Remove hit animation and paused
  document.querySelector("#airplaneblue_sprite").classList.remove("hit");
  document.querySelector("#airplaneblue_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#airplaneblue_container").classList.remove("airplaneblue_fly");
  document.querySelector("#airplaneblue_container").offsetWidth;
  document.querySelector("#airplaneblue_container").classList.add("airplaneblue_fly");
  // Add ability to click again
  document.querySelector("#airplaneblue_container").addEventListener("click", blueplaneClick);
}

function darkblueplaneClick() {
  // Remove eventlistener
  document.querySelector("#airplanedarkblue_container").removeEventListener("click", darkblueplaneClick);
  // Add pause and hit animations
  document.querySelector("#airplanedarkblue_container").classList.add("paused");
  document.querySelector("#airplanedarkblue_sprite").classList.add("hit");
  // Eventlistener for animationend
  document.querySelector("#airplanedarkblue_container").addEventListener("animationend", darkblueplaneGone);
  // Remove life when clicked
  decrementLives();
}

function darkblueplaneGone() {
  // Remove eventlistener
  document.querySelector("#airplanedarkblue_container").removeEventListener("animationend", darkblueplaneGone);
  // Remove hit animation and paused
  document.querySelector("#airplanedarkblue_sprite").classList.remove("hit");
  document.querySelector("#airplanedarkblue_container").classList.remove("paused");
  // Reflow sprite using offsetWidth
  document.querySelector("#airplanedarkblue_container").classList.remove("airplanedarkblue_fly");
  document.querySelector("#airplanedarkblue_container").offsetWidth;
  document.querySelector("#airplanedarkblue_container").classList.add("airplanedarkblue_fly");
  // Add ability to click again
  document.querySelector("#airplanedarkblue_container").addEventListener("click", darkblueplaneClick);
}










































// /* Get all containers */
// const grumpy_container = document.querySelector("#grumpy_container");
// const fryingpan_container = document.querySelector("#fryingpanbird_container");
// const pinkbird_container = document.querySelector("#pinkbird_container");
// const punkbird_container = document.querySelector("#punkbird_container");
// const airplaneblue_container = document.querySelector("#airplaneblue_container");
// const airplanedarkblue_container = document.querySelector("#airplanedarkblue_container");

// /* Get all sprites */
// const grumpy_sprite = document.querySelector("#grumpy_sprite");
// const fryingpan_sprite = document.querySelector("#fryingpanbird_sprite");
// const pinkbird_sprite = document.querySelector("#pinkbird_sprite");
// const punkbird_sprite = document.querySelector("#punkbird_sprite");
// const airplaneblue_sprite = document.querySelector("#airplaneblue_sprite");
// const airplanedarkblue_sprite = document.querySelector("#airplanedarkblue_sprite");

// function start() {
//   /* Start all animations */
//   grumpy_container.classList.add("flying1");
//   fryingpan_container.classList.add("flying2");
//   pinkbird_container.classList.add("flying3");
//   punkbird_container.classList.add("flying4");
//   airplaneblue_container.classList.add("airplaneblue_fly");
//   airplanedarkblue_container.classList.add("airplanedarkblue_fly");

//   /* Add eventlisteners to all animations */
//   grumpy_container.addEventListener("click", function () {
//     pauseAnimation(grumpy_container);
//     hitAnimation(grumpy_sprite);
//   });

//   airplaneblue_container.addEventListener("click", function () {
//     pauseAnimation(airplaneblue_container);
//     hitAnimation(airplaneblue_sprite);
//   });

//   punkbird_container.addEventListener("click", function () {
//     pauseAnimation(punkbird_container);
//     hitAnimation(punkbird_sprite);
//   });
// }

// function pauseAnimation(elem) {
//   elem.classList.add("paused");
// }

// function hitAnimation(elem) {
//     elem.classList.add("hit");
// }
