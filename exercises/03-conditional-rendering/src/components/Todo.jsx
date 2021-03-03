const Todo = ({ todos, showCompleted }) => {
  // Take one todo and return an element
  const showTodo = todo => <h4 key={todo.id}>{todo.title}</h4>
  // Take an array of todos and return array of elements
  const showTodos = myTodos => myTodos.map(todo => showTodo(todo))

  return (
    <div>

      {showCompleted ? showTodos(todos)
        : showTodos(todos.filter(todo => !todo.completed))}

    </div>
  );
}


export default Todo;