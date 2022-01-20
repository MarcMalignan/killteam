import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.sizes.xl} 0;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.sizes.xl};
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};
`;

export const SubTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.sizes.md};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Section = styled.section`
  padding: 0 ${({ theme }) => theme.sizes.lg};
`;

export const Separator = styled.hr`
  margin: ${({ theme }) => theme.sizes.lg} 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.bg2};
`;
