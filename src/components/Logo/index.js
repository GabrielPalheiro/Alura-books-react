import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 24px;
`;

const Image = styled.img`
  margin: 2px 10px 2px 10px;
`;

/*export default*/ function Logo() {
  return (
    <LogoContainer>
      <Image src={logo} alt="Logo Alura Books" className="image" />
      <p>
        {" "}
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
