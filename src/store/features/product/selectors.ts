import {RootState} from "store/store";
import {createSelector} from "@reduxjs/toolkit";

const selectAllProducts = (state: RootState) => state.product
const selectAllBrands = (state: RootState) => state.brand
const selectAllTypes = (state: RootState) => state.type

export const getAllProducts = createSelector(
    [selectAllProducts, selectAllBrands, selectAllTypes],
    (allProducts, allBrands, allTypes) => {
        return allProducts.products.map(product => {
            return {
                ...product,
                brand: allBrands.items.find(brand => brand.id === product.brandId)?.name || "",
                type: allTypes.items.find(type => type.id === product.typeId[0])?.name || ""
            }
        })
    }
)

