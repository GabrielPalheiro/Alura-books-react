import logo from "../../imagens/logo.svg";
import "./style.css";

/*export default*/ function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo Alura Books" className="image" />
      <p>
        {" "}
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
