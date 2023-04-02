export interface InitialState {
    products: ProductState[]
    selectedType: number | null
    selectedBrand: number[]
    sortValue: "name-decrease" | "name-increase" | "price-decrease" | "price-increase"
    selectedPrice: {min: number; max: number}
    page: number
}
export interface ProductState {
    id: number
    name: string
    img: string
    sizeType: "volume" | "weight"
    sizeValue: number
    barcode: string
    manufacturer: string
    brandId: number
    typeId: number[]
    description: string
    price: number
    vendor: number
}
export interface FullProductState extends ProductState{
    brand: string
    type: string
}

export interface FilterValuesState {
    selectedBrand: number[]
    selectedPrice: {min: number; max: number}
}
