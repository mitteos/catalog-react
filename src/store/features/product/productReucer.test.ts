import {productActions, productReducer} from "store/features/product/productSlice";
import {InitialState} from "store/features/product/types";
import {initialProductsCollections} from "utils/initialCollections"

const productReducerState: InitialState = {products: [], selectedPrice: {min: 0, max: 0}, page: 1, selectedBrand: [], sortValue: "name-decrease", selectedType: null}

describe("product reducer", () => {
    test("set products", () => {
        expect(productReducer(productReducerState,
            productActions.setProducts(initialProductsCollections)))
            .toEqual({products: initialProductsCollections, selectedPrice: {min: 0, max: 0}, page: 1, selectedBrand: [], sortValue: "name-decrease", selectedType: null})
    })

    test("set sort value", () => {
        expect(productReducer(productReducerState,
            productActions.setSelectedType(1)))
            .toEqual({...productReducerState, selectedType: 1})
    })
})
