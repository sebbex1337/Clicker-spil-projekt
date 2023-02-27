"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

/* get all containers */
const grumpyBird = document.querySelector("#grumpy_container");
const fryingBird = document.querySelector("#fryingpanbird_container");
const pinkBird = document.querySelector("#pinkbird_container");
const punkBird = document.querySelector("#punkbird_container");
const bluePlane = document.querySelector("#airplaneblue_container");
const darkBluePlane = document.querySelector("#airplanedarkblue_container");

/* get all sprites */
const grumpySprite = document.querySelector("#grumpy_sprite");
const fryingSprite = document.querySelector("#fryingpanbird_sprite");
const pinkSprite = document.querySelector("#pinkbird_sprite");
const punkSprite = document.querySelector("#punkbird_sprite");
const blueSprite = document.querySelector("#airplaneblue_sprite");
const darkBlueSprite = document.querySelector("#airplanedarkblue_sprite");

function start() {
  /* Remove gameOver and levelComplete */
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  /* Reset lives and points */
  lives = 3;
  points = 0;
  displayPoints();
  resetLivesDisplay();

  /* Start animations */
  grumpyBird.classList.add("flying1");
  fryingBird.classList.add("flying2");
  pinkBird.classList.add("flying3");
  punkBird.classList.add("flying4");
  bluePlane.classList.add("plane1");
  darkBluePlane.classList.add("plane2");

  /* EventListeners */
  grumpyBird.addEventListener("click", clickBird);
  fryingBird.addEventListener("click", fryingpanClick);
  pinkBird.addEventListener("click", pinkClick);
  punkBird.addEventListener("click", punkClick);
  bluePlane.addEventListener("click", planeClick);
  darkBluePlane.addEventListener("click", darkblueplaneClick);
}

function end() {
  /* Remove eventlisteners */
  grumpyBird.removeEventListener("animationend", birdGone);
  fryingBird.removeEventListener("animationend", fryingpanGone);
  pinkBird.removeEventListener("animationend", pinkGone);
  punkBird.removeEventListener("animationend", punkGone);
  bluePlane.removeEventListener("animationend", planeGone);
  darkBluePlane.removeEventListener("animationend", darkblueplaneGone);
  grumpyBird.removeEventListener("click", clickBird);
  fryingBird.removeEventListener("click", fryingpanClick);
  pinkBird.removeEventListener("click", pinkClick);
  punkBird.removeEventListener("click", punkClick);
  bluePlane.removeEventListener("click", planeClick);
  darkBluePlane.removeEventListener("click", darkblueplaneClick);

  /* Stop animations */
  grumpyBird.classList.add("paused");
  fryingBird.classList.add("paused");
  pinkBird.classList.add("paused");
  punkBird.classList.add("paused");
  bluePlane.classList.add("paused");
  darkBluePlane.classList.add("paused");

  /* Eventlistener for replay button */
  document.querySelector("#gameOverButton").addEventListener("click", restart);
  document.querySelector("#levelCompleteButton").addEventListener("click", restart);
}

function restart() {
  /* Remove eventlisteners */
  document.querySelector("#gameOverButton").removeEventListener("click", restart);
  document.querySelector("#levelCompleteButton").removeEventListener("click", restart);

  /* Remove all classes from containers */
  grumpyBird.classList.remove("paused");
  fryingBird.classList.remove("paused");
  pinkBird.classList.remove("paused");
  punkBird.classList.remove("paused");
  bluePlane.classList.remove("paused");
  darkBluePlane.classList.remove("paused");
  grumpyBird.classList.remove("flying1");
  fryingBird.classList.remove("flying2");
  pinkBird.classList.remove("flying3");
  punkBird.classList.remove("flying4");
  bluePlane.classList.remove("plane1");
  darkBluePlane.classList.remove("plane2");

  /* Remove hit animations if any */
  grumpyBird.classList.remove("hit");
  fryingSprite.classList.remove("hit");
  pinkSprite.classList.remove("hit");
  punkSprite.classList.remove("hit");
  blueSprite.classList.remove("hit");
  darkBlueSprite.classList.remove("hit");

grumpyBird
  start();
}

/* Game over and level complete functions */
function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  end();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  end();
}

/* Functions for incrementing and decrementing lives and points */

function incrementPoints() {
  if (points + 1 >= 10) {
    levelComplete();
  }
  points++;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#scorePoints").textContent = points;
}

function decrementPoints() {
  points--;
  displayPoints();
}

function decrementLives() {
  if (lives <= 1) {
    gameOver();
  }
  displaydecrementLives();
  lives--;
}

function displaydecrementLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function resetLivesDisplay() {
  /* Remove all classes from hearts */
  document.querySelector("#heart1").classList.remove("broken_heart")
  document.querySelector("#heart2").classList.remove("broken_heart")
  document.querySelector("#heart3").classList.remove("broken_heart")
  document.querySelector("#heart1").classList.remove("active_heart")
  document.querySelector("#heart2").classList.remove("active_heart")
  document.querySelector("#heart3").classList.remove("active_heart")
  
  /* Add active hearts back */
  document.querySelector("#heart1").classList.add("active_heart")
  document.querySelector("#heart2").classList.add("active_heart")
  document.querySelector("#heart3").classList.add("active_heart")
}

/* Functions for clickable sprites/containers */
/* Bird functions */

function clickBird() {
  let bird = this;
  // Remove eventlistener
  bird.removeEventListener("click", clickBird);

  // Add pause and hit animations
  bird.classList.add("paused");
  bird.querySelector("img").classList.add("hit");

  // Eventlistener for animationend
  bird.addEventListener("animationend", birdGone);

  // Add point on click
  incrementPoints();
}

function birdGone() {
  let bird = this;
  // Remove eventlistener
  grumpyBird.removeEventListener("animationend", birdGone);

  // Remove hit animation and paused
  bird.querySelector("img").classList.remove("hit");
  bird.classList.remove("paused");

  // Reflow sprite using offsetWidth
  bird.classList.remove("flying1");
  bird.offsetWidth;
  bird.classList.add("flying1");

  // Add ability to click again
  bird.addEventListener("click", clickBird);
}

function fryingpanClick() {
  // Remove eventlistener
  fryingBird.removeEventListener("click", fryingpanClick);

  // Add pause and hit animations 
  fryingBird.classList.add("paused");
  fryingSprite.classList.add("hit");

  // Eventlistener for animationend
  fryingBird.addEventListener("animationend", fryingpanGone);

  // Add point on clicked
  incrementPoints();
}

function fryingpanGone() {
  // Remove eventlistener
  fryingBird.removeEventListener("animationend", fryingpanGone);

  // Remove hit animation and paused
  fryingSprite.classList.remove("hit");
  fryingBird.classList.remove("paused");

  // Reflow sprite using offsetWidth
  fryingBird.classList.remove("flying2");
  fryingBird.offsetWidth;
  fryingBird.classList.add("flying2");

  // Add ability to click again
  fryingBird.addEventListener("click", fryingpanClick);
}

function pinkClick() {
  // Remove eventlistener
  pinkBird.removeEventListener("click", pinkClick);

  // Add pause and hit animations 
  pinkBird.classList.add("paused");
  pinkSprite.classList.add("hit");

  // Eventlistener for animationend
  pinkBird.addEventListener("animationend", pinkGone);

  // Add point on clicked
  incrementPoints();
}

function pinkGone() {
  // Remove eventlistener
  pinkBird.removeEventListener("animationend", pinkGone);

  // Remove hit animation and paused
  pinkSprite.classList.remove("hit");
  pinkBird.classList.remove("paused");

  // Reflow sprite using offsetWidth
  pinkBird.classList.remove("flying3");
  pinkBird.offsetWidth;
  pinkBird.classList.add("flying3");

  // Add ability to click again
  pinkBird.addEventListener("click", pinkClick);
}

function punkClick() {
  // Remove eventlistener
  punkBird.removeEventListener("click", punkClick);

  // Add pause and hit animations 
  punkBird.classList.add("paused");
  punkSprite.classList.add("hit");

  // Eventlistener for animationend
  punkBird.addEventListener("animationend", punkGone);

  // Add point on clicked
  incrementPoints();
}

function punkGone() {
  // Remove eventlistener
  punkBird.removeEventListener("animationend", punkGone);

  // Remove hit animation and paused
  punkSprite.classList.remove("hit");
  punkBird.classList.remove("paused");

  // Reflow sprite using offsetWidth
  punkBird.classList.remove("flying4");
  punkBird.offsetWidth;
  punkBird.classList.add("flying4");

  // Add ability to click again
  punkBird.addEventListener("click", punkClick);
}

/* Plane functions */

function planeClick() {
  let plane = this;
  // Remove eventlistener
  plane.removeEventListener("click", planeClick);

  // Add pause and hit animations
  plane.classList.add("paused");
  plane.querySelector("img").classList.add("hit");

  // Eventlistener for animationend
  plane.addEventListener("animationend", planeGone);

  // Remove life when clicked
  decrementLives();
  decrementPoints();
}

function planeGone() {
  let plane = this;
  // Remove eventlistener
  plane.removeEventListener("animationend", planeGone);

  // Remove hit animation and paused
  plane.querySelector("img").classList.remove("hit");
  plane.classList.remove("paused");

  // Reflow sprite using offsetWidth
  plane.classList.remove("plane1");
  plane.offsetWidth;
  plane.classList.add("plane1");

  // Add ability to click again
  plane.addEventListener("click", planeClick);
}

function darkblueplaneClick() {
  // Remove eventlistener
  darkBluePlane.removeEventListener("click", darkblueplaneClick);

  // Add pause and hit animations
  darkBluePlane.classList.add("paused");
  darkBlueSprite.classList.add("hit");

  // Eventlistener for animationend
  darkBluePlane.addEventListener("animationend", darkblueplaneGone);

  // Remove life when clicked
  decrementLives();
  decrementPoints();
}

function darkblueplaneGone() {
  // Remove eventlistener
  darkBluePlane.removeEventListener("animationend", darkblueplaneGone);

  // Remove hit animation and paused
  darkBlueSprite.classList.remove("hit");
  darkBluePlane.classList.remove("paused");

  // Reflow sprite using offsetWidth
  darkBluePlane.classList.remove("plane2");
  darkBluePlane.offsetWidth;
  darkBluePlane.classList.add("plane2");

  // Add ability to click again
  darkBluePlane.addEventListener("click", darkblueplaneClick);
}

