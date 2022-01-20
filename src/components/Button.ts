import styled from "styled-components";

interface ButtonProps {
  small?: boolean;
  square?: boolean;
}

const BUTTON_HEIGHT = 40;
const BUTTON_HEIGHT_SM = 25;

export const Button = styled.button<ButtonProps>`
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
  color: ${({ theme }) => theme.colors.accent2};
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
    background: ${({ theme }) => theme.colors.accent2};
    border-color: ${({ theme }) => theme.colors.accent2};
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

export const DangerButton = styled(Button)`
  color: ${({ theme }) => theme.colors.accent};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text2};
  }
`;
