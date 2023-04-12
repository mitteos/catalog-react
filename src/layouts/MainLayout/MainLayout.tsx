import React, {useEffect} from 'react';
import {Footer, Header} from "components/Layout";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const location = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.div`
  flex: auto;
  margin: 45px 0 100px 0;
  @media (max-width: 900px) {
    margin: 20px 0 50px 0;
  }
`
