import styled from "styled-components";

export default styled.div<{ width: string; height: string }>`
  width: 100%;
  height: 100%;
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.white};
  @media (max-width: 638px) {
    max-width: initial;
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .poster {
    margin: auto;
    display: block;
    width: 100%;
    height: auto;
    @media (max-width: 638px) {
      width: auto;
      height: 100%;
    }
  }
`;
