import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src="images/logo.svg" alt="logo" />
        <span className="header-letter">Letter</span>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">Plugins</li>
          <li className="menu-item">Pricing</li>
          <li className="menu-item">Log in</li>
          <li className="menu-item">Free Trial</li>
        </ul>
      </nav>
    </header>
  );
}
