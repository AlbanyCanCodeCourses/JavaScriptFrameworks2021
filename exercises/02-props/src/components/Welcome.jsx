const Welcome = props => {
  return (
    <h1>
      Hello, {props.name || "user"}
    </h1>
  )
}

export default Welcome;