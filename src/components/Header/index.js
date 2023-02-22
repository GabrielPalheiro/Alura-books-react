import Logo from "../Logo/index.js";
import OpcoesHeader from "../OpcoesHeader/index.js";
import IconesHeader from "../IconesHeader/index.js";
import "./style.css";

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}
