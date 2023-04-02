import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

interface AccentLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode
}

export const AccentLink: React.FC<AccentLinkProps> = ({children, className, href}) => {
    return (
        <Container className={className} to={href}>
            {children}
        </Container>
    );
};

const Container = styled(Link)`
  background: #FFC85E;
  border-radius: 79px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
