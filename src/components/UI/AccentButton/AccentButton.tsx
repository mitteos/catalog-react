import React from 'react';
import styled from "styled-components";

interface AccentButtonProps {
    className?: string;
    children: React.ReactNode
    onClick?: () => void
}

export const AccentButton: React.FC<AccentButtonProps> = ({children, className, onClick}) => {
    return (
        <Container className={className} onClick={onClick}>
            {children}
        </Container>
    );
};

const Container = styled.div`
  background: #FFC85E;
  border-radius: 79px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
