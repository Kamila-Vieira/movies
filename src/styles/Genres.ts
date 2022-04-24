import styled from "styled-components";

export default styled.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 5px;
  column-gap: 5px;
`;

export const Genre = styled.li`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 30px;
`;
