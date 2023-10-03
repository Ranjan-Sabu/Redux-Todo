// import { ADD_TODO } from "./action";


// const initialState=[
//     {id: 1, text: 'Buy Laptop', completed: false},
//     {id: 2, text: 'Master Redux', completed: false},
//     {id: 3, text: 'Watering Plants', completed: true},
// ];
// export const Reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ADD_TODO:
//             return [...state, action.payload];
//         // case DELETE_ALL:
//         //     return [];
//         default: return state;
//     }

// }


// import { useSelector, useDispatch } from "react-redux";
// import { addtodo,deletetodo,edittodo,savetodo } from "../Components/Todos";
// import { useRef } from "react";

// function CreateTodo() {
//     const myRef=useRef()
//     const todo = useSelector((state) => state.list.todos);
//     console.log(todo);
//     const dispatch = useDispatch();
//     const add = (e) => {
//       e.preventDefault();
//       const value = e.target.todo.value;
//       dispatch(addtodo(value));
//       e.target.reset()
//     };
//   const save = (id)=>{
//     const savevalue = myRef.current.value
//     dispatch(savetodo({id:id,value:savevalue}))
//   }
  
//  return (
//     <div class=" container rounded-3 border border-2 border-dark my-5 bg-white" style={{height:"auto;"}}>
//         <div>
//         <h1 class=" h1">To Do List</h1> 
//     <form class="row" onSubmit={add}>
//             <div class=" col-8" >
//         <input class=" py-3 form-control shadow" placeholder="input your task" type="text" id="inputText" />
//             </div>
//             <div class="col-2">
//                 {/* <!-- <i onclick="addList()" class=" btn btn-dark rounded-pill fas fa-4x fa-plus-circle "></i> --> */}
//                 <button  class=" mt-2 btn btn-dark" > Add </button>
//             </div>
//         </form>
//     </div>
//         <hr/>
//         <div class="row rounded bg-white">
//     <div class="col-">
//         <ul class="list-group" id="list">
//             {todo.map((todos,index) => (
//                 <li class="list-group-item" key={todo.id}>
                    
//                     <div class="d-flex justify-content-between align-items-center">
//                         {todos.value}
//                         <div>
//                             <button type="button" class="btn btn-danger" onClick={()=>dispatch(deletetodo(todos.id))} >Delete</button>
//                             <button type="button" class="btn btn-primary"  onClick={()=>dispatch(edittodo(todos.id))} >Edit</button>
//                             <input type="text" ref={myRef} /> <button type="button" onClick={()=>save(todos.id)}>save</button>
//                         </div>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//      </div>
// </div>

//  </div>

//     )
//   }

  
//   export default CreateTodo
 