import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (category) => {
    let url = category 
        ? `https://fakestoreapi.in/api/products/category?type=${category}`
        : "https://fakestoreapi.in/api/products?limit=150";
    const response = await fetch(url);
    return response.json();
    
});

export const fetchSearchProducts = createAsyncThunk(
    "cocktail/fetchSearchProduct",
    async({searchText})=>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
        return response.json()
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        selectedProduct: null,
    },
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        }
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
    }
});

export const { setSelectedProduct, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
