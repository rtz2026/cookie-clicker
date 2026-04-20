import { useEffect } from "react";

export default function AutoClicker({ rate, onTick }) {
  useEffect(() => {
    if (!rate || rate <= 0) return;

    const intervalId = setInterval(() => {
      onTick(rate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [rate, onTick]);

  return null;
}