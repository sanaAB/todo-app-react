//import logo from './logo.svg';
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput";
import TodoList from "./components/TodoList/TodoList";
import React, {useState} from "react";
//import ToDo from "./components/ToDo/ToDo";


function App() {
  const placeholderTxt = "passed using props";

  
  const[stateTodos, setState] = useState(JSON.parse(localStorage.getItem("todos")) || []);

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

  function save(newState) {
    setState(() => {
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
    }


  return (
    <div className="App">
        <h3 className="h_style">To Do List App</h3>
        <main>
        <div className= "form__div">
          <button  id= "ClearAllBtn" onClick = {() => clearAllBtn()}>Clear all </button> 
          <NewTodoInput placeholder = {placeholderTxt}  addTodo= {addNewTodo}/>
        </div>
        <TodoList todos={stateTodos} deleteTodo= {handleDelete}  completedTodo= {handleCompleteTodo}/>
      </main>
      <footer>Some copyright info here</footer>

    </div>
  );
}

export default App;
