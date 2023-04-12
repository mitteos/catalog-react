import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PointIcon from "assets/svg/point.svg";
import MailIcon from "assets/svg/mail.svg";
import LogoIcon from "assets/svg/logo.svg";
import CallBackIcon from "assets/img/callback.png";
import DownloadIcon from "assets/svg/download.svg";
import PhoneIcon from "assets/svg/phone.svg";
import PhoneLightIcon from "assets/svg/phoneLight.svg";
import {AccentButton, AccentLink, SearchInput} from "components/UI";
import {Cart} from "components/Products";
import {Link} from "react-router-dom";
import {NavBar} from "components/Layout/NavBar";

export const Header = React.memo(() => {

    const [isOpen, setIsOpen] =  useState<boolean>(false)

    useEffect(() => {
        isOpen
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "auto"
    }, [isOpen])

    return (
        <HeaderContainer>
            <HeaderNavigation $isOpen={isOpen}>
                <ContainerInner>
                    <Contacts>
                        <ContactItem>
                            <img src={PointIcon} alt="point" />
                            <ContactInfo href="">
                                г. Кокчетав, ул. Ж. Ташенова 129Б<br></br>
                                <span>(Рынок Восточный)</span>
                            </ContactInfo>
                        </ContactItem>
                        <Separator $height={39}/>
                        <ContactItem>
                            <img src={MailIcon} alt="mail"/>
                            <ContactInfo href="mailto:opt.sultan@mail.ru">
                                opt.sultan@mail.ru<br></br>
                                <span>На связи в любое время</span>
                            </ContactInfo>
                        </ContactItem>
                        <ContactItemMobile>
                            <ContactItem>
                                <img src={PhoneIcon} alt=""/>
                                <ContactInfo href="tel:+77774900091">
                                    Отдел продаж
                                    <span>+7 (777) 490-00-91</span>
                                </ContactInfo>
                            </ContactItem>
                        </ContactItemMobile>
                        <ContactItemMobile>
                            <CallbackMobile href="">
                                <CallbackMobileBtn>
                                    <img src={PhoneLightIcon} alt=""/>
                                </CallbackMobileBtn>
                                <CallBackMobileText>Заказать звонок</CallBackMobileText>
                            </CallbackMobile>
                        </ContactItemMobile>
                    </Contacts>
                    <NavBar />
                </ContainerInner>
            </HeaderNavigation>
            <ContainerSeparator />
            <HeaderInfo>
                <Head>
                    <HeadControl>
                        <HeadLogo to="/catalog">
                            <img src={LogoIcon} alt="logo"/>
                        </HeadLogo>
                            <CatalogButton href="/catalog">
                                <ButtonText>Каталог</ButtonText>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"/>
                                    <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"/>
                                    <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"/>
                                    <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"/>
                                </svg>
                            </CatalogButton>
                            <SearchForm isHeader={true}/>
                    </HeadControl>
                    <HeadRow>
                        <Menu onClick={() => setIsOpen(!isOpen)}>
                            <MenuInner $isOpen={isOpen}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </MenuInner>
                        </Menu>
                        <CallBack>
                            <CallBackInfo>
                                <CallBackPhone href="tel:+77774900091">+7 (777) 490-00-91</CallBackPhone>
                                <CallBackTime>время работы: 9:00-20:00</CallBackTime>
                                <CallBackBtn href="">Заказать звонок</CallBackBtn>
                            </CallBackInfo>
                            <CallBackImg src={CallBackIcon} alt="" />
                        </CallBack>
                        <Separator $height={49} />
                        <PriceList>
                            <PriceListBtn>
                                <ButtonText>Прайс-лист</ButtonText>
                                <img src={DownloadIcon} alt=""/>
                            </PriceListBtn>
                        </PriceList>
                        <Separator $height={49} />
                        <Cart />
                    </HeadRow>
                </Head>
            </HeaderInfo>
        </HeaderContainer>
    );
})

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    border-bottom: 1px solid rgba(63, 78, 101, 0.2);
  }
`
const Container = styled.div`
  max-width: 1369px;
  margin: 0 auto;
  width: 71.3%;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`
const HeaderNavigation = styled(Container)<{$isOpen: boolean}>`
  @media (max-width: 900px) {
    background: #fff;
    position: fixed;
    top: ${({$isOpen}) => $isOpen ? "108px" : "-100%"};
    left: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    order: 2;
    transition: all 0.3s ease;
  }
`
const HeaderInfo = styled(Container)`
  @media (max-width: 900px) {
    position: relative;
    z-index: 1;
    order: 1;
    background: #fff;
  }
`
const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px 0 33px;
    width: 90%;
    margin: 0 auto;
  }
`
const ContainerSeparator = styled.div`
  background: #3F4E65;
  opacity: 0.2;
  width: 100%;
  height: 1px;
  @media (max-width: 900px) {
    display: none;
  }
`
const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1250px) {
    gap: 10px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px dashed rgba(63, 78, 101, 0.2);;
    padding: 0 0 25px;
    width: 100%;
  }
`
const ContactItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media (max-width: 1250px) {
    gap: 10px;
  }
`
const ContactItemMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`
const CallbackMobile = styled.a`
  display: flex;
  gap: 7px;
  align-items: center;
`
const CallbackMobileBtn = styled(AccentButton)`
  padding: 10px;
`
const CallBackMobileText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #3F4E65;
`
const ContactInfo = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 130.02%;
  color: #111111;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 300;
    font-size: 12px;
    line-height: 130.02%;
  }
  @media (max-width: 1350px) {
    font-size: 12px;
    span {
      font-size: 10px;
    }
  }
  @media (max-width: 1000px) {
    max-width: 120px;
  }
  @media (max-width: 900px) {
    max-width: none;
    font-size: 14px;
    span {
      font-size: 12px;
    }
  }
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
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;
  @media (max-width: 1685px) {
    flex-direction: column;
    padding: 20px;
  }
  position: relative;
  @media (max-width: 900px) {
    gap: 14px;
    padding: 20px 0 0;
  }
`
const HeadControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex: auto;
  @media (max-width: 900px) {
    order: 2;
    justify-content: space-around;
    padding: 5px 0;
    width: 100%;
    border-top: 1px solid rgba(63, 78, 101, 0.1);
    border-bottom: 1px solid rgba(63, 78, 101, 0.1);
    overflow: hidden;
  }
`
const HeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 1850px) {
    gap: 10px;
  }
  @media (max-width: 1685px) {
    gap: 25px;
  }
  @media (max-width: 900px) {
    order: 1;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`
const HeadLogo = styled(Link)`
  margin: 0 20px 0 0;
  @media (max-width: 900px) {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    img {
      width: 97px;
    }
  }
`
const CatalogButton = styled(AccentLink)`
  padding: 21px 54px;
  gap: 12px;
  svg {
    stroke: #fff;
  }
  @media (max-width: 900px) {
    background: none;
    color: #3F4E65;
    gap: 6px;
    padding: 7.5px 0;
    width: 100%;
    svg {
      order: 1;
      stroke: #3F4E65;
    }
  }
`
const SearchForm = styled(SearchInput)`
  flex: auto;
`
const ButtonText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  @media (max-width: 900px) {
    order: 2;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #3F4E65;
  }
`
const CallBack = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media (max-width: 900px) {
    display: none;
  }
`
const CallBackInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`
const CallBackImg = styled.img`
  @media (max-width: 1750px) {
    
  }
`
const CallBackPhone = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
  @media (max-width: 1750px) {
    font-size: 12px;
  }
`
const CallBackTime = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  @media (max-width: 1750px) {
    font-size: 10px;
  }
`
const CallBackBtn = styled.a`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #3F4E65;
`
const PriceList = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`
const PriceListBtn = styled(AccentButton)`
  padding: 21px 43px;
  gap: 12px;
`
const Menu = styled.div`
  display: none;
  @media (max-width: 900px) {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #FFC85E;
  }
`
const MenuInner = styled.div<{$isOpen: boolean}>`
  width: 8px;
  height: 7.2px;
  position: relative;
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: #FFFFFF;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease;
  }
  span:nth-child(1) {
    transform-origin: left center;
    top: ${({$isOpen}) => $isOpen ? 1 : 0}px;
    left: ${({$isOpen}) => $isOpen && "1px"};
    transform: ${({$isOpen}) => $isOpen && "rotate(45deg)"};
  }
  span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
    opacity: ${({$isOpen}) => $isOpen && 0};
    width: ${({$isOpen}) => $isOpen && "0%"};
  }
  span:nth-child(3) {
    transform: ${({$isOpen}) => $isOpen && "rotate(-45deg)"};
    bottom: ${({$isOpen}) => $isOpen ? 0 : 0}px;
    left: ${({$isOpen}) => $isOpen && "1px"};
    transform-origin: left center;
  }
`
