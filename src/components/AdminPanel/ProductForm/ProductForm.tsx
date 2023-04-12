import React, {useState} from 'react';
import {AccentButton, DropdownInput, TextInput} from "components/UI";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {BrandState} from "store/features/brand/types";
import {SubmitHandler, useForm} from "react-hook-form";
import {TypeState} from "store/features/type/types";
import {ProductState} from "store/features/product/types";
import ProductIcon from "assets/img/product1.png";
import {productActions} from "store/features/product";
import {useNavigate} from "react-router-dom";

interface ProductFormProps {
    className?: string
    isNewProduct: boolean
    productInfo?: ProductState
}

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

export const ProductForm: React.FC<ProductFormProps> = ({isNewProduct, className, productInfo = {} as ProductState}) => {

    const {items: brands} = useAppSelector(state => state.brand)
    const {items: types} = useAppSelector(state => state.type)
    const [brandValue, setBrandValue] = useState<BrandState>(brands[0])
    const {register, handleSubmit, formState: { errors }, reset} = useForm<ProductInputs>({defaultValues: {
            name: productInfo?.name,
            barcode: +productInfo?.barcode,
            description: productInfo?.description,
            price: productInfo?.price,
            sizeValue: productInfo?.sizeValue,
            vendor: productInfo?.vendor?.toString()
        }})
    const [sizeTypeValue, setSizeTypeValue] = useState(sizeTypeCollection[0])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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
            id: isNewProduct ? Date.now() : productInfo.id,
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
        if(isNewProduct) {
            dispatch(productActions.addNewProduct(info))
        } else {
            dispatch(productActions.changeProduct(info))
            navigate("/admin")
        }
        reset()
    }

    return (
        <Container className={className} data-testid="product-form">
            <Item onSubmit={handleSubmit(handleCreateProduct)}>
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
                    headValue={brandValue?.name}
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
                        headValue={el.selectedValue?.name}
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
                {isNewProduct ? "Создать товар" : "Применить редактирование"}
            </CreateProductBtn>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Item = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
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
  padding: 20px;
`
