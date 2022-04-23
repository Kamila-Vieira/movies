import styled from "styled-components";

export default styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
