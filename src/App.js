//import logo from './logo.svg';
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput";
import TodoList from "./components/TodoList/TodoList";
import React, {useState} from "react";
//import ToDo from "./components/ToDo/ToDo";


function App() {
  const placeholderTxt = "passed using props";
  const todosData = [
    {
      id: "134713749319748913",
      title: "Do grocery",
      isDone: true
    },
    {
      id: "34954629579425425",
      title: "Enjoy your eastern with family",
      isDone: false
    },
    {
      id: "724095784927859",
      title: "Learn about props",
      isDone: true
    }
  ];
  const[stateTodos, setState] = useState(todosData);

  function handleDelete(todoId){
    setState(stateTodos.filter(({ id }) => id !== todoId));
  }

  function addNewTodo(newTodo){
    const newTodos = [newTodo, ...stateTodos];
    setState(newTodos);
  }

  function handleCompleteTodo(todoId) {
    const newTodos = stateTodos.map((todo) => {
      if (todo.id === todoId)
        {     
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setState(newTodos);
    console.log(stateTodos);
  }

  function clearAllBtn(){
    alert("Are you sure you want to clear all of your todos?");
    setState([]);
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
      <footer >Some copyright info here</footer>

    </div>
  );
}

export default App;
