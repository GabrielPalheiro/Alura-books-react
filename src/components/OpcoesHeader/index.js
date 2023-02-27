import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const OpcoesHeader = styled.ul`
  display: flex;
`;

const OpcaoHeader = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

export default function Opcoes() {
  return (
    <OpcoesHeader>
      {textoOpcoes.map((text) => (
        <OpcaoHeader>
          <p>{text}</p>
        </OpcaoHeader>
      ))}
    </OpcoesHeader>
  );
}
