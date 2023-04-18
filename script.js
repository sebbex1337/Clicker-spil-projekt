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
	document.querySelector("#start-btn").addEventListener("click", playSound);
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

/* Game logic */
function resetLives() {
	lives = 3;
	resetLivesDisplay();
}

function resetPoints() {
	points = 0;
	displayPoints();
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
	document.querySelector("#heart1").classList.remove("broken_heart");
	document.querySelector("#heart2").classList.remove("broken_heart");
	document.querySelector("#heart3").classList.remove("broken_heart");
	document.querySelector("#heart1").classList.remove("active_heart");
	document.querySelector("#heart2").classList.remove("active_heart");
	document.querySelector("#heart3").classList.remove("active_heart");

	/* Add active hearts back */
	document.querySelector("#heart1").classList.add("active_heart");
	document.querySelector("#heart2").classList.add("active_heart");
	document.querySelector("#heart3").classList.add("active_heart");
}

function startTimer() {
	document.querySelector("#time_sprite").classList.add("shrink");
	document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
	document.querySelector("#time_sprite").removeEventListener("animationend", timeIsUp);
	if (points >= 10) {
		levelComplete();
	} else {
		gameOver();
	}
}

function playSound() {
	document.querySelector("#backgroundSound").currentTime = 0;
	document.querySelector("#backgroundSound").volume = 0.1;
	document.querySelector("#backgroundSound").play();
}

function addListeners() {
	/* Clickable containers */
	grumpyBird.addEventListener("mousedown", clickBird);
	fryingBird.addEventListener("mousedown", clickBird);
	pinkBird.addEventListener("mousedown", clickBird);
	punkBird.addEventListener("mousedown", clickBird);
	bluePlane.addEventListener("mousedown", planeClick);
	darkBluePlane.addEventListener("mousedown", planeClick);
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
	grumpyBird.removeEventListener("mousedown", clickBird);
	fryingBird.removeEventListener("mousedown", clickBird);
	pinkBird.removeEventListener("mousedown", clickBird);
	punkBird.removeEventListener("mousedown", clickBird);
	bluePlane.removeEventListener("mousedown", planeClick);
	darkBluePlane.removeEventListener("mousedown", planeClick);

	/* Stop animations */
	grumpyBird.classList.add("paused");
	fryingBird.classList.add("paused");
	pinkBird.classList.add("paused");
	punkBird.classList.add("paused");
	bluePlane.classList.add("paused");
	darkBluePlane.classList.add("paused");

	document.querySelector("#backgroundSound").pause();
}

function startAnimations() {
	grumpyBird.classList.add("flying1");
	fryingBird.classList.add("flying2");
	pinkBird.classList.add("flying3");
	punkBird.classList.add("flying4");
	bluePlane.classList.add("plane1");
	darkBluePlane.classList.add("plane2");
	grumpyBird.classList.add("speed2");
	fryingBird.classList.add("speed2");
	pinkBird.classList.add("speed2");
	punkBird.classList.add("speed2");
	bluePlane.classList.add("speed2");
	darkBluePlane.classList.add("speed2");
}

function restartAnimations() {
	/* Remove all classes from containers and force reflow */
	grumpyBird.classList.remove("paused", "flying1", "flying2", "flying3", "flying4", "speed1", "speed2", "speed3", "speed4", "speed5");
	fryingBird.classList.remove("paused", "flying1", "flying2", "flying3", "flying4", "speed1", "speed2", "speed3", "speed4", "speed5");
	pinkBird.classList.remove("paused", "flying1", "flying2", "flying3", "flying4", "speed1", "speed2", "speed3", "speed4", "speed5");
	punkBird.classList.remove("paused", "flying1", "flying2", "flying3", "flying4", "speed1", "speed2", "speed3", "speed4", "speed5");
	bluePlane.classList.remove("paused", "plane1", "plane2", "plane3", "plane4", "speed1", "speed2", "speed3", "speed4", "speed5");
	darkBluePlane.classList.remove("paused", "plane1", "plane2", "plane3", "plane4", "speed1", "speed2", "speed3", "speed4", "speed5");
	grumpySprite.classList.remove("hit");
	fryingSprite.classList.remove("hit");
	pinkSprite.classList.remove("hit");
	punkSprite.classList.remove("hit");
	blueSprite.classList.remove("hit");
	darkBlueSprite.classList.remove("hit");
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

/* Functions for clickable sprites/containers */
/* Bird functions */

function clickBird() {
	const bird = this;
	// Remove eventlistener
	bird.removeEventListener("mousedown", clickBird);

	// Add pause and hit animations
	bird.classList.add("paused");
	bird.querySelector("img").classList.add("hit");

	// Eventlistener for animationend
	bird.addEventListener("animationend", birdGone);

	// Add point on click
	incrementPoints();
	document.querySelector("#birdSound").currentTime = 0;
	document.querySelector("#birdSound").play();
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
	bird.addEventListener("mousedown", clickBird);
}

function birdRestart() {
	const bird = this;
	bird.classList.remove("flying1", "flying2", "flying3", "flying4", "speed1", "speed2", "speed3", "speed4", "speed5");
	bird.offsetWidth;
	const fly = Math.floor(Math.random() * 4) + 1;
	bird.classList.add("flying" + fly);
	const speed = Math.floor(Math.random() * 5) + 1;
	bird.classList.add("speed" + speed);
}

/* Plane functions */

function planeClick() {
	const plane = this;
	// Remove eventlistener
	plane.removeEventListener("mousedown", planeClick);

	// Add pause and hit animations
	plane.classList.add("paused");
	plane.querySelector("img").classList.add("hit");

	// Eventlistener for animationend
	plane.addEventListener("animationend", planeGone);

	// Remove life when clicked
	decrementLives();
	decrementPoints();

	document.querySelector("#planeSound").currentTime = 0;
	document.querySelector("#planeSound").play();
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
	plane.addEventListener("mousedown", planeClick);
}

function planeRestart() {
	const plane = this;
	plane.classList.remove("plane1", "plane2", "plane3", "plane4", "speed1", "speed2", "speed3", "speed4", "speed5");
	plane.offsetWidth;
	let fly = Math.floor(Math.random() * 4) + 1;
	plane.classList.add("plane" + fly);
	const speed = Math.floor(Math.random() * 5) + 1;
	plane.classList.add("speed" + speed);
}
