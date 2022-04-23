import styled from "styled-components";

export default styled.div<{ width: string; height: string; color?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.gray200};
  @media (max-width: 638px) {
    width: 100%;
  }
  path {
    fill: ${({ color, theme }) => (color ? color : theme.textMuted)};
  }
`;
