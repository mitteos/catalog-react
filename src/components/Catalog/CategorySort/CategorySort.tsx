import React from 'react';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {productActions} from "store/features/product";

interface CategorySortProps {
    className?: string
}

export const CategorySort: React.FC<CategorySortProps> = ({className}) => {

    const {items} = useAppSelector(state => state.type)
    const {selectedType} = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    const setTypeFilter = (id: number) => {
        if(selectedType === id) {
            dispatch(productActions.setSelectedType(null))
        } else {
            dispatch(productActions.setSelectedType(id))
        }
    }

    return (
        <Container className={className}>
            {items.map(category =>
                <Item
                    key={category.id}
                    onClick={() => setTypeFilter(category.id)}
                    $isActive={category.id === selectedType}
                >{category.name}</Item>
            )}
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 11px;
  align-items: flex-start;
  flex-wrap: wrap;
`
const Item = styled.p<{$isActive: boolean}>`
  padding: 18px 14px;
  box-shadow: 0 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  align-self: stretch;
  align-items: center;
  max-width: 120px;
  cursor: pointer;
  transition: all .3s ease;
  @media (min-width: 900px) {
    background: ${({$isActive}) => $isActive ? "#FFC85E" : "#FFFFFF"};
    color: ${({$isActive}) => $isActive ? "#FFF" : "#3F4E65"};
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 70px -11px rgba(43, 28, 1, 0.2);
    }
  }
  @media (max-width: 900px) {
    padding: 0;
    background: none;
    box-shadow: none;
    border-radius: 0;
    text-align: left;
    max-width: none;
    color: ${({$isActive}) => $isActive ? "#FFC85E" : "#3F4E65"}
  }
`
