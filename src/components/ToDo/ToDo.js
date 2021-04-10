import React from "react";
import "./ToDo.css";

function ToDo({title, isDone, deleteTodo, id, completedTodo}){
    return(

		        // defaultChecked={isDone}
        // checked value is true or false based on isDone
        // checked={}

        // inside onChange call completedTodo with id as arg
        // onChange={}
        <li className = "checked-todo li_style">
            <div className='buttons'>
			<input type='checkbox' checked = {isDone} onChange={() => completedTodo(id)}/>
		  	<p  id="p"  >
			{title}</p>
		    </div>
		    <div className="delete_Btn">
		    <button className="delete" onClick ={() => deleteTodo(id)}>delete</button>
		    </div>
        </li>
    );
}

export default ToDo;