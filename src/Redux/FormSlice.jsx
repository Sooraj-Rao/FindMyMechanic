import { createSlice } from "@reduxjs/toolkit";

const FormSlice=createSlice({
    name:'FormShow',
    initialState:false,
    reducers:{
        FormShow(state,action){
            return !state
        }
    }
})

export const { FormShow } = FormSlice.actions;
export default FormSlice.reducer;