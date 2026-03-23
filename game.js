let score = 0;

let inventory = [];

const autoclicker1 = 0.1;
const autoclicker2 = 0.5;
const autoclicker3 = 1;
const autoclicker4 = 2;
const autoclicker5 = 4;

function buyItem(itemname) {
    if (score>=itemname*1000) {
        inventory.push(itemname);
        score=score-itemname*1000;
    }
    console.log(inventory);
}

function addClicker(){
    document.getElementById("cookie").addEventListener("click", () => {incrementScore();});
}

function incrementScore(){
    //let score = getScore();
    document.getElementById("score").innerHTML = `Score: ${score}`;
    console.log(score);
    return score++;
}

function addItem(){
    document.getElementById("Item1").addEventListener("click", () => {buyItem(autoclicker1);});
    document.getElementById("Item2").addEventListener("click", () => {buyItem(autoclicker2);});
    document.getElementById("Item3").addEventListener("click", () => {buyItem(autoclicker3);});
    document.getElementById("Item4").addEventListener("click", () => {buyItem(autoclicker4);});
    document.getElementById("Item5").addEventListener("click", () => {buyItem(autoclicker5);});
}

function gameSetup(){
    addClicker();
    addItem();
}

gameSetup();