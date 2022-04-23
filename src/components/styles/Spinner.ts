import styled from "styled-components";

export default styled.div<{
  size?: string;
  color?: string;
}>`
  animation: loading 1s infinite;
  border: 6px solid ${({ theme }) => theme.gray200};
  border-radius: 50%;
  border-top-color: ${({ color, theme }) => (color ? color : theme.primary)};
  height: ${({ size }) => (size ? size : "20px")};
  width: ${({ size }) => (size ? size : "20px")};
  display: block;
  margin: auto;
`;
