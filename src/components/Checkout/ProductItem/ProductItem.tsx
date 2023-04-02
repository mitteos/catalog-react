import React from 'react';
import styled from "styled-components";
import VolumeIcon from "assets/svg/volume.svg";
import {ProductState} from "store/features/product/types";

interface ProductItemProps {
    product: ProductState
    count: number
}

export const ProductItem: React.FC<ProductItemProps> = ({product, count}) => {
    return (
        <Item>
            <Container>
                <Image>
                    <img src={product.img} alt={product.name}/>
                </Image>
                <Info>
                    <SizeContainer>
                        <img src={VolumeIcon} alt="volume"/>
                        <SizeText>450 мл</SizeText>
                    </SizeContainer>
                    <Name>{product.manufacturer} {product.name}</Name>
                    <Price>{product.price} ₸ x {count}</Price>
                </Info>
            </Container>
            <Separator />
        </Item>
    );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`
const Image = styled.div`
  width: 217px;
  height: 190px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
`
const Info = styled.div`
  flex: auto;
`
const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 9px;
`
const SizeText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #3F4E65;
`
const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #111111;
  margin: 0 0 25px;
`
const Price = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #111111;
`
const Separator = styled.div`
  width: 100%;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
`
