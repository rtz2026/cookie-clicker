import { useCallback, useMemo, useState } from "react";
import './App.css'
import AutoClicker from './AutoClicker.jsx'

function App() {

  const [score, setScore] = useState(100);
  const [inventory, setInventory] = useState([]);

  const handleAutoTick = useCallback((amount) => {
    setScore((prev) => prev + amount);
  }, []);

  const autoPerSecond = useMemo(() => {
    return inventory.reduce((sum, item) => sum + item.autoPerSecond, 0);
  }, [inventory]);

  return (
    <>
    <div>
      <AutoClicker rate={autoPerSecond} onTick={handleAutoTick} />
    </div>
    <div>
      <h1>Score: {score.toFixed(2)}</h1>
      <img src="/picture/cookie.png" alt="Cookie" />
    </div>
    <p>Auto/sec: {autoPerSecond.toFixed(2)}</p>
      
    </>
  )
}

export default App
