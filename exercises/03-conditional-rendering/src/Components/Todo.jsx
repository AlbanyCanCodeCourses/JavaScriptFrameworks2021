const Todo = (props) => {
    return (
        props.showCompleted ? 
        props.todos.map((todo) => <p>{todo.title}</p>) :
        props.todos.filter(todo => todo.completed).map((todo) => <p>{todo.title}</p>)
        )
}

export default Todo;