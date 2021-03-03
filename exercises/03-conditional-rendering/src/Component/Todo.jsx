import { render } from "@testing-library/react";
import React from "react";

function Todo(todos, showCompleted) { 
                
                   const listItems = todos.map((x) => {
                        {x.completed=true ?  <div className="page1"> <li>{x.title}</li></div> : <div className="page2"><li>{x.title}</li></div>}
                        }
                    )
                    return (<ul>{listItems}</ul>);
        };

export default Todo;
    

