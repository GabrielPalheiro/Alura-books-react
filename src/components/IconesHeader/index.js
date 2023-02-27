import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin: 0 10px 0 10px;
  justify-content: center;
`;
const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icones"></img>
        </Icone>
      ))}
    </Icones>
  );
}
