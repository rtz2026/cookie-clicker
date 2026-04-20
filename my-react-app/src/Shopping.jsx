let inventory = [];

const upgrade1 = 0.1;
const upgrade2 = 0.5;
const upgrade3 = 1;
const upgrade4 = 2;
const upgrade5 = 4;

function buyItem(itemname, score) {
  if (score >= itemname * 1000) {
    inventory.push(itemname);
    score = score - itemname * 1000;
  }
  console.log(inventory);
  showScore();
}

function getInventory() {
  return inventory;
}

function addItem(score) {
  document.getElementById("Item1").addEventListener("click", () => {
    buyItem(upgrade1, score);
  });
  document.getElementById("Item2").addEventListener("click", () => {
    buyItem(upgrade2, score);
  });
  document.getElementById("Item3").addEventListener("click", () => {
    buyItem(upgrade3, score);
  });
  document.getElementById("Item4").addEventListener("click", () => {
    buyItem(upgrade4, score);
  });
  document.getElementById("Item5").addEventListener("click", () => {
    buyItem(upgrade5, score);
  });
}