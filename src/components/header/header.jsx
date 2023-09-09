import "./style.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as LangIcon } from "../../assets/images/lang.svg";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  const [langmenuOpen, setLangMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLangMenuToggle = () => {
    setLangMenuOpen((prevState) => !prevState);
  };

  const handleCloseLangMenu = () => {
    setLangMenuOpen(false);
  };

  if (menuOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <Logo className="header__logo-img" />
            <span>CosmoTon</span>
          </Link>
          <nav className={menuOpen ? `nav nav--active` : `nav`}>
            <ul className="nav__list">
              <li
                className={
                  currentPath === "/game" || currentPath === "/catalog" ? `nav__item nav__item-active` : `nav__item`
                }
              >
                <Link to="/catalog" className="nav__link">
                  Каталог
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  Новости
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  Консоль
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__lang">
            <div className="header__lang-selected" onClick={handleLangMenuToggle}>
              <span>
                <LangIcon />
              </span>
              <p>Eng</p>
            </div>
            <div className={langmenuOpen ? `header__lang-items header__lang-items-active` : `header__lang-items`}>
              <p className="header__lang-item" onClick={handleCloseLangMenu}>
                Русский
              </p>
              <p className="header__lang-item" onClick={handleCloseLangMenu}>
                English
              </p>
            </div>
          </div>
          <div className={menuOpen ? `hamburger hamburger--active` : `hamburger`} onClick={handleMenuToggle}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
