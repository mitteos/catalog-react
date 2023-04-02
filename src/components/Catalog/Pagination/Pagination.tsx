import React from 'react';
import ArrowIcon from "assets/svg/arrowPagination.svg";
import styled from "styled-components";
import {useAppSelector} from "hooks/redux";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

export const Pagination = () => {

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const currentPage = searchParams.get("page") || 1

    const {products} = useAppSelector(state => state.product)
    const pageCount = Math.ceil(products.length / 6)

    const pageCollection = []
    for(let i = 0; i < pageCount; i++) {
        pageCollection.push({id: i, value: i + 1})
    }

    const handleChangePage = (id: number) => {
        if(id < 1) return
        document.documentElement.scrollTo(0, 0)
        navigate({
            pathname: "/catalog",
            search: createSearchParams({
                page: id.toString()
            }).toString()
        })
    }

    return (
        <Container>
            <PaginationControlLeft src={ArrowIcon}  onClick={() => handleChangePage(+currentPage - 1)}/>
            <PaginationRow>
                {pageCollection.map(el =>
                    <PaginationItem
                        key={el.id}
                        $isActive={el.value === +currentPage}
                        onClick={() => handleChangePage(el.value)}
                    >
                        {el.value}
                    </PaginationItem>
                )}
            </PaginationRow>
            <PaginationControlRight src={ArrowIcon} onClick={() => handleChangePage(+currentPage + 1)}/>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`
const PaginationControlLeft = styled.img`
  width: 9px;
  height: 16px;
  cursor: pointer;
`
const PaginationControlRight = styled(PaginationControlLeft)`
  transform: rotate(180deg);
`
const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`
const PaginationItem = styled.p<{$isActive?: boolean}>`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #3F4E65;
  &::after {
    display: ${({$isActive}) => $isActive ? "block" : "none"};
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 35px;
    height: 35px;
    background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
    border-radius: 100%;
  }
  
`
