import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cart.find(item => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({ ...newItem, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cart.find(item => item.id === itemId)
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== itemId)
            } else {
                existingItem.quantity--;
            }
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer