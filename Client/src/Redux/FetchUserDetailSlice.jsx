import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

let user = localStorage.getItem("user");
const FetchUserDetail = createSlice({
  name: "FetchUserDetail",
  initialState,
  reducers: {
    FetchedUserData(state, action) {
      state.data = action.payload;
    },
  },
});
export const { FetchedUserData } = FetchUserDetail.actions;
export default FetchUserDetail.reducer;

export const getData = () => {
  return async function getDataThunk(dispatch, getState) {
    const res = await axios.get(`https://findmymechanic.onrender.com/manageProfile/${user}`);
    dispatch(FetchedUserData(res.data));
  };
};
