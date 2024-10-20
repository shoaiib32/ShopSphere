import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async() => {
    const response = await fetch ("https://fakestoreapi.in/api/products?page=1&limit=30")
    return response.json();
  }
)

const productsSLice = createSlice({
  name:"products",
  initialState:{
    loading:false,
    products:[]
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchProducts.pending,(state)=>{
      state.loading =true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })
  }
})

export default productsSLice.reducer;