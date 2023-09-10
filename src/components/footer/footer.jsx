import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./style.scss";
import SocialItem from "./socialItem";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <Link to="/" className="footer__logo">
              <Logo className="footer__logo-img" />
              <span className="footer__logo-name">Cosmoton</span>
            </Link>
            <div className="footer__item">
              <p className="footer__item-title">Как использовать</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Установить кошелёк
                </Link>
                <Link className="footer__list-item" to="/">
                  Купить или обменять Toncoin
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Для разработчиков игр</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Запросить демонстрацию
                </Link>
                <Link className="footer__list-item" to="/">
                  Руководство по интеграции
                </Link>
                <Link className="footer__list-item" to="/">
                  Решение Web3
                </Link>
                <Link className="footer__list-item" to="/">
                  Платежное Решение
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Игры</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Каталог игр
                </Link>
                <Link className="footer__list-item" to="/">
                  Бот PlayDeck
                </Link>
                <Link className="footer__list-item" to="/">
                  Консоль
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Связаться с нами</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Telegram-чат
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Информация</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Правила пользования
                </Link>
                <Link className="footer__list-item" to="/">
                  политика конфиденциальности
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">
              На основе
              <Logo className="footer__copyright-logo" /> COSMOTON.Авторское право 2023 ©. Все права защищены
            </div>
            <div className="footer__socials">
              <SocialItem />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
