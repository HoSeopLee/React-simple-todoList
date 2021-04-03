import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const  App=()=> {
  const [todo, setTodo] = useState("");
  const [todoList,setTodoList] = useState([
                                            {key:1,text:'투두리스트',state:false}
                                          ])
  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo} todoList={todoList}setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
