import React, {useState} from 'react';
import styled from "styled-components";
import {AccentButton, DropdownInput, TextInput} from "components/UI";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {BrandState} from "store/features/brand/types";
import {TypeState} from "store/features/type/types";
import {SubmitHandler, useForm} from "react-hook-form";
import {ProductState} from "store/features/product/types";
import ProductIcon from "assets/img/product1.png";
import {productActions} from "store/features/product";

interface TypesSelectors {
    id: number
    types: TypeState[]
    selectedValue: TypeState
}

interface ProductInputs {
    name: string
    description: string
    sizeValue: number
    barcode: number
    price: number
    vendor: string;
}

const sizeTypeCollection: {id: number, name: string, value: "volume" | "weight"}[] = [
    {id: 1, name: "Объем", value: "volume"},
    {id: 2, name: "Вес", value: "weight"},
]

export const AdminPanel = () => {

    const {items: brands} = useAppSelector(state => state.brand)
    const {items: types} = useAppSelector(state => state.type)
    const [brandValue, setBrandValue] = useState<BrandState>(brands[0])
    const {register, handleSubmit, formState: { errors }, reset} = useForm<ProductInputs>()
    const [sizeTypeValue, setSizeTypeValue] = useState(sizeTypeCollection[0])
    const dispatch = useAppDispatch()

    const [typesValues, setTypesValues] = useState<TypesSelectors[]>([
        {
            id: 1,
            types: types,
            selectedValue: types[0]
        }
    ])

    const handleSelectType = (el: TypesSelectors, typeLocal: TypeState) => {
        setTypesValues(typesValues.map(type => {
            if(type.id === el.id) {
                return {
                    ...type,
                    selectedValue: typeLocal
                }
            }
            return type
        }))
    }

    const handleAddType = () => {
        setTypesValues([...typesValues, {
            id: Date.now(),
            types: types,
            selectedValue: types[0]
        }])
    }

    const handleCreateProduct: SubmitHandler<ProductInputs> = (formFields) => {
        const info: ProductState = {
            id: Date.now(),
            name: formFields.name,
            price: formFields.price,
            vendor: +formFields.vendor,
            barcode: formFields.barcode.toString(),
            sizeValue: formFields.sizeValue,
            brandId: brandValue.id,
            img: ProductIcon,
            typeId: typesValues.map(el => el.selectedValue.id),
            description: formFields.description,
            manufacturer: brandValue.name,
            sizeType: sizeTypeValue.value
        }
        dispatch(productActions.addNewProduct(info))
        reset()
    }

    return (
        <Container>
            <Title>Админ панель</Title>
            <Item onSubmit={handleSubmit(handleCreateProduct)}>
                <Subtitle>Добавление товара</Subtitle>
                <TextInput
                    title="Название"
                    placeholder="Введите название товара"
                    name="name"
                    errors={errors.name}
                    register={register}
                    required={true}
                />
                <TextInput
                    title="Описание"
                    placeholder="Введите описание товара"
                    name="description"
                    errors={errors.description}
                    register={register}
                    required={true}
                />
                <TextInput
                    title="Размер"
                    placeholder="Введите вес или объем"
                    name="sizeValue"
                    errors={errors.sizeValue}
                    register={register}
                    required={true}
                />
                <DropdownInput title="Тип размера" headValue={sizeTypeValue.name}>
                    {sizeTypeCollection.map(el =>
                        <DropDownItem key={el.id} onClick={() => setSizeTypeValue(el)}>{el.name}</DropDownItem>
                    )}
                </DropdownInput>
                <TextInput
                    title="Штрихкод"
                    placeholder="Введите штрихкод товара"
                    name="barcode"
                    errors={errors.barcode}
                    register={register}
                    required={true}
                />
                <TextInput
                    title="Цена"
                    placeholder="Введите цену товара"
                    name="price"
                    errors={errors.price}
                    register={register}
                    required={true}
                />
                <TextInput
                    title="Артикул"
                    placeholder="Введите артикул товара"
                    name="vendor"
                    errors={errors.vendor}
                    register={register}
                    required={true}
                />
                <DropdownInput
                    title="Производитель"
                    headValue={brandValue.name}
                >
                    {brands.map(brand =>
                        <DropDownItem
                            key={brand.id}
                            onClick={() => setBrandValue(brand)}
                        >{brand.name}</DropDownItem>
                    )}
                </DropdownInput>
                {typesValues.map((el, i) =>
                    <DropdownInput
                        key={el.id}
                        title="Тип ухода"
                        headValue={el.selectedValue.name}
                    >
                        {el.types.map(type =>
                            <DropDownItem
                                key={type.id}
                                onClick={() => handleSelectType(el, type)}
                            >{type.name}</DropDownItem>
                        )}
                    </DropdownInput>
                )}
                <AddTypeBtn onClick={handleAddType}>Добавить тип</AddTypeBtn>
            </Item>
            <CreateProductBtn onClick={handleSubmit(handleCreateProduct)}>
                Создать товар
            </CreateProductBtn>
        </Container>
    );
};

const Container =  styled.div`
  max-width: 1369px;
  margin: 0 auto;
  width: 71.3%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1200px) {
    width: 90%;
  }
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: #111111;
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`
const Item = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const Subtitle = styled(Title)`
  text-transform: capitalize;
  font-size: 25px;
  margin: 0 0 10px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`
const DropDownItem = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`
const AddTypeBtn = styled(AccentButton)`
  width: 200px;
  padding: 10px 0;
`
const CreateProductBtn = styled(AccentButton)`
  width: 200px;
  padding: 20px 0;
`
