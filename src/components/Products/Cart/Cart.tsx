import React from 'react';
import styled from "styled-components";
import CartIcon from "assets/svg/cart.svg";
import {Link} from "react-router-dom";
import {useAppSelector} from "hooks/redux";

export const Cart = () => {

    const {items} = useAppSelector(state => state.cart)
    const totalCount = (items.length && items.map(el => el.count).reduce((prev, next) => prev + next)) || 0
    const totalPrice = (items.length && items.map(el => el.product.price * el.count).reduce((prev, next) => prev + next, 0)) || 0

    return (
        <Container to="/cart">
            <Image>
                <ImageInner src={CartIcon} alt=""/>
                <CartCount>{totalCount}</CartCount>
            </Image>
            <Title>
                Корзина<br></br>
                <span>{totalPrice} ₸</span>
            </Title>
        </Container>
    );
};

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`
const Image = styled.div`
  position: relative;
`
const ImageInner = styled.img`
  @media (max-width: 900px) {
    width: 25px;
  }
`
const CartCount = styled.p`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  background: #FFC85E;
  border-radius: 100%;
  position: absolute;
  top: 2px;
  right: -10px;
  @media (max-width: 900px) {
    width: 17px;
    height: 17px;
    top: -5px;
    right: -7px;
    font-size: 10px;

  }
`
const Title = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #111111;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
