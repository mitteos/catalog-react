import React from 'react';
import {Modal} from "components/UI";
import styled from "styled-components";
import SuccessIcon from "assets/svg/success.svg";

interface SuccessModalProps {
    isActive: boolean
    setIsActive: (e: boolean) => void
}

export const SuccessModal: React.FC<SuccessModalProps> = ({isActive, setIsActive}) => {
    return (
        <Container
            isActive={isActive}
            setIsActive={setIsActive}
        >
            <Icon>
                <img src={SuccessIcon} alt=""/>
            </Icon>
            <Title>Спасибо за заказ</Title>
            <SubTitle>Наш менеджер свяжется с вами в ближайшее время</SubTitle>
        </Container>
    );
};

const Container = styled(Modal)`
  padding: 0 42px;
  width: 735px;
  height: 424px;
  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    height: 288px;
    width: 290px;
  }
`
const Icon = styled.div`
  width: 59px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFC85E;
  border-radius: 100%;
  margin: 0 0 24px;
  @media (max-width: 550px) {
    margin: 0 0 20px;
  }
`
const Title = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: #111111;
  margin: 0 0 20px;
  @media (max-width: 550px) {
    font-size: 20px;
    margin: 0 0 10px;
  }
`
const SubTitle = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #3F4E65;
  @media (max-width: 550px) {
    font-size: 12px;
  }
`
