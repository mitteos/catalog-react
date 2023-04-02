import React, {useState} from 'react';
import styled from "styled-components";
import {Crumbs} from "components/Layout";
import {AccentButton, DropdownInput, TextArea, TextInput} from "components/UI";
import {InfoList, ProductList, SuccessModal} from "components/Checkout";
import {useAppDispatch} from "hooks/redux";
import {cartActions} from "store/features/cart";
import {cities} from "utils/cities";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

interface CheckoutInputs {
    name: string
    phone: string
    email: string
    organization: string
    address: string
    comment: string
}

export const CheckoutPage = () => {

    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const [addressValue, setAddressValue] = useState({id: 0, name: "Выберите ваш город"} as {id: number, name: string})
    const {register, handleSubmit, formState: { errors }} = useForm<CheckoutInputs>()


    const makeOrder: SubmitHandler<CheckoutInputs> = (formFields) => {
        console.log(formFields);
        setIsModalActive(true)
        dispatch(cartActions.clearItems())
    }

    return (
        <>
            <Container>
                <Crumbs isCheckout={true}>
                    <CrumbsItem to="/cart">Корзина</CrumbsItem>
                    <CrumbSeparator />
                    <CrumbItemLast>Оформление заказа</CrumbItemLast>
                </Crumbs>
                <Title>Оформление заказа</Title>
                <Row onSubmit={handleSubmit(makeOrder)}>
                    <Column>
                        <InfoPart>
                            <InfoPartHeader>
                                <InfoPartNumber>1</InfoPartNumber>
                                <InfoPartTitle>Контактные данные</InfoPartTitle>
                            </InfoPartHeader>
                            <TextInput
                                title="Имя*"
                                placeholder="Введите ваше имя"
                                name="name"
                                register={register}
                                errors={errors.name}
                                required={true}
                            />
                            <TextInput
                                title="Телефон*"
                                placeholder="Введите ваш телефон"
                                name="phone"
                                register={register}
                                errors={errors.phone}
                                required={true}
                            />
                            <TextInput
                                title="E-mail*"
                                placeholder="Введите ваш E-mail"
                                name="email"
                                register={register}
                                errors={errors.email}
                                required={true}
                            />
                            <TextInput
                                title="Название организации"
                                placeholder="Введите название организации"
                                name="organization"
                                register={register}
                                errors={errors.organization}
                            />
                        </InfoPart>
                        <InfoPart>
                            <InfoPartHeader>
                                <InfoPartNumber>2</InfoPartNumber>
                                <InfoPartTitle>адрес доставки</InfoPartTitle>
                            </InfoPartHeader>
                            <DropdownInput title="Город" headValue={addressValue.name}>
                                {cities.map(city =>
                                    <DropDownItem
                                        key={city.id}
                                        onClick={() => setAddressValue(city)}
                                    >{city.name}</DropDownItem>
                                )}
                            </DropdownInput>
                            <TextInput
                                title="Адрес"
                                placeholder="Введите адрес доставки"
                                name="address"
                                register={register}
                                errors={errors.address}
                            />
                        </InfoPart>
                        <ConfirmBrn onClick={handleSubmit(makeOrder)}>Подтверждение заказа</ConfirmBrn>
                    </Column>
                    <ColumnAddition>
                        <InfoPart>
                            <InfoList />
                        </InfoPart>
                        <InfoPart>
                            <InfoPartHeader>
                                <InfoPartNumber>3</InfoPartNumber>
                                <InfoPartTitle>Дополнительно</InfoPartTitle>
                            </InfoPartHeader>
                            <TextArea
                                title="Комментарий"
                                placeholder="Введите ваш комментарий"
                                name="comment"
                                register={register}
                                errors={errors.comment}
                            />
                        </InfoPart>
                    </ColumnAddition>
                    <ColumnOrder>
                        <ProductList />
                        <CheckoutBtn onClick={handleSubmit(makeOrder)}>Подтверждение заказа</CheckoutBtn>
                    </ColumnOrder>
                </Row>
            </Container>
            <SuccessModal isActive={isModalActive} setIsActive={setIsModalActive}/>
        </>
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
const CrumbsItem = styled(Link)`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
`
const CrumbItemLast = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  opacity: 0.5;
`
const CrumbSeparator = styled.div`
  height: 16px;
  opacity: 0.3;
  border: 1px dashed #3F4E65;
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
const Row = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0 0;
  gap: 20px;
  @media (max-width: 1500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 664px) {
    width: 100%;
    margin: 26px 0 0 0;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 664px) {
    width: 100%;
    gap: 30px;
  }
`
const ColumnOrder = styled(Column)`
  gap: 0;
  width: 569px;
  @media (max-width: 1650px) {
    flex: auto;
  }
`
const CheckoutBtn = styled(AccentButton)`
  display: none;
  @media (max-width: 664px) {
    display: flex;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    padding: 31px 0;
    margin: 30px 0 0 0;
  }
`
const ColumnAddition = styled(Column)`
  @media (max-width: 664px) {
    flex-direction: column-reverse;
  }
`
const InfoPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 289px;
  @media (max-width: 664px) {
    width: 100%;
  }
`
const InfoPartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 0 15px;
`
const DropDownItem = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`
const InfoPartTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #111111;
`
const InfoPartNumber =styled.p`
  width: 35px;
  padding: 8.5px 0;
  text-align: center;
  border-radius: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #3F4E65;
  background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
`
const ConfirmBrn = styled(AccentButton)`
  width: 100%;
  padding: 21px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  @media (max-width: 664px) {
    display: none;
  }
`
