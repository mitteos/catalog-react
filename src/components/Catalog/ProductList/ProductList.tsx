import React from 'react';
import styled from "styled-components";
import {ProductItem} from "components/Catalog/ProductItem";
import {useAppSelector} from "hooks/redux";
import {useSearchParams} from "react-router-dom";
import {getAllProducts} from "store/features/product";
import {FullProductState} from "store/features/product/types";
import {Pagination} from "components/Catalog/Pagination";
import {getSortedProducts} from "utils/sortProducts";

interface ProductListProps {
    className?: string
}

export const ProductList: React.FC<ProductListProps> = React.memo(({className}) => {

    const products = useAppSelector<FullProductState[]>(getAllProducts)
    const {selectedType, sortValue, selectedPrice, selectedBrand} = useAppSelector(state => state.product)
    const [searchParams] = useSearchParams()
    const currentPage = searchParams.get("page") || 1
    const queryParamsSearch = searchParams.get("name") || ""
    const productsList = getSortedProducts({
        items: products,
        sort: sortValue,
        page: +currentPage,
        search: queryParamsSearch,
        brand: selectedBrand, type:
        selectedType,
        price: selectedPrice
    })

    return (
        <Container className={className}>
            <List data-testid="product-list">
                {productsList.length
                    ? productsList?.map(product =>
                    <ProductItem key={product.id} info={product} data-testid="product-item"/>)
                    : <Empty data-testid="empty-list">{selectedType && queryParamsSearch ? "В данной категории нет такого товара" : queryParamsSearch ? "Товар с таким названием не найден" : "Товары отсутствуют"}</Empty>
                }
            </List>
            {!!productsList.length &&
                <Pagination />
            }
        </Container>
    );
})

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

