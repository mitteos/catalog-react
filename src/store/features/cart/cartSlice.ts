import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddToCartState, InitialState} from "./types";


const initialState: InitialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<AddToCartState>) {
            if(!state.items.filter(item => item.product.id === action.payload.product.id).length) {
                state.items.push(action.payload)
            }
            else state.items = state.items.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const totalCount = item.count + action.payload.count
                    return {
                        ...item,
                        count: totalCount
                    }
                }
                return item
            })
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.product.id !== action.payload)
        },
        changeItemCount(state, action: PayloadAction<AddToCartState>) {
            state.items = state.items.map(item => {
                if(item.product.id === action.payload.product.id) {
                    return action.payload
                }
                return item
            })
        },
        clearItems(state) {
            state.items = []
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
