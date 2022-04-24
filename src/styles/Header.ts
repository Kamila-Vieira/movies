import styled from "styled-components";

export default styled.header`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.primary};

  .title {
    font-size: 35px;
    line-height: 35px;
    color: ${({ theme }) => theme.title};
    font-weight: 400;
    text-align: center;
  }
`;
