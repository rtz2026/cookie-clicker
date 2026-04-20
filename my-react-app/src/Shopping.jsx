export default function Shopping({ score }) {

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

    return (
        
<div id="store">
  <table>
    <tr><td id="Item1" onclick="buyItem(upgrade1, score)">Clicker Upgrade 1 (100 Points)<span class="arrow1">⬆️</span></td></tr>
    <tr><td id="Item2" onclick="buyItem(upgrade2, score)">Clicker Upgrade 2 (500 Points)<span class="arrow2">⬆️</span></td></tr>
    <tr><td id="Item3" onclick="buyItem(upgrade3, score)">Clicker Upgrade 3 (1000 Points)<span class="arrow3">⬆️</span></td></tr>
    <tr><td id="Item4" onclick="buyItem(upgrade4, score)">Clicker Upgrade 4 (2000 Points)<span class="arrow4">⬆️</span></td></tr>
    <tr><td id="Item5" onclick="buyItem(upgrade5, score)">Clicker Upgrade 5 (4000 Points)<span class="arrow5">⬆️</span></td></tr>
  </table>
</div>
    )
}