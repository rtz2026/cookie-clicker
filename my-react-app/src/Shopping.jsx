let inventory = [];

const upgrade1 = 0.1;
const upgrade2 = 0.5;
const upgrade3 = 1;
const upgrade4 = 2;
const upgrade5 = 4;

export default function buyItem(itemname, score) {
  if (score >= itemname * 1000) {
    inventory.push(itemname);
    score = score - itemname * 1000;
  }
  console.log(inventory);
  showScore();
}

export default function addItem(score) {
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

addItem(score);

<div id="store">
  <table>
    <tr><td id="Item1">Clicker Upgrade 1 (100 Points)<span class="arrow1">⬆️</span></td></tr>
    <tr><td id="Item2">Clicker Upgrade 2 (500 Points)<span class="arrow2">⬆️</span></td></tr>
    <tr><td id="Item3">Clicker Upgrade 3 (1000 Points)<span class="arrow3">⬆️</span></td></tr>
    <tr><td id="Item4">Clicker Upgrade 4 (2000 Points)<span class="arrow4">⬆️</span></td></tr>
    <tr><td id="Item5">Clicker Upgrade 5 (4000 Points)<span class="arrow5">⬆️</span></td></tr>
  </table>
</div>