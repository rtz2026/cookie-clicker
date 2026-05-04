export default function Shopping({ score, setScore, inventory, setInventory, manualInventory, setManualInventory, extraInventory, setExtraInventory }) {
//Auto upgrades
  const grandma = 0.1;
  const oven = 0.5;
  const farm = 1;
  const factory = 2;
  const bank = 4;
//Manual upgrades
  const grandpa = 1;
  const microwave = 3;
  const garden = 5;
  const storage = 10;
  const safe = 25;

//Extra items
  const hyperGrandma = 2;
  const superOven = 5;
  const megaFarm = 10;
  const ultraFactory = 25;
  const gigaBank = 50;

  function buyItem(rate, cost) {
    if (score >= cost) {
      setInventory([...inventory, { autoPerSecond: rate }]);
      setScore(score - cost);
    } else {
      console.log("Not enough points!");
    }
  }

  function buyManual(rate, cost) {
    if (score >= cost) {
      setManualInventory([...manualInventory, { manualPerClick: rate }]);
      setScore(score - cost);
    } else {
      console.log("Not enough points!");
    }
  }

  function buyExtra(rate, cost) {
    if (score >= cost) {
      setExtraInventory([...extraInventory, { extra: rate }]);
      setScore(score - cost);
    } else {
      console.log("Not enough points!");
    }
  }

  return (
    <div>
    <div id="storeAuto">
      <table>
        <tbody>
          <tr><td id="Item1" onClick={() => buyItem(grandma, 100)}>Grandma (100 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item2" onClick={() => buyItem(oven, 500)}>Oven (500 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item3" onClick={() => buyItem(farm, 1000)}>Farm (1000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item4" onClick={() => buyItem(factory, 2000)}>Factory (2000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item5" onClick={() => buyItem(bank, 4000)}>Bank (4000 Points)<span>⬆️</span></td></tr>
        </tbody>
      </table>
    </div>
    <div id="storeManual">
      <table>
        <tbody>
          <tr><td id="Item6" onClick={() => buyManual(grandpa, 100)}>Grandpa (100 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item7" onClick={() => buyManual(microwave, 300)}>Microwave (300 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item8" onClick={() => buyManual(garden, 500)}>Garden (500 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item9" onClick={() => buyManual(storage, 1000)}>Storage (1000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item10" onClick={() => buyManual(safe, 2500)}>Safe (2500 Points)<span>⬆️</span></td></tr>
        </tbody>
      </table>
    </div>
    <div id="storeExtra">
      <table>
        <tbody>
          <tr><td id="Item11" onClick={() => buyExtra(hyperGrandma, 10000)}>Hyper Grandma (10000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item12" onClick={() => buyExtra(superOven, 30000)}>Super Oven (30000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item13" onClick={() => buyExtra(megaFarm, 50000)}>Mega Farm (50000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item14" onClick={() => buyExtra(ultraFactory, 100000)}>Ultra Factory (100000 Points)<span>⬆️</span></td></tr>
          <tr><td id="Item15" onClick={() => buyExtra(gigaBank, 250000)}>Giga Bank (250000 Points)<span>⬆️</span></td></tr>
        </tbody>
      </table>
    </div>
    </div>
    )
}