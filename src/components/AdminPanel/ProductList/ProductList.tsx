import React from 'react';
import {useAppSelector} from "hooks/redux";
import styled from "styled-components";
import {ProductItem} from "components/AdminPanel";
import {getAllProducts} from "store/features/product";

export const ProductList = () => {

    const products = useAppSelector(getAllProducts)

    return (
        <Container>
            {products.map(product =>
                <ProductItem info={product}/>
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
