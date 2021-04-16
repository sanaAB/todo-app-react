import "./NewTodoInput.css"
import React, {useState} from "react";

function NewTodoInput({addTodo}){
	const[inputValue, setInputValue] = useState( " ");

	function handleOnKeyDown({ keyCode}){
		if(keyCode === 13){
			saveTodo();
		}
	}//end of handleOnKeyDown

	function handleInputValue({target}){
		setInputValue(target.value);
	}

	function saveTodo(){

		if(inputValue.length < 2){alert("Cannot add an empty task, please provide a valid input")}
		else
{		const newTodo = {
					id: (Date.now() + Math.random()).toString(),
					title: inputValue,
					isDone: false
				  };
				  addTodo(newTodo);
				  setInputValue(" ");}

	}//end of saveTodo

    return (
        <div id="todoForm">
				<input 
				type="text" 
				id="todoInput" 
				value= {inputValue}
				required
				onKeyDown={handleOnKeyDown}
				onChange= {handleInputValue}
				></input>

				<button onClick={saveTodo} className= "button_style">  New todo</button>
          </div>
    )
    
}

export default NewTodoInput;










	// function addNewTodo({ keyCode, target }) {
	// 	if (keyCode === 13) {
	// 	  const newTodo = {
	// 		id: (Date.now() + Math.random()).toString(),
	// 		title: target.value,
	// 		isDone: false
	// 	  };
	// 	  addTodo(newTodo);
	// 	  target.value = "";
	// 	}
	// }	