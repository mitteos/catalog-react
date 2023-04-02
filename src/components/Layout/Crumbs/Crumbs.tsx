import React from 'react';
import styled from "styled-components";
import BackIcon from "assets/svg/arrowBtn.svg";
import {Link, useNavigate} from "react-router-dom";

interface CrumbsProps {
    isCheckout?: boolean
    children?: React.ReactNode
}

export const Crumbs: React.FC<CrumbsProps> = ({children, isCheckout = false}) => {

    const navigate = useNavigate()

    return (
        <div>
            <MobileBack onClick={() => navigate(-1)}>
                <MobileBackBtn>
                    <img src={BackIcon} alt=""/>
                </MobileBackBtn>
                <p>{isCheckout ? "в корзину" : "назад"}</p>
            </MobileBack>
            <CrumbsList>
                <CrumbsItem $isActive={true} to="/">Главная</CrumbsItem>
                <CrumbsSeparator />
                {children}
            </CrumbsList>
        </div>
    );
};

const CrumbsList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 50px;
  @media (max-width: 900px) {
   display: none; 
  }
`
const CrumbsItem = styled(Link)<{$isActive: boolean}>`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  opacity: ${({$isActive}) => !$isActive && 0.5};
`
const CrumbsSeparator = styled.div`
  width: 0;
  height: 16px;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
`
const MobileBack = styled.div`
  display: none;
  gap: 5px;
  align-items: center;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
  margin: 0 0 25px;
  @media (max-width: 900px) {
    display: flex;
  }
`
const MobileBackBtn = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 202, 101, 0.3);;
  border-radius: 100%;
`
