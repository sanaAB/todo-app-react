import React from "react";
import "./ToDo.css";

function ToDo({title, isDone}){
    return(
        <li className = "checked-todo li_style">
            <div className='buttons'>
			<input type='checkbox' checked = {{isDone} ? "checked" : null}/>
		  	<p  id="p"  >
			{title}</p>
		    </div>
		    <div className="delete_Btn">
		    <button className="delete">delete</button>
		    </div>
        </li>
    );
}

export default ToDo;