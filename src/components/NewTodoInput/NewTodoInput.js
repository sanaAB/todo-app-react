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
		const newTodo = {
					id: (Date.now() + Math.random()).toString(),
					title: inputValue,
					isDone: false
				  };
				  addTodo(newTodo);
				  setInputValue(" ");

	}//end of saveTodo

    return (
        <div id="todoForm" className="form__div">
				<input 
				type="text" 
				id="todoInput" 
				value= {inputValue}
				required
				onKeyDown={handleOnKeyDown}
				onChange= {handleInputValue}
				></input>

				<div className= "button_style">
				<button 
				        onClick={saveTodo}
						>New todo</button>
				</div>
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