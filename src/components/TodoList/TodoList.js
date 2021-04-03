import React from "react";
import ToDo from "../ToDo/ToDo";


// 1_ get isDone prop
// 2_ display 'checked' attribute in checkbox based on isDone true/false
// react way-> put your conditional in {isDone ? ....}
function TodoList({todos}){
    return (
        <ul>
            {todos.map((todo, index) => (
                 <ToDo key={index} title={todo.title} isDone ={todo.isDoneS} />
          ))}
            
        </ul>
    );
}

export default TodoList; 