import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BrandState, InitialState} from "./types";

const initialState: InitialState = {
    items: []
}

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        setBrands(state, action: PayloadAction<BrandState[]>) {
            state.items = action.payload
        },
        addBrand(state, action: PayloadAction<BrandState>) {
            state.items.push(action.payload)
        }
    }
})

export const brandReducer = brandSlice.reducer
export const brandActions = brandSlice.actions
