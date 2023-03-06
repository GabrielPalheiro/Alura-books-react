import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dataSearch.js";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #6096b4 35%, #bdcdd6);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 100px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px
  text-align: center;
  height: 100px;
  width: 100%;
`;

const SubTititulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
    color: black;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTititulo>Encontre seu livro na nossa estante</SubTititulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />

      {livrosPesquisados.map((livro) => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src} alt="img generica" />
        </Resultado>
      ))}
    </SearchContainer>
  );
}
