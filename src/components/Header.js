import globe from "../images/globe.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__globe" src={globe} alt="globe" />
      <p className="header__text">my travel journal.</p>
    </header>
  );
}

export default Header;
