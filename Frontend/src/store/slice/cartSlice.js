import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemInCart: (state, action) => {
            state.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            const index = state.findIndex(item => item._id == action.payload)
            if (index != -1) {
                state.splice(index, 1)
            }
        },
        incrementQuantity: (state, action) => {
            const index = state.findIndex(item => item._id == action.payload)
            if (index != -1) {
                state[index].quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const index = state.findIndex(item => item._id == action.payload)
            if (index != -1) {
                if(state[index].quantity > 1){
                    state[index].quantity--
                } else (
                    state.splice(index, 1)
                )
            }
        },
    }
})

export const { addItemInCart, deleteItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer