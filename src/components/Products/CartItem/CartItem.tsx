import React, {useState} from 'react';
import styled from "styled-components";
import VolumeIcon from "assets/svg/volume.svg";
import WeightIcon from "assets/svg/weight.svg";
import {AccentButton, Counter} from "components/UI";
import ClearIcon from "assets/svg/basket.svg";
import {FullProductState} from "store/features/product/types";
import {useAppDispatch} from "hooks/redux";
import {cartActions} from "store/features/cart";

interface CartItemProps {
    info: {
        product: FullProductState,
        count: number
    }
}

export const CartItem: React.FC<CartItemProps> = ({info}) => {

    const [count, setCount] = useState<number>(info.count)
    const dispatch = useAppDispatch()

    const removeItem = () => {
        dispatch(cartActions.removeItem(info.product.id))
    }
    const changeProductCount = (count: number) => {
        dispatch(cartActions.changeItemCount({product: info.product, count: count}))
    }

    return (
        <Container>
            <Image>
                <img src={info.product.img} alt=""/>
            </Image>
            <Info>
                <Size>
                    <img src={info.product.sizeType === "volume" ? VolumeIcon : WeightIcon} alt=""/>
                    <p>{info.product.sizeValue} {info.product.sizeType === "volume" ? "мл" : "г"}</p>
                </Size>
                <Name>{info.product.brand} {info.product.name}</Name>
                <Description>{info.product.description}</Description>
            </Info>
            <ContainerSeparator />
            <Control>
                <Counter count={count} setCount={setCount} change={changeProductCount}/>
                <Separator />
                <Price>{info.product.price} ₸</Price>
                <Separator />
                <RemoveBtn onClick={removeItem}>
                    <img src={ClearIcon} alt=""/>
                </RemoveBtn>
            </Control>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 281px;
  height: 191px;
  img {
    height: 100%;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  max-width: 480px;
`
const Control = styled.div`
  display: flex;
  align-items: center;
  flex: auto;
  justify-content: space-between;
  gap: 15px;
`
const Size = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 9px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #3F4E65;
  }
`
const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #111111;
  margin: 0 0 10px;
  @media (max-width: 1000px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
  }
`
const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
`
const Separator = styled.div`
  height: 49px;
  opacity: 0.2;
  border: 1px dashed #3F4E65;
`
const ContainerSeparator = styled(Separator)`
  @media (max-width: 900px) {
    display: none;
  }
`
const Price = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #111111;
  flex-shrink: 0;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`
const RemoveBtn = styled(AccentButton)`
  padding: 17px;
  border-radius: 100%;
  cursor: pointer;
`
