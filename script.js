"use strict";

//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;

//Rolling Dice Functionality
btnRoll.addEventListener("click",function(){
    //Generate random dice number
    const dice = Math.trunc(Math.random()*6)+1;

    //display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //check if roll 1
    if(dice!==1){

    }
    else{

    }

})