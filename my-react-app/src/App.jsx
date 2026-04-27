import { useCallback, useMemo, useState } from "react";
import './App.css'
import Counter from './Counter.jsx'
import Cookie from './Cookie.jsx'
import AutoClicker from './AutoClicker.jsx'
import Shopping from './Shopping.jsx'

function App() {

  const [score, setScore] = useState(100);
  const [inventory, setInventory] = useState([]);

  const handleAutoTick = useCallback((amount) => {
    setScore((prev) => prev + amount);
  }, []);

  const autoPerSecond = useMemo(() => {
    // This expects objects like { autoPerSecond: 0.1 } in the inventory
    return inventory.reduce((sum, item) => sum + item.autoPerSecond, 0);
  }, [inventory]);

  function handleCookieClick() {
    setScore(score => score + 1);
  }

  return (
    <>
      <Counter score={score} />
      <div onClick={() => handleCookieClick()}><Cookie /></div>
      <div>
        <AutoClicker rate={autoPerSecond} onTick={handleAutoTick} />
      </div>
      <p>Auto/sec: {autoPerSecond.toFixed(2)}</p>

      <div>
        {/* Pass state update functions as props to Shopping */}
        <Shopping 
          score={score} 
          setScore={setScore} 
          inventory={inventory} 
          setInventory={setInventory} 
        />
      </div>
    </>
  )
}

export default App