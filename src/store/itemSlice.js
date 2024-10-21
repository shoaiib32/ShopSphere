// src/store/itemSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    let url;
    if (category) {
      url = `https://fakestoreapi.in/api/products/category?type=${category}`;
    } else {
      url = "https://fakestoreapi.in/api/products?page=1&limit=30";
    }
    const response = await fetch(url);
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products || action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
