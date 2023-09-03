import './style.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
export default function Header() {
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
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  Каталог
                </Link>
                <Link to="#" className="nav__link">
                  Новости
                </Link>
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
