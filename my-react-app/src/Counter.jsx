function Counter(props) {

  return (
    <>
    <div>
      <h1>Score: {props.score.toFixed(2)}</h1>
    </div>
    </>
  )
}

export default Counter