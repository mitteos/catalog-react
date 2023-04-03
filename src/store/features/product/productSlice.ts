import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterValuesState, InitialState, ProductState} from "store/features/product/types";

const initialState: InitialState = {
    products: [],
    selectedType: null,
    sortValue: "name-decrease",
    selectedBrand: [],
    selectedPrice: {min: 0, max: 10000},
    page: 1
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductState[]>) {
            state.products = action.payload
        },
        setSelectedType(state, action: PayloadAction<number | null>) {
            state.selectedType = action.payload
        },
        setSortValue(state, action: PayloadAction<"name-decrease" | "name-increase" | "price-decrease" | "price-increase">) {
            state.sortValue = action.payload
        },
        setFilterValues(state, action: PayloadAction<FilterValuesState>) {
            state.selectedBrand = action.payload.selectedBrand
            state.selectedPrice = action.payload.selectedPrice
        },
        addNewProduct(state, action: PayloadAction<ProductState>) {
            state.products.push(action.payload)
        },
        removeItem(state, action: PayloadAction<number>) {
            state.products = state.products.filter(el => el.id !== action.payload)
        },
        changeProduct(state, action: PayloadAction<ProductState>) {
            state.products = state.products.map(product => {
                if(product.id === action.payload.id) {
                    return {
                        ...action.payload
                    }
                }
                return product
            })
        }
    }
})

export const productReducer = productSlice.reducer
export const productActions = productSlice.actions
