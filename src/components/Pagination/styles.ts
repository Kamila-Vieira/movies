import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const Pages = styled.ul`
  display: flex;
  align-items: center;
`;

export const Page = styled.li<{ active?: boolean }>`
  margin: 0 9px;
  border: 2px solid
    ${({ active, theme }) => (active ? theme.primary : "transparent")};
  background: ${({ active, theme }) =>
    active ? theme.primary : "transparent"};
  width: ${({ active }) => (active ? "54px" : "initial")};
  height: ${({ active }) => (active ? "54px" : "initial")};
  border-radius: 50%;
  cursor: pointer;

  .page-button {
    font-family: ${({ theme }) => theme.primaryFont};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 3px solid
      ${({ active, theme }) => (active ? theme.secondary : "transparent")};
    background: transparent;
    color: ${({ active, theme }) => (active ? theme.secondary : theme.primary)};
    font-size: ${({ active }) => (active ? "32px" : "25px")};
  }
`;
