import { configureStore } from "@reduxjs/toolkit";
import productSlice from './itemSlice';

const store = configureStore({
  reducer:{
    products:productSlice
  }
})

export default store;