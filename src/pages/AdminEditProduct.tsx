import React from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {ProductForm} from "components/AdminPanel";
import {useAppSelector} from "hooks/redux";

export const AdminEditProduct = () => {

    const {id} = useParams()
    const {products} = useAppSelector(state => state.product)

    return (
        <Container>
            <Title>Редактирование товара</Title>
            <ProductForm
                productInfo={products.find(el => id && el.id === +id)}
                isNewProduct={false}/>
        </Container>
    );
};

const Container =  styled.div`
  max-width: 1369px;
  margin: 0 auto;
  width: 71.3%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1200px) {
    width: 90%;
  }
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: #111111;
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`
