import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const List = styled.ul``;

const Card = styled.li`
  display: flex;
  margin-bottom: 43px;
  background-color: ${({ theme }) => theme.gray300};
`;

const CardInfo = styled.div`
  width: 100%;
  .card-top {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    height: 63px;
    padding: 0 0 4px 98px;
    .title {
      color: ${({ theme }) => theme.title};
    }
    .pontuation {
      position: absolute;
    }
  }
  .date {
  }
  .text {
  }
`;

export { ListContainer, List, Card, CardInfo };
