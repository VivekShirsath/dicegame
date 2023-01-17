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

let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function(){
    currentScore = 0;
    activePlayer = 0;
    scores = [0,0];
    playing = true;
    score0El.textContent = 0;
   score1El.textContent = 0;
   currentScore0El.textContent = 0;
   currentScore1El.textContent = 0;
   diceEl.classList.add('hidden');
   player0El.classList.remove("player--winner");
   player1El.classList.remove("player--winner");
   player1El.classList.remove('player--active');
   player0El.classList.add("player--active");
}

init();

const switchPlayer  = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 1 ? 0 : 1;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

//Rolling Dice Functionality
btnRoll.addEventListener("click",function(){
    if(playing){
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
        switchPlayer();
    }
}
})

btnHold.addEventListener("click",function(){
    if(playing){
    //Add currentscore to score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //Check if score is 20 or higher
    if(scores[activePlayer] >= 20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        diceEl.classList.add("hidden");
    }
    //Switch Player
    else{
        switchPlayer();
    }
}
})

btnNew.addEventListener("click",init)