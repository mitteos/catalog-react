import React from 'react';
import styled from "styled-components";
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
    title: string
    type?: string;
    required?: boolean;
    placeholder: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    errors: FieldError | undefined;
    minLength?: number;
    maxLength?: number;
    className?: string;
}

export const TextArea = <T extends FieldValues>({className, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false, title}: TextAreaProps<T>) => {
    return (
        <Container className={className}>
            <Title>
                {title}
                <InputContainer>
                    <Input
                        placeholder={placeholder}
                        {...register(name, {required: required})}
                    />
                </InputContainer>
            </Title>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
`
const Title = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const InputContainer = styled.div`
  width: 100%;
  background: #EDEDED;
  border-radius: 36px;
  height: 324px;
`
const Input = styled.textarea`
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  padding: 20px 30px;
  &:focus {
    outline: none;
  }
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
`
