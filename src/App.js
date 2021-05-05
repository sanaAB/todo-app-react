//import logo from './logo.svg';
import React, {useRef, useState} from "react";
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput";
import TodoList from "./components/TodoList/TodoList";
//import ToDo from "./components/ToDo/ToDo";


function App() {
  const placeholderTxt = "passed using props";

  
  const[stateTodos, setState] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  //const prevState = useRef();


  function handleDelete(todoId){
    save(stateTodos.filter(({ id }) => id !== todoId));
  }

  function addNewTodo(newTodo){
    const newTodos = [newTodo, ...stateTodos];
    save(newTodos);
  }

  function handleCompleteTodo(todoId) {
    const newTodos = stateTodos.map((todo) => {
      if (todo.id === todoId)
        {     
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    save(newTodos);
  }

  function clearAllBtn(){
    alert("Are you sure you want to clear all of your todos?");
    save([]);
  }
  
  function doneTasks()
	{	
    const prevState = stateTodos;
    //setState((stateTodos.filter((todo) => todo.isDone)));
    save(stateTodos.filter((todo) => todo.isDone));
    console.log(prevState);
    //save(prevState);
	}

  function save(newState) {
    setState(() => {
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
    }

    function handleEdit(editedId, editedTitle){
      const newTodos = stateTodos.map((todo) =>
      {
        if(todo.id === editedId){
          todo.title = editedTitle;
        }
        return todo;
      }
      
      );
      setState(newTodos);
    }

  return (
    <div className="App">
        <h3 className="h_style">To Do List App</h3>
        <main>
        <div className= "form__div">
          <button  id= "ClearAllBtn" onClick = {() => clearAllBtn()}>Clear all </button> 
          <button  id= "ClearAllBtn" onClick = {() => doneTasks()}>Done tasks </button> 
          <NewTodoInput placeholder = {placeholderTxt}  addTodo= {addNewTodo}/>
        </div>
        <TodoList todos={stateTodos} deleteTodo= {handleDelete} 
         completedTodo= {handleCompleteTodo}
         editTodo={handleEdit}/>
      </main>
      <footer>copyright @2021</footer>

    </div>
  );
}

export default App;
