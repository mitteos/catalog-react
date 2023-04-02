import React, {useState} from 'react';
import styled from "styled-components";

interface DropdownProps {
    title: string
    children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({title, children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Container>
            <DropdownHead onClick={() => setIsOpen(!isOpen)}>
                <p>{title}</p>
                <DropdownHeadArrow $isOpen={isOpen}/>
            </DropdownHead>
            <DropdownText $isOpen={isOpen}>
                {children}
            </DropdownText>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const DropdownHead = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #111111;
  }
`
const DropdownHeadArrow = styled.div<{$isOpen?: boolean}>`
  width: 7px;
  height: 7px;
  transition: all .3s ease;
  transform: ${({$isOpen}) => $isOpen ? "translateY(-3px) rotate(180deg)" : "translateY(3px)"};
  border: 5px solid transparent;
  border-top: 7px solid #3F4E65;
`
const DropdownText = styled.div<{$isOpen?: boolean}>`
  overflow: hidden;
  max-height: ${({$isOpen}) => $isOpen ? 300 : 0}px;
  margin-top: ${({$isOpen}) => $isOpen ? 15 : 0}px;
  transition: all .3s ease, margin-bottom 0s;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  width: 100%;
`
