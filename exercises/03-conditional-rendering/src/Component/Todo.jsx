import React from "react";

function Todo(props) { 
    return <ul>          
    {props.todos.filter((todo) => {
        return props.showCompleted ? todo.completed : true; })   
        // if ((props.showCompleted && todo.completed)) || 
        // !props.showCompleted) {        
        // .map((todo, idx) => {}      
        // return <li key={`todo-item-${idx}`}>{todo.title}</li>;
    }
 </ul>
}
export default Todo;
    

