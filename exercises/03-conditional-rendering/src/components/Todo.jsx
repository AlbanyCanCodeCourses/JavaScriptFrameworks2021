const Todo = ({ todos, showCompleted }) => {
  // Take an array of todos and return array of elements
  const showTodos = myTodos => myTodos.map(todo => <li key={todo.id}>{todo.title}</li>)

  return (
    <ul>
      {showCompleted ? showTodos(todos)
        : showTodos(todos.filter(todo => !todo.completed))}
    </ul>
  );
}


export default Todo;