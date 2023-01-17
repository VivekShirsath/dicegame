"use strict";

//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice Functionality
btnRoll.addEventListener("click",function(){
    //Generate random dice number
    const dice = Math.trunc(Math.random()*6)+1;

    //display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //check if roll 1
    if(dice!==1){
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
    else{
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 1 ? 0 : 1;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }

})