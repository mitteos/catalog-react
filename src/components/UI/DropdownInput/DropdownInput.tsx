import React, {useEffect, useState} from 'react';
import styled from "styled-components";

interface DropdownInputProps {
    title: string
    headValue: string
    children: React.ReactNode
}

export const DropdownInput: React.FC<DropdownInputProps> = ({children, title, headValue}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsOpen(false)
    }, [headValue])

    return (
        <Container>
            <Title>{title}</Title>
            <InputContainer $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <InputHeader>
                    <InputHeaderText>{headValue}</InputHeaderText>
                    <InputHeaderArrow $isOpen={isOpen}/>
                </InputHeader>
                <List $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                    {children}
                </List>
            </InputContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const InputContainer = styled.div<{$isOpen: boolean}>`
  position: relative;
  width: 100%;
  background: #EDEDED;
  border-radius: 36px;
  padding: 20px 30px;
  cursor: pointer;
  border-bottom-left-radius: ${({$isOpen}) => $isOpen ? 0 : 36}px;
  border-bottom-right-radius: ${({$isOpen}) => $isOpen ? 0 : 36}px;
`
const InputHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputHeaderText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
`
const InputHeaderArrow = styled.div<{$isOpen: boolean}>`
  width: 7px;
  height: 7px;
  transition: all .3s ease;
  transform: ${({$isOpen}) => !$isOpen ? "translateY(-3px) rotate(180deg)" : "translateY(3px)"};
  border: 5px solid transparent;
  border-top: 7px solid #3F4E65;
`
const List = styled.div<{$isOpen: boolean}>`
  z-index: 1;
  background: #EDEDED;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 58px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  transition: all .3s ease;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  padding: 0 20px 20px 20px;
  visibility: ${({$isOpen}) => $isOpen ? "visible" : "hidden"};
  opacity: ${({$isOpen}) => $isOpen ? 1 : 0};
`
