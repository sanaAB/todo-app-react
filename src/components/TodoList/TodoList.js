import React from "react";
import ToDo from "../ToDo/ToDo";


function TodoList({todos, deleteTodo, completedTodo, editTodo }){
    return (
        <ul>
            {todos.map((todo, index) => (
                 <ToDo 
                    key={index} 
                    title={todo.title} 
                    isDone = {todo.isDone}
                    id = {todo.id}
                    deleteTodo = {deleteTodo}
                    completedTodo = {completedTodo}
                    editTodo= {editTodo}
                />
          ))}
            
        </ul>
    );
}

export default TodoList; 