import styled from "styled-components";

export const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "40px"};
  text-align: ${(props) => props.align || "center"};
  margin: 0;
`;
