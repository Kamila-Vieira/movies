import styled from "styled-components";

export default styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 25px;

  &::after {
    content: "";
    border: 5px solid ${({ theme }) => theme.secondary};
    position: absolute;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
