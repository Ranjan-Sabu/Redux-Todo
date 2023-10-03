
import { useSelector, useDispatch } from "react-redux";
import { addtodo,deletetodo,edittodo,savetodo } from "../Components/Todos";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateTodo() {
    const myRef=useRef()
    const todo = useSelector((state) => state.list.todos);
    console.log(todo);
    const dispatch = useDispatch();
    const add = (e) => {
      e.preventDefault();
      const value = e.target.todo.value;
      dispatch(addtodo(value));
      e.target.reset()
    };
  const save = (id)=>{
    const savevalue = myRef.current.value
    dispatch(savetodo({id:id,value:savevalue}))
  }
  
 return (
  <div class=" container rounded-3 border border-2 border-dark my-5 " style={{height:"auto;",backgroundColor:"#124c81"}}>
       <h1 style={{textAlign:'center',color:'#d6542c'}}>TODO APP</h1>
      <form class="row" onSubmit={add}>
      <div class=" col-8" >
        <input class=" py-3 form-control shadow"  style={{backgroundColor:"#f3e4b9"}} placeholder="add task" id="todo" type="text"  required/>
        </div>
        <div class="col-2">
        <button class=" mt-2 btn " type="submit" style={{backgroundColor:"#99a8bb"}}>ADD</button>
        </div>
      </form>
       <hr/>
<div class="row rounded "style={{backgroundColor:"#124c81"}}>
  <div class="col-">
    <ul class="list-group ">
      {todo.map((todos, index) => (
        <li class="list-group-item d-flex justify-content-between align-items-center "style={{backgroundColor:"#845cfc"}}>
          {(todos.editkey === true) ? (
            <>
              <input value={todos.value}  style={{backgroundColor:"#f3e4b9",width:"180px",height:"40px",borderRadius:"10px",border:'1px solid white',}}/>
              <div>
                <button class="btn btn-danger" onClick={() => dispatch(deletetodo(todos.id))}>Delete</button>&nbsp;&nbsp;
                <button class="btn btn-primary" onClick={() => dispatch(edittodo(todos.id))}>Edit</button>
              </div>
            </>
          ) : (
            <>
              <input type="text" ref={myRef} autoFocus/>
              <button type="button" class="btn btn-success"   onClick={() => save(todos.id)}>Save</button>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>
 </div>

    )
  }

  
  export default CreateTodo
 