import { configureStore } from "@reduxjs/toolkit";
// import Todos from "../Components/Todos";
import todoSlice from '../Components/Todos'
export const store = configureStore({
    reducer:{
     list:todoSlice
    }
})