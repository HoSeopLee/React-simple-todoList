import React from "react";
 const TodoList=(props) => {
  const {todoList} = props
  const {setTodoList} = props
  const handletodoRemove=(key)=>{
    setTodoList( todoList.filter(data=>{
      return data.key !== key
    }))
  }
  const handletodoEditButton=(key) =>{
    setTodoList( todoList.map(data=>{
      if(data.key === key){
        return {...data, state:!data.state}
      }else{
        return data
      }
    }))
  }
  const handleTodoAdd=(key,content)=> {
    setTodoList( todoList.map(data=>{
      if(data.key === key){
        return {...data, text:content}
      }else{
        return data
      }
    }))
  }
  const handleSubmitForm=(event,key)=> {
    if (event.keyCode === 13) handletodoEditButton(key);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {todoList.length}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todoList.map((element,key) => (
                <li key={key} className="list-group-item">
                  
                  {!element.state? element.text:
                    <input
                    className="form-control"
                    value={element.text}
                    autoFocus={true}
                    placeholder="Enter new todo"
                    onKeyUp={(e)=>handleSubmitForm(e,element.key)}
                    onChange={(e)=>handleTodoAdd(element.key,e.target.value)}
                  />
                  }
                  <button
                    className="float-right btn  btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => {handletodoEditButton(element.key)}}
                  >
                    수정
                  </button>
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => {handletodoRemove(element.key)}}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoList