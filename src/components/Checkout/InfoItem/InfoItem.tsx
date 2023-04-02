import React from 'react';
import styled from "styled-components";

interface InfoItemProps {
    icon: string
    title: string
    desc: string
}

export const InfoItem: React.FC<InfoItemProps> = ({desc, title, icon}) => {
    return (
        <Container>
            <Header>
                <Icon>
                    <img src={icon} alt=""/>
                </Icon>
                <HeaderText>{title}</HeaderText>
            </Header>
            <Description>{desc}</Description>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  padding: 15px;
  background: #FFFFFF;
  box-shadow: 0px 14px 39px -11px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const Icon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #111111;
`
const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  white-space: pre-line;
`
