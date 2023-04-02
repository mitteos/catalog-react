import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialState, TypeState} from "./types";

const initialState: InitialState = {
    items: []
}

const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {
        setTypes(state, action: PayloadAction<TypeState[]>) {
          state.items = action.payload
        },
        addType(state, action: PayloadAction<TypeState>) {
            state.items.push(action.payload)
        }
    }
})

export const typeReducer = typeSlice.reducer
export const typeActions = typeSlice.actions
