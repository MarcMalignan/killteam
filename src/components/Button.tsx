import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface ButtonContainerProps {
  danger?: boolean;
  small?: boolean;
  square?: boolean;
}

type ButtonProps = {
  danger?: boolean;
  disabled?: boolean;
  icon?: IconDefinition;
  label?: string;
  onClick?: () => void;
  title?: string;
} & ButtonContainerProps;

export const Button = ({ icon, label, ...rest }: ButtonProps) => (
  <ButtonContainer {...rest}>
    {icon && <FontAwesomeIcon icon={icon} />}
    {label && <span>{label}</span>}
  </ButtonContainer>
);

const BUTTON_HEIGHT = 40;
const BUTTON_HEIGHT_SM = 25;

const ButtonContainer = styled.button<ButtonContainerProps>`
  height: ${({ small }) => (small ? BUTTON_HEIGHT_SM : BUTTON_HEIGHT)}px;
  width: ${({ small, square }) => {
    if (square) {
      return `${small ? BUTTON_HEIGHT_SM : BUTTON_HEIGHT}px`;
    }
    return "auto";
  }};
  margin: 0;
  padding: ${({ small, square, theme }) => {
    if (square) return "none";
    return small ? `0 ${theme.sizes.sm}` : `0 ${theme.sizes.md}`;
  }};
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.bg2};
  color: ${({ danger, theme }) =>
    danger ? theme.colors.accent : theme.colors.accent2};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ small, theme }) =>
    small ? theme.fontSizes.xs : theme.fontSizes.md};
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.sizes.xs};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: ${({ danger, theme }) =>
      danger ? theme.colors.accent : theme.colors.accent2};
    border-color: ${({ danger, theme }) =>
      danger ? theme.colors.accent : theme.colors.accent2};
    color: ${({ theme }) => theme.colors.text2};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & span:first-child {
    margin-right: ${({ theme }) => theme.sizes.sm};
  }
  & span:last-child {
    margin-left: ${({ theme }) => theme.sizes.sm};
  }
`;
