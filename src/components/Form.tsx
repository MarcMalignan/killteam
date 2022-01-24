import React, { FC } from "react";
import styled from "styled-components";

export const FIELD_HEIGHT = 30;

interface FieldContainerProps {
  small?: boolean;
}

type FieldProps = {
  className?: string;
  id?: string;
  label?: string;
} & FieldContainerProps;

export const Field: FC<FieldProps> = ({ children, className, id, label }) => (
  <FieldContainer className={className}>
    {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
    {children}
  </FieldContainer>
);

const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  width: ${({ small }) => (small ? "75%" : "100%")};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.sizes.md};
  }
`;

const FieldLabel = styled.label`
  width: 25%;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent2};
`;

export const Input = styled.input`
  flex-grow: 1;
  height: ${FIELD_HEIGHT}px;
  padding: ${({ theme }) => `${theme.sizes.xs} ${theme.sizes.sm}`};
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.accent2};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  flex-grow: 1;
  height: ${FIELD_HEIGHT * 5}px;
  min-height: ${FIELD_HEIGHT}px;
  padding: ${({ theme }) => `${theme.sizes.xs} ${theme.sizes.sm}`};
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.accent2};
  outline: none;
  font-family: ${({ theme }) => theme.fonts.text};
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  flex-grow: 1;
  height: ${FIELD_HEIGHT}px;
  padding: ${({ theme }) => `${theme.sizes.xs} ${theme.sizes.sm}`};
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.accent2};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
