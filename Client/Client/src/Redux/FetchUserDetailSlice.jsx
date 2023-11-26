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
    const Server = import.meta.env.VITE_SERVER;
    const res = await axios.get(`${Server}/manageProfile/${user}`);
    dispatch(FetchedUserData(res.data));
  };
};
