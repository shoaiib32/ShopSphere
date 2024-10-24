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

// Fetching single product details
export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async(id) =>{
   const response = await fetch(`https://fakestoreapi.in/api/products/${id}`)
   return response.json()
  }
)



const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    singleProduct: false,
    product: [],
    products: [],
  },
  reducers: {
    resetSingleProduct: (state) => {
      state.singleProduct = false;
    },
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
      })

      .addCase(fetchSingleProduct.pending, (state) => {
        state.singleProduct = false;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = true;
        state.product = action.payload.product;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.singleProduct = false;
      });
  },
});

export const { resetSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;

