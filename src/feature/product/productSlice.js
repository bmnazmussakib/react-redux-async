import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk('product/fetchProductData', async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        product: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.isLoading = false
            state.product = action.payload
            state.error = null
        })

        builder.addCase(fetchProductData, (state, action) => {
            state.isLoading = false
            state.product = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer;