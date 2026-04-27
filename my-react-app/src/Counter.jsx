function Counter({ score }) {
  return (
    <div>
      <h1 className="counter">Score: {score.toFixed(2)}</h1>
    </div>
  )
}

export default Counter