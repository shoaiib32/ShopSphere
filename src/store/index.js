import { configureStore } from "@reduxjs/toolkit";
import productSlice from './itemSlice';
import bagSlice from "./bag"
import toggleSlice from './toggle'
import pagination from './pagination'

const store = configureStore({
  reducer:{
    products:productSlice,
    toggle:toggleSlice,
    bag:bagSlice,
    pagination:pagination
  }
})

export default store;