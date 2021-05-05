import React, {useState} from "react"  ;
import EditInput from "../EditInput/EditInput";
import "./ToDo.css";

function ToDo({title, isDone, deleteTodo, id, completedTodo, editTodo}){
    const [isEdit, setIsEdit] = useState(false);

    function newEditState(editedState){
        setIsEdit(editedState);
    }
    return (
    <div>
        {isEdit ? (
        <EditInput  title={title}
                     id={id}
                     handleIsEdit = {newEditState}
                     editTodo= {editTodo}
                     id= {id} />
      ) : 
   
      (
             <li className = {`li_style ${isDone ? "checked-todo" : "li_style"}`}>
            <div className='buttons'>
			<input type='checkbox' checked = {isDone} onChange={() => completedTodo(id)}/>
		  	<p  id="p">{title}</p>
		    </div>
		    <div className="delete_Btn">
                <button onClick ={() => deleteTodo(id)}>Delete</button>
                <button onClick= {(e) => newEditState(true)} >Edit</button>
		    </div>
        </li>
    )}
    </div>
    );
}

export default ToDo;