import * as clicker from "clicker.js";

let score = 0;

function addClicker(){
    document.getElementById("cookie").addEventListener(click, () => { score = clicker.incrementScore(score)})
}

function gameSetup(){
    addClicker();
}

gameSetup();