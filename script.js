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
  document.querySelector("#gameOverButton").addEventListener("click", showStartScreen);
  document.querySelector("#level_complete").addEventListener("click", showStartScreen);
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function start() {
  /* Remove start, gameOver and levelComplete */
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  restartAnimations();
  /* Reset lives and points */
  resetLives();
  resetPoints();
  startTimer();

  /* Start animations */
  startAnimations();

  /* EventListeners */
  addListeners();
}

function startAnimations() {
  grumpyBird.classList.add("flying1");
  fryingBird.classList.add("flying2");
  pinkBird.classList.add("flying3");
  punkBird.classList.add("flying4");
  bluePlane.classList.add("plane1");
  darkBluePlane.classList.add("plane2");
}

function resetLives() {
  lives = 3;
  resetLivesDisplay();
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function addListeners() {
  /* Clickable containers */
  grumpyBird.addEventListener("click", clickBird);
  fryingBird.addEventListener("click", clickBird);
  pinkBird.addEventListener("click", clickBird);
  punkBird.addEventListener("click", clickBird);
  bluePlane.addEventListener("click", planeClick);
  darkBluePlane.addEventListener("click", planeClick);
  /* Random position on animationend */
  grumpyBird.addEventListener("animationiteration", birdRestart);
  fryingBird.addEventListener("animationiteration", birdRestart);
  pinkBird.addEventListener("animationiteration", birdRestart);
  punkBird.addEventListener("animationiteration", birdRestart);
  bluePlane.addEventListener("animationiteration", planeRestart);
  darkBluePlane.addEventListener("animationiteration", planeRestart);
}

function stopGame() {
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
}


function restartAnimations() {
  /* Remove all classes from containers and force reflow */
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
  grumpyBird.offsetWidth;
  fryingBird.offsetWidth;
  pinkBird.offsetWidth;
  punkBird.offsetWidth;
  bluePlane.offsetWidth;
  darkBluePlane.offsetWidth;
  /* Reset timer animation */
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
}

function timerStop() {
  document.querySelector("#time_sprite").removeEventListener("animationend", timerStop);
  document.querySelector("#time_sprite").classList.remove("shrink");
  gameOver();
}

/* Game over and level complete functions */
function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
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

