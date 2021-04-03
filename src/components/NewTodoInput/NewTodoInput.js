import React from "react";
import "./NewTodoInput.css"



function NewTodoInput(props){
    return (
        <div> Hello, i'm the New todo Input
                <form id="todoForm" className="form__div">
				<input type="text" id="todoInput" required  placeholder= {props.placeholder} ></input>
				<div className= "button_style">
				<button type="submit">New todo</button>
				<button type="submit" id= "ClearAllBtn">Clear all </button>
				</div>
				</form>
          </div>
    )
    
}

export default NewTodoInput;