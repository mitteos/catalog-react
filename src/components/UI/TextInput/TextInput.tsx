import React from 'react';
import styled from "styled-components";
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface TextInputProps<T extends FieldValues> {
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

export const TextInput = <T extends FieldValues>({className, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false, title}: TextInputProps<T>) => {
    return (
        <Container className={className}>
            <Title>
                {title}
                <InputContainer $isError={!!errors}>
                    <Input
                        placeholder={placeholder}
                        type={type}
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
const InputContainer = styled.div<{$isError: boolean}>`
  width: 100%;
  background: #EDEDED;
  border-radius: 36px;
  border: 1px solid ${({$isError}) => $isError ? "rgb(241, 73, 73, 0.45)" : "#EDEDED"};
`
const Input = styled.input`
  background: none;
  width: 100%;
  border: none;
  padding: 18px 30px;
  &:focus {
    outline: none;
  }
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
`
