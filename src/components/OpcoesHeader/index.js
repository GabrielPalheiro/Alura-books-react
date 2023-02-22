import "./style.css";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

export default function Opcoes() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((text) => (
        <li className="opcao">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
