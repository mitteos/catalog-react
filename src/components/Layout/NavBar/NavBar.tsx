import React from 'react';
import DownloadIcon from "assets/svg/download.svg";
import styled from "styled-components";
import {AccentButton} from "components/UI";

const links = [
    {id: 1, value: "О компании"},
    {id: 2, value: "Доставка и оплата"},
    {id: 3, value: "Возврат"},
    {id: 4, value: "Контакты"},
]

export const NavBar = () => {
    return (
        <Navigation>
            <NavigationTitle>Меню сайта:</NavigationTitle>
            {links.map((el, index) =>
                <LinkItem key={el.id}>
                    <NavigationItem href="">{el.value}</NavigationItem>
                    {index !== links.length - 1 && <Separator $height={29}/>}
                </LinkItem>
            )}
            <PriceBtnMobile>
                <img src={DownloadIcon} alt=""/>
                <p>Прайс-лист</p>
            </PriceBtnMobile>
        </Navigation>
    );
};

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 1500px) {
    gap: 15px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 25px 0 0;
    gap: 20px;
  }
`
const NavigationTitle = styled.p`
  display: none;
  @media (max-width: 900px) {
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #3F4E65;
    margin-bottom: 5px;
  }
`
const LinkItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 30px;
  @media (max-width: 1500px) {
    gap: 15px;
  }
  @media (max-width: 900px) {
    gap: 20px;
  }
`
const NavigationItem = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
`
const PriceBtnMobile = styled(AccentButton)`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
  padding: 26px 0;
  max-width: 290px;
  width: 100%;
  gap: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`
const Separator = styled.div<{$height: number}>`
  opacity: 0.05;
  border: 1px dashed #000000;
  height: ${({$height}) => $height}px;
  width: 1px;
  @media (max-width: 900px) {
    display: none;
  }
`
