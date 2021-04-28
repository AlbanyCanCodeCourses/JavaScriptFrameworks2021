function App(props) {
  console.log("props", props)
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo();
  };
  return (
    <div className="container">
      {/* Counter */}
      <section className="mt-5">
        <span className="h3 mr-5">Count {props.count}</span>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={props.increaseCount}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.decreaseCount}
        >
          Decrease
        </button>
      </section>
      {/* Toggler */}
      <section className="mt-5">
        <button
          type="button"
          className="btn btn-primary mr-4"
          onClick={props.toggle}
        >
          Toggle Text
        </button>
        {props.isVisible && <p>Now you see me</p>}
      </section>
      {/* Pick Color */}
      <section className="mt-5">
        <span className="h3 mr-3">Pick a Color:</span>
        <button
          type="button"
          className="btn btn-primary btn-danger mr-1"
          onClick={() => props.pickColor("red")}
        >
          {props.color && props.color === "red" ? "✓ " : null}
          Red
        </button>
        <button
          type="button"
          className="btn btn-primary btn-warning mr-1"
          onClick={() => props.pickColor("yellow")}
        >
          {props.color && props.color === "yellow" ? "✓ " : null}
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-primary btn-success"
          onClick={() => props.pickColor("green")}
        >
          {props.color && props.color === "green" ? "✓ " : null}
          Green
        </button>
      </section>
      {/* TODO List */}
      <section className="mt-5">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Todo"
              className="form-control"
              value={props.todoInput || ""}
              onChange={(e) => props.setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">
              Add Todo
            </button>
          </div>
        </form>
        <ul className="list-group mt-2">
          {props.todos.map((todo, idx) => {
            return <li className="list-group-item" key={idx}>{todo}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
