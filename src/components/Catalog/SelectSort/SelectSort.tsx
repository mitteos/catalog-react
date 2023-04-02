import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {productActions} from "store/features/product";

interface SelectSortProps {
    className?: string
}

interface SortValue {
    id: number
    name: string
    value: "name-decrease" | "name-increase" | "price-decrease" | "price-increase"
}

const sortCollection: SortValue[] = [
    {id: 1, name: "Название", value: "name-decrease"},
    {id: 2, name: "Название", value: "name-increase"},
    {id: 3, name: "Цена", value: "price-decrease"},
    {id: 4, name: "Цена", value: "price-increase"},
]

export const SelectSort: React.FC<SelectSortProps> = ({className}) => {

    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)
    const {sortValue} = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    const selectSortValue = (selectedSort: "name-decrease" | "name-increase" | "price-decrease" | "price-increase") => {
        setIsSelectOpen(false)
        dispatch(productActions.setSortValue(selectedSort))
    }

    return (
        <Container className={className}>
            <Title>Сортировка:</Title>
            <Select>
                <SelectItem onClick={() => setIsSelectOpen(!isSelectOpen)}>
                    <SortNameText>{sortCollection.find(el => el.value === sortValue)?.name}</SortNameText>
                    <SortHeadArrow $variant={sortValue}/>
                </SelectItem>
                <SelectContainer $isOpen={isSelectOpen}>
                    {sortCollection.map(el =>
                        el.value !== sortValue &&
                        <SelectItem key={el.id} onClick={() => selectSortValue(el.value)}>
                            <SortNameText>{el.name}</SortNameText>
                            <SortHeadArrow $variant={el.value}/>
                        </SelectItem>
                    )}
                </SelectContainer>
            </Select>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
`
const Select = styled.div`
  position: relative;
`
const SelectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  min-width: 90px;
`
const SortNameText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #3F4E65;
`
const SortHeadArrow = styled.div<{$variant: "name-decrease" | "name-increase" | "price-decrease" | "price-increase"}>`
  width: 7px;
  height: 7px;
  transform: translateY(${({$variant}) => $variant === "name-decrease" || $variant === "price-decrease" ? 3: -3}px);
  border: 5px solid transparent;
  ${({$variant}) => $variant === "name-decrease" || $variant === "price-decrease"
    ? css`border-top: 7px solid #3F4E65;`
    : css`border-bottom: 7px solid #3F4E65`
};
`
const SelectContainer = styled.div<{$isOpen: boolean}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 5px 0 0;
  gap: 5px;
  transition: all .3s ease;
  opacity: 0;
  background: #fff;
  visibility: hidden;
  ${({$isOpen}) => $isOpen && css`opacity: 1; visibility: visible`};
`
