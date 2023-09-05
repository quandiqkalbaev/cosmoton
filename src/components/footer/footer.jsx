import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./style.scss";
import tgIcon from "../../assets/images/footer/tg-social.png";
import mailIcon from "../../assets/images/footer/mail-social.png";
import telIcon from "../../assets/images/footer/tel-social.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__title">
              <Link to="/" className="footer__title-name">
                <Logo className="footer__title-img" />
                <span className="footer__title-name">CosmoTon</span>
              </Link>
              <p className="footer__title-about">CosmoTon - инструмент для запуска игр в Telegram</p>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Главная</p>
              <div className="footer__list">
                <Link className="footer__list-item" to="/">
                  Новости
                </Link>
                <Link className="footer__list-item" to="/">
                  Каталог
                </Link>
                <Link className="footer__list-item" to="/">
                  Консоль
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item-title">Контакты</p>
              <div className="footer__social">
                <Link className="footer__social-item" to="/">
                  <img src={tgIcon} alt="" />
                </Link>
                <Link className="footer__social-item" to="/">
                  <img src={mailIcon} alt="" />
                </Link>
                <Link className="footer__social-item" to="/">
                  <img src={telIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">Copyright 2023 ©. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
