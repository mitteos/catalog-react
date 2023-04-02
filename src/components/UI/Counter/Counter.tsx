import React from 'react';
import styled from "styled-components";

interface CounterProps {
    count: number
    setCount: (e: number) => void
    change?: (e: number) => void
    className?: string
}

export const Counter: React.FC<CounterProps> = ({count, setCount, className, change}) => {

    const increase = () => {
        setCount(count + 1)
        change && change(count + 1)
    }
    const decrease = () => {
        if(count > 1) {
            setCount(count - 1)
            change && change(count - 1)
        }
    }

    return (
        <Container className={className}>
            <CounterBtn onClick={decrease}>-</CounterBtn>
            <CounterCount>{count}</CounterCount>
            <CounterBtn onClick={increase}>+</CounterBtn>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`
const CounterBtn = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 4px 0;
  width: 34px;
  background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
  border-radius: 100%;
`
const CounterCount = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #3F4E65;
`
