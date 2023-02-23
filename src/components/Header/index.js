import Logo from "../Logo/index.js";
import OpcoesHeader from "../OpcoesHeader/index.js";
import IconesHeader from "../IconesHeader/index.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #eee9da;
  display: flex;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}
