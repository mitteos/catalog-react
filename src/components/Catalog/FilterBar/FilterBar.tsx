import React, {useState} from 'react';
import styled from "styled-components";
import ClearIcon from "assets/svg/basket.svg";
import Brand1Icon from "assets/img/brand1.png";
import Brand2Icon from "assets/img/brand2.png";
import Brand3Icon from "assets/img/brand3.png";
import Brand4Icon from "assets/img/brand4.png";
import Brand5Icon from "assets/img/brand5.png";
import BackIcon from "assets/svg/arrowBtn.svg";
import {AccentButton, SearchInput} from "components/UI";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {productActions} from "store/features/product";

interface FilterBarProps {
    className?: string
}

const brandIconsList = [
    {id: 1, src: Brand1Icon},
    {id: 2, src: Brand2Icon},
    {id: 3, src: Brand3Icon},
    {id: 4, src: Brand4Icon},
    {id: 5, src: Brand5Icon}
]

export const FilterBar: React.FC<FilterBarProps> = ({className}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {items} = useAppSelector(state => state.type)
    const {selectedType, selectedBrand, selectedPrice} = useAppSelector(state => state.product)
    const {items: brands} = useAppSelector(state => state.brand)
    const dispatch = useAppDispatch()
    const [priceValue, setPriceValue] = useState(selectedPrice)
    const [localSelectedBrands, setLocalSelectedBrands] = useState<number[]>(selectedBrand)
    const [brandLimit, setBrandLimit] = useState<number>(3)
    const [searchValue, setSearchValue] = useState("")

    const handleSetFilter = () => {
        dispatch(productActions.setFilterValues({
            selectedPrice: priceValue,
            selectedBrand: localSelectedBrands
        }))
    }
    const handleSetLocalBrands = (id: number) => {
        localSelectedBrands.includes(id)
            ? setLocalSelectedBrands(localSelectedBrands.filter(el => el !== id))
            : setLocalSelectedBrands([...localSelectedBrands, id])
    }

    const handleClearFilter = () => {
        setLocalSelectedBrands([])
        setPriceValue({min: 0, max: 10000})
        dispatch(productActions.setFilterValues({
            selectedPrice: {min: 0, max: 10000},
            selectedBrand: []
        }))
    }

    const setTypeFilter = (id: number) => {
        if(selectedType === id) {
            dispatch(productActions.setSelectedType(null))
        } else {
            dispatch(productActions.setSelectedType(id))
        }
    }

    return (
        <Container className={className}>
            <Header onClick={() => setIsOpen(!isOpen)}>
                <Title>ПОДБОР ПО ПАРАМЕТРАМ</Title>
                <HeaderMobileBtn $isOpen={isOpen}>
                    <img src={BackIcon} alt=""/>
                </HeaderMobileBtn>
            </Header>
            <Content $isOpen={isOpen}>
                <Item>
                    <ItemTitle>
                        Цена
                        <ItemTitleInner>₸</ItemTitleInner>
                    </ItemTitle>
                    <Price>
                        <PriceCount value={priceValue.min} onChange={(e) => setPriceValue({...priceValue, min: +e.target.value})}/>
                        <PriceSeparate>-</PriceSeparate>
                        <PriceCount value={priceValue.max} onChange={(e) => setPriceValue({...priceValue, max: +e.target.value})}/>
                    </Price>
                </Item>
                <Item>
                    <Title>Производитель</Title>
                    <SearchInput setSearchValue={setSearchValue}/>
                    <List>
                        {brands.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, brandLimit).map(brand =>
                            <ListItem
                                key={brand.id}
                                onClick={() => handleSetLocalBrands(brand.id)}
                            >
                                <ListItemCheckbox $isActive={localSelectedBrands.includes(brand.id)}/>
                                <ListItemInner>
                                    {brand.name}
                                    <span>(56)</span>
                                </ListItemInner>
                            </ListItem>
                        )}
                    </List>
                    {brandLimit !== brands.length &&
                        <GetAll onClick={() => setBrandLimit(brands.length)}>
                            <GetAllText>Показать все</GetAllText>
                            <GetAllArrow />
                        </GetAll>
                    }
                </Item>
                <Control>
                    <ControlSubmit onClick={handleSetFilter}>
                        <p>Показать</p>
                    </ControlSubmit>
                    <ControlClear onClick={handleClearFilter}>
                        <img src={ClearIcon} alt=""/>
                    </ControlClear>
                </Control>
                <Separator />
                <Categories>
                    {items.map(type =>
                        <div key={type.id}>
                            <Item onClick={() => setTypeFilter(type.id)}>
                                <CategoryTitle $isActive={type.id === selectedType}>{type.name}</CategoryTitle>
                            </Item>
                            <Separator />
                        </div>
                    )}
                    <Item>
                        <CategoryTitle>Бренды</CategoryTitle>
                        <BrandList>
                            {brandIconsList.map(brand =>
                                <BrandItem key={brand.id} href="">
                                    <img src={brand.src} alt=""/>
                                </BrandItem>
                            )}
                        </BrandList>
                        <GetAll>
                            <GetAllText>Показать все</GetAllText>
                            <GetAllArrow />
                        </GetAll>
                    </Item>
                </Categories>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  max-width: 238px;
  width: 100%;
`
const Header = styled.div`
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`
const HeaderMobileBtn = styled.div<{$isOpen: boolean}>`
  width: 32px;
  height: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(255, 202, 101, 0.3);
  border-radius: 100%;
  img {
    transition: all .3s ease;
    transform: rotate(${({$isOpen}) => $isOpen ? -90 : 90}deg);
  }
  @media (max-width: 900px) {
    display: flex;
  }
`
const Content = styled.div<{$isOpen: boolean}>`
  @media (max-width: 900px) {
    overflow: hidden;
    transition: all 0.5s ease;
    max-height: ${({$isOpen}) => $isOpen ? 2000 : 0}px;
  }
`
const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  margin: 0 0 10px;
`
const Separator = styled.div`
  width: 100%;
  height: 0;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
  margin: 20px 0;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const ItemTitle = styled.div`
  display: flex;
  gap: 5px;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
`
const ItemTitleInner = styled.p`
  font-weight: 500;
  color: #111111;
`
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 30px;
`
const PriceCount = styled.input`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #3F4E65;
  padding: 4px 0;
  background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
  border-radius: 14px;
  border: none;
  min-width: 0;
  &:focus {
    outline: none;
  }
`
const PriceSeparate = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #3F4E65;
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const ListItemCheckbox = styled.div<{$isActive?: boolean}>`
  width: 10px;
  height: 10px;
  border: 0.5px solid ${({$isActive}) => $isActive ? "#FFC85E" : "#3F4E65"};
  border-radius: 1px;
  margin: 0 10px 0;
  background: ${({$isActive}) => $isActive && "#FFC85E"};
`
const ListItemInner = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
  span {
    font-size: 10px;
    margin: 0 0 0 5px;
  }
`
const GetAll = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const GetAllText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
`
const GetAllArrow = styled.div`
  width: 7px;
  height: 7px;
  transform: translateY(3px);
  border: 5px solid transparent;
  border-top: 7px solid #3F4E65;
`
const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0 40px;
  justify-content: space-between;
`
const ControlSubmit = styled(AccentButton)`
  padding: 21px 0;
  width: 100%;
`
const ControlClear = styled(AccentButton)`
  padding: 17px;
  border-radius: 100%;
`
const CategoryTitle = styled(Title)<{$isActive?: boolean}>`
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s ease;
  color: ${({$isActive}) => $isActive && "#FFC85E"}
`
const BrandList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const BrandItem = styled.a`
  display: flex;
  flex: auto;
  justify-content: center;
  padding: 10px 0;
  background: #FFFFFF;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
`
const Categories = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`
