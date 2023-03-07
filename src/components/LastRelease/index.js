import { livros } from "./lastReleaseData.js";
import styled from "styled-components";
import { Titulo } from "../Title";
import Card from "../Card/index.js";
import imagemLivro from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo color="#EB9B00" fontSize="36px" align="center">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="img generics" />
        ))}
      </NovosLivrosContainer>
      <Card
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        desc="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
      <Card
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        desc="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
