import { configureStore } from "@reduxjs/toolkit";
import FetchUserDetail from './FetchUserDetailSlice'
import FormSlice from "./FormSlice";

const Store=configureStore({
    reducer:{
        userData:FetchUserDetail,
        showForm:FormSlice 
    }
})

export default Store;