import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    sidebar: true, 
    singleProduct:false
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar; 
    },toggleSingleProduct: (state) => {
      state.singleProduct = !state.singleProduct; 
    }
  },
});

export const  toggleAction = toggleSlice.actions;
export default toggleSlice.reducer;
