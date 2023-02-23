"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  lives = 3;
  points = 0;
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

function end() {
  /* Remove eventlisteners */
  document.querySelector("#grumpy_container").removeEventListener("animationend", grumpyGone);
  document.querySelector("#fryingpanbird_container").removeEventListener("animationend", fryingpanGone);
  document.querySelector("#pinkbird_container").removeEventListener("animationend", pinkGone);
  document.querySelector("#punkbird_container").removeEventListener("animationend", punkGone);
  document.querySelector("#airplaneblue_container").removeEventListener("animationend", blueplaneGone);
  document.querySelector("#airplanedarkblue_container").removeEventListener("animationend", darkblueplaneGone);
  document.querySelector("#grumpy_container").removeEventListener("click", clickGrumpy);
  document.querySelector("#fryingpanbird_container").removeEventListener("click", fryingpanClick);
  document.querySelector("#pinkbird_container").removeEventListener("click", pinkClick);
  document.querySelector("#punkbird_container").removeEventListener("click", punkClick);
  document.querySelector("#airplaneblue_container").removeEventListener("click", blueplaneClick);
  document.querySelector("#airplanedarkblue_container").removeEventListener("click", darkblueplaneClick);
  /* Stop animations */
  document.querySelector("#grumpy_container").classList.add("paused");
  document.querySelector("#fryingpanbird_container").classList.add("paused");
  document.querySelector("#pinkbird_container").classList.add("paused");
  document.querySelector("#punkbird_container").classList.add("paused");
  document.querySelector("#airplaneblue_container").classList.add("paused");
  document.querySelector("#airplanedarkblue_container").classList.add("paused");
/*   document.querySelector("#grumpy_container").classList.remove("flying1");
  document.querySelector("#fryingpanbird_container").classList.remove("flying2");
  document.querySelector("#pinkbird_container").classList.remove("flying3");
  document.querySelector("#punkbird_container").classList.remove("flying4");
  document.querySelector("#airplaneblue_container").classList.remove("airplaneblue_fly");
  document.querySelector("#airplanedarkblue_container").classList.remove("airplanedarkblue_fly"); */
  

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
  decrementPoints();
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
  decrementPoints();
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

