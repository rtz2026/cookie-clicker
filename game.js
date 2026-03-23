let score = 100;

let inventory = [];

const autoclicker1 = 0.1;
const autoclicker2 = 0.5;
const autoclicker3 = 1;
const autoclicker4 = 2;
const autoclicker5 = 4;

function autoIncrement() {
    let autoIncrement = 0;
    autoIncrement = getAutoIncrementAmount(autoIncrement);
    score = score+autoIncrement;
    showScore();
    console.log(score);
    }

function buyItem(itemname) {
  if (score >= itemname * 1000) {
    inventory.push(itemname);
    score = score - itemname * 1000;
  }
  console.log(inventory);
  showScore();
}

function showScore() {
  document.getElementById("score").innerHTML = `Score: ${score.toFixed(2)}`;
}

function getIncrementAmount() {
  return inventory.length != 0 ? 1 + Math.max(...inventory) : 1;
}

function getAutoIncrementAmount(autoIncrement) {
    for (let counter = 0; counter < inventory.length; counter++) {
        autoIncrement = autoIncrement+inventory[counter];
    }
    return autoIncrement;
}

function incrementScore() {
  const increment = getIncrementAmount();
  score += increment;
  console.log(score);
  showScore();
}
function addClicker() {
  document.getElementById("cookie").addEventListener("click", () => {
    incrementScore();
  });
}

function addItem() {
  document.getElementById("Item1").addEventListener("click", () => {
    buyItem(autoclicker1);
  });
  document.getElementById("Item2").addEventListener("click", () => {
    buyItem(autoclicker2);
  });
  document.getElementById("Item3").addEventListener("click", () => {
    buyItem(autoclicker3);
  });
  document.getElementById("Item4").addEventListener("click", () => {
    buyItem(autoclicker4);
  });
  document.getElementById("Item5").addEventListener("click", () => {
    buyItem(autoclicker5);
  });
}

function gameSetup() {
  showScore();
  addClicker();
  addItem();
  setInterval(() =>{autoIncrement()},1000);
}

gameSetup();
