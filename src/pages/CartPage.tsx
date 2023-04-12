import React from 'react';
import styled from "styled-components";
import {Crumbs} from "components/Layout";
import {CartList} from "components/Products";
import {AccentButton} from "components/UI";
import {Link} from "react-router-dom";
import {useAppSelector} from "hooks/redux";

export const CartPage = () => {

    const {items} = useAppSelector(state => state.cart)
    const totalPrice = items?.map(el => el.product.price * el.count).reduce((prev, next) => prev + next, 0)

    return (
        <Container data-testid="cart-page">
            <Crumbs>
                <CrumbItem>Корзина</CrumbItem>
            </Crumbs>
            <Title>Корзина</Title>
            <Separator />
            {items?.length
                ? <CartList />
                : <Empty data-testid="empty-list">Корзина пуста</Empty>
            }
            {!!items?.length &&
                <Total>
                    <Link to="/cart/checkout">
                        <Checkout>
                            <p>Оформить заказ</p>
                        </Checkout>
                    </Link>
                    <TotalPrice>{totalPrice} ₸</TotalPrice>
                </Total>
            }
        </Container>
    );
};
const Container =  styled.div`
  max-width: 1369px;
  margin: 0 auto;
  width: 71.3%;
  @media (max-width: 1200px) {
    width: 90%;
  }
`
const CrumbItem = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  opacity: 0.5;
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
const Separator = styled.div`
  width: 100%;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
  margin: 50px 0;
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`
const Empty = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  line-height: 130%;
  color: #111111;
`
const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 0 0;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 25px;
    margin: 25px 0 0 0;
  }
`
const Checkout = styled(AccentButton)`
  padding: 21px 37px;
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
  @media (max-width: 500px) {
    width: 100%;
    order: 2;
  }
`
const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #111111;
  @media (max-width: 500px) {
    order: 1;
  }
`
