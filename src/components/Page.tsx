import React, { FC } from "react";
import styled from "styled-components";

export const Page: FC<{}> = ({ children }) => {
  return (
    <PageContainer>
      <PageInner>{children}</PageInner>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.sizes.md};
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  overflow: auto;

  @media print {
    max-width: none;
    padding: ${({ theme }) => theme.sizes.sm};
    background: none;
    box-shadow: none;
    overflow: visible;
  }
`;

const PageInner = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.sizes.xl} 0;
  border: 4px double ${({ theme }) => theme.colors.bg2};

  @media print {
    padding: ${({ theme }) => theme.sizes.lg} 0;
  }
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.sizes.xl};
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.accent};

  i {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.accent2};
  }

  @media print {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const SubTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.sizes.md};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};

  i {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const Section = styled.section`
  padding: 0 ${({ theme }) => theme.sizes.lg};
`;

export const Separator = styled.hr`
  margin: ${({ theme }) => theme.sizes.lg} 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.bg2};
`;
