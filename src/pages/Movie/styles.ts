import styled from "styled-components";

const Main = styled.div`
  background-color: ${({ theme }) => theme.gray200};
  margin: 39px 0 38px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 17px 10px 37px;
  background-color: ${({ theme }) => theme.gray300};
  @media (max-width: 1024px) {
    padding: 10px 15px;
    column-gap: 10px;
  }
  .title {
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 35px;
    line-height: 37px;
    font-weight: 300;
    @media (max-width: 638px) {
      font-size: 25px;
      line-height: 28px;
    }
  }

  .date {
    font-size: 20px;
    color: ${({ theme }) => theme.textMuted};
  }
`;
const Bottom = styled.div`
  display: flex;
  @media (max-width: 638px) {
    flex-direction: column-reverse;
  }
`;
const Infos = styled.div`
  padding: 32px 30px 22px 41px;
  width: 100%;
  max-height: 507px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 638px) {
    overflow: initial;
    max-height: initial;
  }
  scrollbar-width: 5px;
  scrollbar-color: ${({ theme }) => theme.textMuted}
    ${({ theme }) => theme.gray200};

  @media (max-width: 1024px) {
    padding: 10px 15px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textMuted};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.gray200};
    border-radius: 100px;
  }

  .title {
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 25px;
    line-height: 27px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    font-weight: 300;
    border-bottom: 2px solid ${({ theme }) => theme.secondary};
  }
  .text {
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 50px;
  }
  .informations {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 8px;

    &.bottom {
      @media (max-width: 1024px) {
        align-items: center;
      }
    }

    &:not(.bottom) {
      margin: 5px 0 50px;
      @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

    .item {
      &-title {
        color: ${({ theme }) => theme.primary};
        font-family: ${({ theme }) => theme.primaryFont};
        font-size: 22px;
        line-height: 23px;
        margin-bottom: 5px;
        text-align: center;
        font-weight: 300;
        /* @media (max-width: 1024px) {
          font-size: 18px;
          line-height: 23px;
        } */
      }
      &-text {
        text-align: center;
        font-family: ${({ theme }) => theme.secondaryFont};
        font-size: 13px;
        line-height: 14px;
        color: ${({ theme }) => theme.text};
      }
    }

    .pontuation {
      @media (max-width: 1024px) {
        width: 74px;
        height: 74px;
        font-size: 25px;
        top: calc(100% - 37px);
      }
    }
  }
`;

export { Main, Top, Bottom, Infos };
