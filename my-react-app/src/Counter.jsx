function Counter(props) {

    const score = props.score.toFixed(2);
    const renderScore = () => {
        score = props.score.toFixed(2);
    }

  return (
    <>
    <div>
      <h1 onChange={renderScore}>Score: {score}</h1>
    </div>
    </>
  )
}

export default Counter