import styled from "styled-components";

export default styled.div<{ width: string; height: string; color?: string }>`
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  width: 100%;
  height: 100%;
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
