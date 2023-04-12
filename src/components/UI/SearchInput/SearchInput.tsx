import React, {useState} from 'react';
import styled, {css} from "styled-components";
import SearchIcon from "assets/svg/search.svg";
import {createSearchParams, useNavigate} from "react-router-dom";

interface SearchInputProps {
    isHeader?: boolean
    setSearchValue?: (e: string) => void
    className?: string
}
export const SearchInput: React.FC<SearchInputProps> = ({setSearchValue, isHeader = false, className}) => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(!isHeader)
    const [value, setValue] = useState<string>("")

    const search = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault()
        setValue("")
        navigate(
            {
                pathname: "/catalog",
                search: createSearchParams({
                    name: value
                }).toString()
            }
        )
    }
    const filter = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault()
        !!setSearchValue && setSearchValue(value)
    }

    return (
        <Container
            className={className}
            $isHeader={isHeader}
            onSubmit={(e) => isHeader ? search(e) : filter(e)}
        >
            {isHeader &&
                <MobileContainer onClick={() => setIsOpen(true)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5294 15.5294L12.0989 12.0928L15.5294 15.5294ZM14 7.5C14 9.22391 13.3152 10.8772 12.0962 12.0962C10.8772 13.3152 9.22391 14 7.5 14C5.77609 14 4.12279 13.3152 2.90381 12.0962C1.68482 10.8772 1 9.22391 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5V7.5Z" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <MobileContainerText>Поиск</MobileContainerText>
                </MobileContainer>
            }
            <InputContainer $isOpen={isOpen} $isHeader={isHeader}>
                <Input
                    $isHeader={isHeader}
                    placeholder="Поиск..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    data-testid="input"
                />
                <Btn $isHeader={isHeader}>
                    <img src={SearchIcon} alt="" onClick={(e) => isHeader ? search(e) : filter(e)}/>
                    {isHeader &&
                        <CloseBtn onClick={() => setIsOpen(false)}>+</CloseBtn>
                    }
                </Btn>
            </InputContainer>
        </Container>
    );
};

const Container = styled.form<{$isHeader: boolean}>`
  position: relative;
  ${({$isHeader}) => $isHeader ? css`
    @media (max-width: 1750px) {
      width: auto;
    }
    @media (max-width: 1685px) {
      width: 400px;
    }
    @media (max-width: 900px) {
      width: 100%;
    }
  `
    : css`width: 100%;`
};
`
const InputContainer = styled.div<{$isOpen: boolean; $isHeader: boolean}>`
  background: #EDEDED;
  border-radius: 36px;
  transition: all .5s ease;
  ${({$isOpen, $isHeader}) => $isHeader && css`
    @media (max-width: 900px) {
      visibility: ${$isOpen ? "visible" : "hidden"};
      opacity: ${$isOpen ? 1 : 0};
      transform: ${$isOpen ? "translateX(0px)": "translateX(20px)"};
      position: absolute;
      top: -5px;
      left: -100%;
      width: 197%;
    }
  `};
`
const MobileContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    padding: 7.5px 0;
    border-left: 1px dashed rgba(63, 78, 101, 0.1);
    svg {
      stroke: #3F4E65;
    }
  }
`
const MobileContainerText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #3F4E65;
`
const Input = styled.input<{$isHeader: boolean}>`
  width: 100%;
  height: 100%;
  padding: 20px 55px 20px 20px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
  opacity: 0.6;
  background: none;
  transition: opacity .3s ease;
  &:focus {
    outline: none;
    opacity: 1;
  }
  ${({$isHeader}) => $isHeader && css`
    @media (max-width: 900px) {
      padding: 13px 55px 13px 20px;
    }
  `};
`
const Btn = styled.div<{$isHeader: boolean}>`
  display: flex;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  gap: 5px;
  img {
    cursor: pointer;
    background: #FFC85E;
    border-radius: 100%;
    padding: 13px 11px 11px 13px;
  }
  ${({$isHeader}) => $isHeader && css`
    @media (max-width: 900px) {
      right: 5px;
      img {
        padding: 8px 12px 6px 12px;
      }
    }
  `};
`
const CloseBtn = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  line-height: 120%;
  background: rgb(203, 203, 203);
  @media (max-width: 900px) {
    transform: rotate(45deg);
    display: flex;
  }
`
