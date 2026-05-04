import { useCallback, useMemo, useState } from "react";
import './App.css'
import Counter from './Counter.jsx'
import Cookie from './Cookie.jsx'
import Pointer from './Pointer.jsx'
import AutoClicker from './AutoClicker.jsx'
import Shopping from './Shopping.jsx'

function App() {

<<<<<<< HEAD
  const [score, setScore] = useState(100000);
=======
  const [score, setScore] = useState(10000);
>>>>>>> 0b7e2233fb94baf90dca312cf5d86a00ab914d1e
  const [inventory, setInventory] = useState([]);
  const [manualInventory, setManualInventory] = useState([]);
  const [extraInventory, setExtraInventory] = useState([]);

  const handleAutoTick = useCallback((amount) => {
    setScore((prev) => prev + (amount*extraInventory.reduce((product, item) => product * item.extra, 1)));
  }, [extraInventory]);

  const autoPerSecond = useMemo(() => {
    return inventory.reduce((sum, item) => sum + (item.autoPerSecond*extraInventory.reduce((product, item) => product * item.extra, 1)), 0);
  }, [inventory, extraInventory]);

  function handleCookieClick() {
    const manualPerClick = manualInventory.reduce((sum, item) => sum + item.manualPerClick, 0);
    setScore(score + ((1 + manualPerClick)*extraInventory.reduce((product, item) => product * item.extra, 1)));
  }

  return (
    <>
      <Counter score={score} />
      <div id="cookie" onClick={() => handleCookieClick()}>
        <Cookie />
        <Pointer clickerCount={inventory.filter(item => item.autoPerSecond).length}/>
      </div>
      <div>
        <AutoClicker rate={autoPerSecond} onTick={handleAutoTick} />
      </div>
      <p>Auto/sec: {autoPerSecond.toFixed(2)}</p>

      <div>
        <Shopping 
          score={score} 
          setScore={setScore} 
          inventory={inventory} 
          manualInventory={manualInventory}
          extraInventory={extraInventory}
          setInventory={setInventory} 
          setManualInventory={setManualInventory}
          setExtraInventory={setExtraInventory}
        />
      </div>
    </>
  )
}

export default App