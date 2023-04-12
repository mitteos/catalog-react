import {FullProductState} from "store/features/product/types";

interface getSortedProductsProps {
    items: FullProductState[]
    price: {min: number, max: number}
    type: number | null
    brand: number[]
    search: string
    sort: string
    page: number
}

export const getSortedProducts: (e: getSortedProductsProps) => FullProductState[] = ({page, sort, price, items, type, brand, search}) => {
    return !!items.length
        ? items
        .filter(el => type === null || el.typeId.includes(type))
        .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if(sort === "price-decrease") return b.price - a.price
            if(sort === "price-increase") return a.price - b.price
            if(sort === "name-increase") return b.name.localeCompare(a.name)
            return a.name.localeCompare(b.name)
        })
        .filter(el => el.price <= price.max && el.price >= price.min)
        .filter(el => !brand.length || brand.includes(el.brandId))
        .slice(page * 6 - 6, page * 6)
        : []
}
