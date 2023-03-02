"use strict";
window.addEventListener("load", ready);

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

function ready() {
  document.querySelector("#start-btn").addEventListener("click", start);
}

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
  startAnimations();

  /* EventListeners */
  addListeners();

  grumpyBird.addEventListener("animationiteration", birdRestart);
  fryingBird.addEventListener("animationiteration", birdRestart);
  pinkBird.addEventListener("animationiteration", birdRestart);
  punkBird.addEventListener("animationiteration", birdRestart);
  bluePlane.addEventListener("animationiteration", planeRestart);
  darkBluePlane.addEventListener("animationiteration", planeRestart);
}

function startAnimations() {
  grumpyBird.classList.add("flying1");
  fryingBird.classList.add("flying2");
  pinkBird.classList.add("flying3");
  punkBird.classList.add("flying4");
  bluePlane.classList.add("plane1");
  darkBluePlane.classList.add("plane2");
}

function addListeners() {
  grumpyBird.addEventListener("click", clickBird);
  fryingBird.addEventListener("click", clickBird);
  pinkBird.addEventListener("click", clickBird);
  punkBird.addEventListener("click", clickBird);
  bluePlane.addEventListener("click", planeClick);
  darkBluePlane.addEventListener("click", planeClick);
}

function end() {
  /* Remove eventlisteners */
  grumpyBird.removeEventListener("animationend", birdGone);
  fryingBird.removeEventListener("animationend", birdGone);
  pinkBird.removeEventListener("animationend", birdGone);
  punkBird.removeEventListener("animationend", birdGone);
  bluePlane.removeEventListener("animationend", planeGone);
  darkBluePlane.removeEventListener("animationend", planeGone);
  grumpyBird.removeEventListener("click", clickBird);
  fryingBird.removeEventListener("click", clickBird);
  pinkBird.removeEventListener("click", clickBird);
  punkBird.removeEventListener("click", clickBird);
  bluePlane.removeEventListener("click", planeClick);
  darkBluePlane.removeEventListener("click", planeClick);

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
  grumpyBird.classList.remove("flying1", "flying2", "flying3", "flying4");
  fryingBird.classList.remove("flying1", "flying2", "flying3", "flying4");
  pinkBird.classList.remove("flying1", "flying2", "flying3", "flying4");
  punkBird.classList.remove("flying1", "flying2", "flying3", "flying4");
  bluePlane.classList.remove("plane1", "plane2", "plane3", "plane4");
  darkBluePlane.classList.remove("plane1", "plane2", "plane3", "plane4");

  /* Remove hit animations if any */
  grumpyBird.classList.remove("hit");
  fryingSprite.classList.remove("hit");
  pinkSprite.classList.remove("hit");
  punkSprite.classList.remove("hit");
  blueSprite.classList.remove("hit");
  darkBlueSprite.classList.remove("hit");

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
  const bird = this;
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
  const bird = this;
  // Remove eventlistener
  grumpyBird.removeEventListener("animationend", birdGone);

  // Remove hit animation and paused
  bird.querySelector("img").classList.remove("hit");
  bird.classList.remove("paused");

  // Reflow sprite using offsetWidth
  birdRestart.call(this);

  // Add ability to click again
  bird.addEventListener("click", clickBird);
}

function birdRestart() {
  const bird = this;
  bird.classList.remove("flying1", "flying2", "flying3", "flying4");
  bird.offsetWidth;
  let fly = Math.floor(Math.random() * 4) + 1;
  bird.classList.add("flying" + fly);
}

/* Plane functions */

function planeClick() {
  const plane = this;
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
  const plane = this;
  // Remove eventlistener
  plane.removeEventListener("animationend", planeGone);

  // Remove hit animation and paused
  plane.querySelector("img").classList.remove("hit");
  plane.classList.remove("paused");

  // Reflow sprite using offsetWidth
  planeRestart.call(this);

  // Add ability to click again
  plane.addEventListener("click", planeClick);
}

function planeRestart() {
  const plane = this;
  plane.classList.remove("plane1", "plane2", "plane3", "plane4");
  plane.offsetWidth;
  let fly = Math.floor(Math.random() * 4) + 1;
  plane.classList.add("plane" + fly);
}

