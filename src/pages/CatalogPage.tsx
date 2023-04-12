import React from 'react';
import styled from "styled-components";
import {CategorySort, FilterBar, SelectSort} from "components/Catalog";
import {ProductList} from "components/Products";
import {Crumbs} from "components/Layout";

export const CatalogPage = () => {
    return (
        <Container data-testid="main-page">
            <Crumbs>
                <CrumbItem>Косметика и гигиена</CrumbItem>
            </Crumbs>
            <Grid>
                <HeaderTitle>Косметика и гигиена</HeaderTitle>
                <HeaderSelect />
                <Categories />
                <Filter />
                <Products />
            </Grid>
        </Container>
    );
};

const Container =  styled.div`
  max-width: 1369px;
  margin: 0 auto;
  width: 71.3%;
  @media (max-width: 1200px) {
    width: 90%;
  }
`
const CrumbItem = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  opacity: 0.5;
`
const HeaderTitle = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: #111111;
  grid-column: 1/3;
  margin: 0 0 -5px;
  @media (max-width: 900px) {
    grid-column: 1/4;
    grid-row: 1/2;
  }
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`
const HeaderSelect = styled(SelectSort)`
  grid-column: 3/4;
  justify-content: flex-end;
  margin: 0 0 -5px;
  @media (max-width: 900px) {
    grid-column: 1/4;
    grid-row: 4/5;
    justify-content: flex-start;
  }
`
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 238px 1fr auto;
  grid-template-rows: auto auto;
  gap: 30px;
  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(5, auto);
  }
`
const Categories = styled(CategorySort)`
  grid-column: 1/4;
  @media (max-width: 900px) {
    grid-column: 1/4;
    grid-row: 3/4;
    flex-direction: column;
    gap: 10px;
  }
`
const Filter = styled(FilterBar)`
  @media (max-width: 900px) {
    grid-column: 1/4;
    grid-row: 2/3;
    max-width: none;
  }`
const Products = styled(ProductList)`
  grid-column: 2/4;
  @media (max-width: 900px) {
  grid-column: 1/4;
  grid-row: 5/6;
}
`
