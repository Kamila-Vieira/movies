import styled from "styled-components";

export default styled.div<{ width: string; height: string }>`
  width: 100%;
  height: 100%;
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.white};
  .poster {
    margin: auto;
    display: block;
    width: 100%;
    height: auto;
  }
`;
