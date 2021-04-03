import React from "react";

const TodoForm=(props)=> {
  const {todo,todoList,} = props
  const {setTodoList,setTodo} = props
  const handleTodoChange=(e)=> {
    setTodo(e.target.value);
  }

  const handleTodoAdd=()=> {
    const key =new Date().getTime()
    setTodoList([...todoList,{key:key,text:todo,state:false}])
    setTodo("");
  }

  const handleSubmitForm=(event)=> {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <input
            className="form-control"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleTodoAdd}>
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoForm