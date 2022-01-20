import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;

  & > * {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    justify-content: center;

    &:first-child {
      justify-content: flex-start;
    }
    &:last-child {
      justify-content: flex-end;
    }
  }
`;
