import styled from "styled-components";

export default styled.header`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.primary};

  .title {
    line-height: 30px;
    font-size: 30px;
    font-family: ${({ theme }) => theme.titleFont};
    color: ${({ theme }) => theme.title};
    font-weight: 400;
    text-align: center;
  }
`;
