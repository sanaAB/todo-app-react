import logo from './logo.svg';
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput";
import TodoList from "./components/TodoList/TodoList";
//import ToDo from "./components/ToDo/ToDo";


function App() {
  const placeholderTxt = "passed using props";
  const todos = [
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

  return (
    <div className="App">
        <h3 className="h_style">To Do List App</h3>
        <main>
        I'm the body
        <NewTodoInput placeholder = {placeholderTxt} />
        <TodoList todos={todos}/>
      </main>
      <footer >Some copyright info here</footer>

    </div>
  );
}

export default App;
