import styled from "styled-components";

const Search = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 57px auto 49px;

  .input {
    width: 100%;
    height: 48px;
    border-radius: 100px;
    border: none;
    padding: 0 30px;
    background-color: ${({ theme }) => theme.gray300};
    font-family: ${({ theme }) => theme.mainFont};
    font-size: 16px;
    color: ${({ theme }) => theme.primary};

    &::placeholder {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export { Search };
