import React, {useState} from "react";



export default function EditInput({title, id, handleIsEdit, editTodo}){
    const [inputValue, setInputValue] = useState(title);

    function handleSaveBtn(){
        handleIsEdit(false);
        editTodo(id, inputValue);
    }
    function handleInputValue({target}){
        setInputValue(target.value);
    }
    return(
        <div>
            <input  onChange = {handleInputValue} value = {inputValue}/>
            <button onClick={handleSaveBtn}>Submit changes</button>
        </div>

    );
}