import "./style.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <Logo className="header__logo-img" />
            <span>CosmoTon</span>
          </Link>
          <nav className="nav">
            <ul className="nav__list">
              <li
                className={
                  currentPath == "/game" || currentPath == "/catalog" ? `nav__item nav__item-active` : `nav__item`
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
        </div>
      </div>
    </header>
  );
}
