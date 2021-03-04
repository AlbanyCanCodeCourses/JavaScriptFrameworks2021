function Todo({ todos, showCompleted }) {
  return todos
    .filter((todo) => {
      return showCompleted ? todo.completed : true;
    })
    .map((todo, index) => {
      return (
        <ul key={`todo-${index}`}>
          <li>{todo.title}</li>
        </ul>
      );
    });
}

export default Todo;
