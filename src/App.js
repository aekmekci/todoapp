import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import "./style.css";

function App() {
  
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  }
  
  return( <div className="container">
  <Form setTodos={setTodos} todos={todos} />
  <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
  )
}

export default App;
