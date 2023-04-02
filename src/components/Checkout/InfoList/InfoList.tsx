import React from 'react';
import styled from "styled-components";
import PayIcon from "assets/svg/pay.svg";
import DeliveryIcon from "assets/svg/delivery.svg";
import QuestionsIcon from "assets/svg/questions.svg";
import {InfoItem} from "components/Checkout/InfoItem";

const infoCollection = [
    {id: 1, icon: PayIcon, title: "Оплата", desc: "Принимаем оплату наличными, по карте и через расчетный счет."},
    {id: 2, icon: DeliveryIcon, title: "Доставка", desc: "Бесплатная доставка от 10 000 ₸ по области. Наша доставка работает ежедневно."},
    {id: 3, icon: QuestionsIcon, title: "возникли вопросы?", desc: "Звоните: +7 777 490 00 91\n Менеджер Вам ответит на все вопросы."},
]

export const InfoList = () => {
    return (
        <Container>
            {infoCollection.map(el =>
                <InfoItem key={el.id} icon={el.icon} title={el.title} desc={el.desc} />
            )}
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
