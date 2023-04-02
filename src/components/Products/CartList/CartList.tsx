import React from 'react';
import styled from "styled-components";
import {CartItem} from "components/Products/CartItem";
import {useAppSelector} from "hooks/redux";

export const CartList = () => {

    const {items} = useAppSelector(state => state.cart)

    return (
        <Container>
            {items.map(el =>
                <Container key={el.product.id}>
                    <CartItem info={el}/>
                    <Separator />
                </Container>
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 500px) {
    gap: 20px;
  }
`
const Separator = styled.div`
  width: 100%;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
`
