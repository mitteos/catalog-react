import React from 'react';
import styled from "styled-components";
import {ProductForm, ProductList} from "components/AdminPanel";

export const AdminPanel = () => {
    return (
        <Container>
            <Title>Админ панель</Title>
            <Subtitle>Добавление товара</Subtitle>
            <ProductForm isNewProduct={true}/>
            <Subtitle>Редактирование товаров</Subtitle>
            <ProductList />
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
const Subtitle = styled.p`
  text-transform: capitalize;
  font-size: 25px;
  margin: 0 0 10px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`
