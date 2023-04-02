import React from 'react';
import styled from "styled-components";
import {ProductItem} from "components/Catalog/ProductItem";
import {useAppSelector} from "hooks/redux";
import {useSearchParams} from "react-router-dom";
import {getAllProducts} from "store/features/product";
import {FullProductState} from "store/features/product/types";
import {Pagination} from "components/Catalog/Pagination";

interface ProductListProps {
    className?: string
}

export const ProductList: React.FC<ProductListProps> = ({className}) => {

    const products = useAppSelector<FullProductState[]>(getAllProducts)
    const {selectedType, sortValue, selectedPrice, selectedBrand} = useAppSelector(state => state.product)
    const [searchParams] = useSearchParams()
    const currentPage = searchParams.get("page") || 1
    const queryParamsSearch = searchParams.get("name") || ""
    const productsList = products
        .filter(el => selectedType === null || el.typeId.includes(selectedType))
        .filter(el => el.name.toLowerCase().includes(queryParamsSearch.toLowerCase()))
        .sort((a, b) => {
            if(sortValue === "price-decrease") return b.price - a.price
            if(sortValue === "price-increase") return a.price - b.price
            if(sortValue === "name-increase") return b.name.localeCompare(a.name)
            return a.name.localeCompare(b.name)
        })
        .filter(el => el.price <= selectedPrice.max && el.price >= selectedPrice.min)
        .filter(el => !selectedBrand.length || selectedBrand.includes(el.brandId))
        .slice(+currentPage * 6 - 6, +currentPage * 6)

    return (
        <Container className={className}>
            <List>
                {productsList.length
                    ? productsList.map(product =>
                    <ProductItem key={product.id} info={product}/>)
                    : <Empty>{selectedType && queryParamsSearch ? "В данной категории нет такого товара" : queryParamsSearch ? "Товар с таким названием не найден" : "Товары отсутствуют"}</Empty>
                }
            </List>
            {!!productsList.length &&
                <Pagination />
            }
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  justify-content: center;
`
const Empty = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #111111;
`

