import styled from "styled-components";

const Card = styled.li`
  display: flex;
  margin-bottom: 43px;
  background-color: ${({ theme }) => theme.gray300};

  @media (max-width: 638px) {
    flex-direction: column-reverse;
  }
`;

const CardInfo = styled.div`
  width: 100%;
  @media (max-width: 638px) {
    padding-bottom: 20px;
  }
  .card-top {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    min-height: 63px;
    padding: 4px 0 4px 98px;
    @media (max-width: 638px) {
      padding: 4px 0 4px 78px;
    }
    .title {
      color: ${({ theme }) => theme.title};
      font-family: ${({ theme }) => theme.primaryFont};
      font-size: 35px;
      line-height: 37px;
      font-weight: 300;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      @media (max-width: 638px) {
        font-size: 25px;
        line-height: 28px;
      }
    }
    .pontuation {
      position: absolute;
      left: 12px;
      top: calc(100% - 37px);
      @media (max-width: 638px) {
        width: 56px;
        height: 56px;
        font-size: 18px;
        top: calc(100% - 28px);
      }
    }
  }
  .date {
    padding: 7px 0 20px 98px;
    font-size: 20px;
    color: ${({ theme }) => theme.textMuted};
    @media (max-width: 638px) {
      padding: 5px 0 20px 78px;
      font-size: 16px;
    }
  }
  .text {
    margin: 0 22px 20px;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.text};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  .genres {
    padding-left: 22px;
  }
`;

export { Card, CardInfo };
