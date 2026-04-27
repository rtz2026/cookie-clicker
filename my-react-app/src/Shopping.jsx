export default function Shopping({ score, setScore, inventory, setInventory }) {

  const upgrade1 = 0.1;
  const upgrade2 = 0.5;
  const upgrade3 = 1;
  const upgrade4 = 2;
  const upgrade5 = 4;

  // Now properly checks cost and updates the parent state
  function buyItem(rate, cost) {
    if (score >= cost) {
      // Add the upgrade as an object to match what App.jsx expects
      setInventory([...inventory, { autoPerSecond: rate }]);
      // Deduct the cost from the score
      setScore(score - cost);
    } else {
      console.log("Not enough points!");
    }
  }

  return (
    <div id="store">
      <table>
        <tbody>
          <tr><td id="Item1" onClick={() => buyItem(upgrade1, 100)}>Clicker Upgrade 1 (100 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item2" onClick={() => buyItem(upgrade2, 500)}>Clicker Upgrade 2 (500 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item3" onClick={() => buyItem(upgrade3, 1000)}>Clicker Upgrade 3 (1000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item4" onClick={() => buyItem(upgrade4, 2000)}>Clicker Upgrade 4 (2000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item5" onClick={() => buyItem(upgrade5, 4000)}>Clicker Upgrade 5 (4000 Points)<span>⬆️</span></td></tr>
        </tbody>
      </table>
    </div>
  )
}