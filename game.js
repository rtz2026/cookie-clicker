let score = 0;

function addClicker(){
    document.getElementById("cookie").addEventListener("click", () => {incrementScore();});
}

function incrementScore(){
    //let score = getScore();
    console.log(score);
    return score++;
}


function addItem(){
    document.getElementById("Item1").addEventListener("click", () => {shopping.buyItem(autoclicker1)})
    document.getElementById("Item2").addEventListener("click", () => {shopping.buyItem(autoclicker2)})
    document.getElementById("Item3").addEventListener("click", () => {shopping.buyItem(autoclicker3)})
    document.getElementById("Item4").addEventListener("click", () => {shopping.buyItem(autoclicker4)})
    document.getElementById("Item5").addEventListener("click", () => {shopping.buyItem(autoclicker5)})
}

function gameSetup(){
    addClicker();
    addItem();
}

gameSetup();