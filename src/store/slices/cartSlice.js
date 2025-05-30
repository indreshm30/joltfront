// src/store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: {},
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            const product = action.payload;
            if (!state.cartItems[product.title]) {
                state.cartItems[product.title] = { ...product, quantity: 1 };
            } else {
                state.cartItems[product.title].quantity += 1;
            }
            state.totalQuantity += 1;
        },
        decrement: (state, action) => {
            const product = action.payload;
            if (state.cartItems[product.title] && state.cartItems[product.title].quantity > 0) {
                state.cartItems[product.title].quantity -= 1;
                state.totalQuantity -= 1;
                if (state.cartItems[product.title].quantity === 0) {
                    delete state.cartItems[product.title];
                }
            }
        },
    },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;