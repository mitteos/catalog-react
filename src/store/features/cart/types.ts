import {FullProductState} from "store/features/product/types";

export interface InitialState {
    items: {
        product: FullProductState,
        count: number
    }[]
}

export interface AddToCartState {
    product: FullProductState,
    count: number
}

