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
    return inventory.reduce((sum, item) => sum + item.autoPerSecond, 0);
  }, [inventory]);

  function handleCookieClick() {
    console.log(score);
    setScore(score => score+1);
  }

  return (
    <>
    <Counter score={score} />
    <Cookie onClick={handleCookieClick} />
    <div>
      <AutoClicker rate={autoPerSecond} onTick={handleAutoTick} />
    </div>
    <p>Auto/sec: {autoPerSecond.toFixed(2)}</p>

  <div>
    <Shopping score={score} />
  </div>
      
    </>
  )
}

export default App
