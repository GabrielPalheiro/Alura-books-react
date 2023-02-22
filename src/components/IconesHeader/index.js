import "./style.css";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const icones = [perfil, sacola];

export default function Icones() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="icones"></img>
        </li>
      ))}
    </ul>
  );
}
