import styled from "styled-components";

export default styled.div<{
  size?: string;
  color?: string;
}>`
  animation: loading 1s infinite;
  border: 6px solid #ccc;
  border-radius: 50%;
  border-top-color: ${({ color }) => (color ? color : "#ff0000")};
  height: ${({ size }) => (size ? size : "20px")};
  width: ${({ size }) => (size ? size : "20px")};
  display: block;
  margin: auto;
`;
