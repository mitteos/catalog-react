import React from 'react';
import styled from "styled-components";
import {ProductItem} from "components/Checkout";
import { Scrollbars } from 'react-custom-scrollbars';
import {AccentLink} from "components/UI";
import EditIcon from "assets/svg/edit.svg";
import {useAppSelector} from "hooks/redux";

export const ProductList = () => {

    const {items} = useAppSelector(state => state.cart)
    const totalPrice = (items.length && items.map(el => el.product.price * el.count).reduce((prev, next) => prev + next, 0)) || []

    return (
        <Container>
            <Title>Ваш заказ</Title>
            <ScrollContainer
                style={{height: 621}}
                renderTrackVertical={props => <Track {...props} className="track-vertical"/>}
                renderThumbVertical={props => <Thumb {...props} className="thumb-vertical"/>}
                renderView={props => <List {...props} />}
            >
                {items.map(el =>
                        <ProductItem key={el.product.id} product={el.product} count={el.count}/>
                )}
            </ScrollContainer>
            <Footer>
                <Total>
                    <TotalText>ИТОГО</TotalText>
                    <p>{totalPrice} ₸</p>
                </Total>
                <EditBtn href="/cart">
                    <EditText>Редактировать заказ</EditText>
                    <img src={EditIcon} alt=""/>
                </EditBtn>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 16px 38px 21px;
  background: #FFFFFF;
  box-shadow: 0px 14px 39px -11px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  @media (max-width: 664px) {
    box-shadow: none;
    padding: 10px 0 0 0;
    background: none;
  }
`
const Title = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  color: #111111;
  margin: 0 0 30px;
  @media (max-width: 664px) {
    display: none;
  }
`
const ScrollContainer = styled(Scrollbars)`
  @media (max-width: 664px) {
    display: none;
  }
`
const Thumb = styled.div`
  background-color: #FFC85E;
  width: 6px;
  border-radius: 2px;
  margin-left: -1px;
  display: block;
`
const Track = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  background-color: rgba(255, 200, 94, 0.4);
  height: 100%;
  width: 4px;
  border-radius: 2px;
  display: block;
  
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px 0 0;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  margin: 20px 36px 0 0;
  @media (max-width: 664px) {
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: #111111;
  @media (max-width: 664px) {
    font-size: 30px;
  }
`
const TotalText = styled.p`
  @media (max-width: 664px) {
    display: none;
  }
`
const EditBtn = styled(AccentLink)`
  gap: 12px;
  padding: 21px 0;
  width: 237px;
  @media (max-width: 664px) {
    width: 59px;
  }
`
const EditText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  @media (max-width: 664px) {
    display: none;
  }
`
