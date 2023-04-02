import React from 'react';
import styled from "styled-components";
import CloseIcon from "assets/svg/close.svg";
import {useNavigate} from "react-router-dom";

interface ModalProps {
    isActive: boolean
    setIsActive: (e: boolean) => void
    children: React.ReactNode
    className?: string
}

export const Modal: React.FC<ModalProps> = ({isActive, setIsActive, children, className}) => {

    const navigate = useNavigate()
    const closeModal = () => {
        setIsActive(false)
        setTimeout(() => {
            navigate("/catalog")
        }, 500)
    }

    return (
        <Container $isActive={isActive} onClick={closeModal}>
            <Content
                className={className}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseBtn onClick={closeModal}>
                    <img src={CloseIcon} alt=""/>
                </CloseBtn>
                {children}
            </Content>
        </Container>
    );
};

const Container = styled.div<{$isActive: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
  opacity: ${({$isActive}) => $isActive ? 1 : 0};
  visibility: ${({$isActive}) => $isActive ? "visible" : "hidden"};
`
const Content = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`
