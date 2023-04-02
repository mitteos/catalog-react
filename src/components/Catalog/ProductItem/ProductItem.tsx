import React, {useState} from 'react';
import styled from "styled-components";
import VolumeIcon from "assets/svg/volume.svg";
import WeightIcon from "assets/svg/weight.svg";
import {AccentButton} from "components/UI";
import {Link} from "react-router-dom";
import {FullProductState} from "store/features/product/types";
import {useAppDispatch} from "hooks/redux";
import {cartActions} from "store/features/cart";

interface ProductItemProps {
    info: FullProductState
}

export const ProductItem: React.FC<ProductItemProps> = ({info}) => {

    const dispatch = useAppDispatch()
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const addToCard = () => {
        setIsSuccess(true)
        dispatch(cartActions.addToCart({product: info, count: 1}))
        setTimeout(() => {
            setIsSuccess(false)
        }, 1000)
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={info.img} />
            </ImageContainer>
            <SizeContainer>
                <img src={info.sizeType === "volume" ? VolumeIcon : WeightIcon} alt=""/>
                <SizeText>{info.sizeValue} {info.sizeType === "volume" ? "мл" : "г"}мл</SizeText>
            </SizeContainer>
            <Name to={`/catalog/${info.id}`}><span>{info.brand} </span>{info.name}</Name>
            <Info>
                <InfoItem>Штрихкод: <span>{info.barcode}</span></InfoItem>
                <InfoItem>Производитель: <span>{info.brand}</span></InfoItem>
                <InfoItem>Бренд: <span>{info.brand}</span></InfoItem>
                <InfoItem>Тип ухода: <span>{info.type}</span></InfoItem>
            </Info>
            <Navigation>
                <NavigationPrice>{info.price} ₸</NavigationPrice>
                <ButtonContainer>
                    <NavigationBtn onClick={addToCard}>
                        <NavigationBtnInner>в корзину</NavigationBtnInner>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.6514 13.7859C41.3916 13.423 41.043 13.2416 40.6055 13.2416H12.7559L12 11.2738C11.8086 10.6286 11.5488 10.0775 11.2207 9.62056C10.8926 9.16357 10.5439 8.84099 10.1748 8.65282C9.80566 8.46464 9.48438 8.33696 9.21094 8.26975C8.9375 8.20255 8.66406 8.16895 8.39062 8.16895H2.77148C2.41602 8.16895 2.11523 8.28991 1.86914 8.53185C1.62305 8.77378 1.5 9.08292 1.5 9.45927C1.5 9.67432 1.55469 9.88265 1.66406 10.0843C1.77344 10.2859 1.93066 10.4405 2.13574 10.548C2.34082 10.6555 2.55273 10.7093 2.77148 10.7093H8.39062C8.5 10.7093 8.60254 10.7227 8.69824 10.7496C8.79395 10.7765 8.92383 10.8907 9.08789 11.0923C9.25195 11.2939 9.38867 11.5964 9.49805 11.9996L15.3809 28.1528C15.4355 28.3141 15.5244 28.4687 15.6475 28.6165C15.7705 28.7644 15.9141 28.8786 16.0781 28.9593C16.2422 29.0399 16.4199 29.0802 16.6113 29.0802H34.3301C34.6035 29.0802 34.8564 28.9996 35.0889 28.8383C35.3213 28.677 35.4785 28.4754 35.5605 28.2335L41.8359 14.9754C41.9727 14.5453 41.9111 14.1488 41.6514 13.7859ZM33.4277 26.4996H17.6367L13.4531 15.8222H38.7188L33.4277 26.4996ZM31.0625 30.4796C30.1602 30.4796 29.3877 30.7955 28.7451 31.4272C28.1025 32.0589 27.7812 32.8183 27.7812 33.7054C27.7812 34.5925 28.1025 35.3519 28.7451 35.9837C29.3877 36.6154 30.1602 36.9312 31.0625 36.9312C31.9648 36.9312 32.7373 36.6154 33.3799 35.9837C34.0225 35.3519 34.3438 34.5925 34.3438 33.7054C34.3438 32.8183 34.0225 32.0589 33.3799 31.4272C32.7373 30.7955 31.9648 30.4796 31.0625 30.4796ZM19.25 30.4796C18.6484 30.4796 18.0947 30.6274 17.5889 30.9231C17.083 31.2188 16.6865 31.6086 16.3994 32.0925C16.1123 32.5764 15.9688 33.114 15.9688 33.7054C15.9688 34.5925 16.29 35.3519 16.9326 35.9837C17.5752 36.6154 18.3477 36.9312 19.25 36.9312C20.1523 36.9312 20.9248 36.6154 21.5674 35.9837C22.21 35.3519 22.5312 34.5925 22.5312 33.7054C22.5312 33.4904 22.5107 33.2753 22.4697 33.0603C22.4287 32.8452 22.3672 32.6436 22.2852 32.4554C22.2031 32.2672 22.1006 32.0858 21.9775 31.9111C21.8545 31.7363 21.7178 31.575 21.5674 31.4272C21.417 31.2793 21.2529 31.1449 21.0752 31.0239C20.8975 30.903 20.7129 30.8022 20.5215 30.7215C20.3301 30.6409 20.125 30.5804 19.9062 30.5401C19.6875 30.4998 19.4688 30.4796 19.25 30.4796Z"/>
                        </svg>
                    </NavigationBtn>
                    <ButtonSuccess $isActive={isSuccess}>
                        <NavigationBtnInner>Добавлено</NavigationBtnInner>
                    </ButtonSuccess>
                </ButtonContainer>
            </Navigation>
        </Container>
    );
};

const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0 14px 39px -11px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  width: 326px;
  padding: 30px 21px 29px 23px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1807px) {
    width: 270px;
  }
`
const ImageContainer = styled.div`
  height: 218px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 1807px) {
    height: 180px;
  }
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`
const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 10px;
`
const SizeText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #3F4E65;
`
const Name = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #111111;
  margin: 0 0 20px;
  flex: auto;
  span {
    font-weight: 700;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 0 15px;
`
const InfoItem = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
  span {
    font-weight: 500;
    color: #111111;
  }
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavigationPrice = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  color: #111111;
`
const ButtonContainer = styled.div`
  position: relative;
`
const ButtonSuccess = styled.div<{$isActive: boolean}>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: #FFC85E;
  border-radius: 79px;
  color: #fff;
  transition: all .3s ease;
  visibility: ${({$isActive}) => $isActive ? "visible" : "hidden"};
  opacity: ${({$isActive}) => $isActive ? 1 : 0};
`
const NavigationBtn = styled(AccentButton)`
  cursor: pointer;
  padding: 9px 25px;
  gap: 5px;
  svg {
    fill: #fff;
    width: 27px;
    height: 27px;
  }
`
const NavigationBtnInner = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.15em;
  color: #FFFFFF;
`
