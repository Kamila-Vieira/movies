import styled from "styled-components";

export default styled.main<{ fullOnResponsive?: boolean }>`
  max-width: 1024px;
  margin: 0 auto;
  //height: calc(100vh);
  @media (max-width: 1024px) {
    padding: ${({ fullOnResponsive }) => (fullOnResponsive ? "0px" : "0 15px")};
  }
`;
