"use strict";

let score1 = document.getElementById("homeScore");
let score2 = document.getElementById("guestScore");

let totalHomeScore = 0;
let totalGuestScore = 0;

function plusHome1() {
  totalHomeScore += 1;
  score1.textContent = totalHomeScore;
}
function plusHome2() {
  totalHomeScore += 2;
  score1.textContent = totalHomeScore;
}
function plusHome3() {
  totalHomeScore += 3;
  score1.textContent = totalHomeScore;
}
function plusGuest1() {
  totalGuestScore += 1;
  score2.textContent = totalGuestScore;
}
function plusGuest2() {
  totalGuestScore += 2;
  score2.textContent = totalGuestScore;
}
function plusGuest3() {
  totalGuestScore += 3;
  score2.textContent = totalGuestScore;
}

function newGame() {
  let totalScore = totalGuestScore + totalHomeScore;
  totalScore = 0;
  score2.textContent = totalScore;
  score1.textContent = totalScore;
}
