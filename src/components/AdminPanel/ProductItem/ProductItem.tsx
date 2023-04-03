import React from 'react';
import {FullProductState} from "store/features/product/types";
import styled from "styled-components";
import {AccentButton, AccentLink} from "components/UI";
import EditIcon from "assets/svg/edit.svg";
import RemoveIcon from "assets/svg/basket.svg";
import {useAppDispatch} from "hooks/redux";
import {productActions} from "store/features/product";

interface ProductItemProps {
    info: FullProductState
}

export const ProductItem: React.FC<ProductItemProps> = ({info}) => {

    const dispatch = useAppDispatch()
    const handleRemoveItem = () => {
        dispatch(productActions.removeItem(info.id))
    }

    return (
        <Container>
            <Image>
                <img src={info.img} alt=""/>
            </Image>
            <Name>{info.name}</Name>
            <Price>{info.price} ₸</Price>
            <Navigation>
                <EditButton href={`/admin/${info.id}`}>
                    <p>Редактировать</p>
                    <img src={EditIcon} alt=""/>
                </EditButton>
                <RemoveBtn onClick={handleRemoveItem}>
                    <img src={RemoveIcon} alt=""/>
                </RemoveBtn>
            </Navigation>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 14px 39px -11px rgba(0, 0, 0, 0.1);
  padding: 20px;
`
const Image = styled.div`
  height: 150px;
  img {
    height: 100%;
    object-fit: contain;
  }
`
const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #111111;
`
const Price = styled(Name)`
  font-weight: 700;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const EditButton = styled(AccentLink)`
  padding: 10px;
  gap: 10px;
`
const RemoveBtn = styled(AccentButton)`
  width: 59px;
  height: 45px;
`
