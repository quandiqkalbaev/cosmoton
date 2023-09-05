import { Link } from "react-router-dom";
import { ReactComponent as GameLogo } from "../../assets/images/gameinfo/amongus-logo.svg";

import "./style.scss";
import socials from "../utils/socialdata";
import SocialItem from "./social";

const Game = () => {
  return (
    <div className="game">
      <div className="container">
        <div className="game__inner">
          <div className="game__top">
            <div className="game__info-left">
              <GameLogo className="game__info-logo" />
            </div>
            <div className="game__info-right">
              <div className="game__name">
                <p>Among us</p>
                <span className="game__payment-info">Есть платежи</span>
              </div>
              <ul className="game__type-list">
                <li className="game__type-item">
                  <Link className="game__type-link" to="/catalog">
                    Приключение
                  </Link>
                </li>
                <li className="game__type-item">
                  <Link className="game__type-link" to="/catalog">
                    Стратегия
                  </Link>
                </li>
              </ul>
            </div>

            <a className="game__btn" href="#">
              Играть
            </a>
          </div>
          <div className="game__bot">
            <p className="game__bot-title">Описание игры</p>
            <p className="game__bot-text">
              Играйте онлайн или через локальный Wi-Fi с 4-15 игроками, пока вы пытаетесь подготовить свой космический
              корабль к вылету, но будьте осторожны, так как один из них окажется самозванцем, стремящимся убить всех!
            </p>
            <p className="game__bot-text">
              Товарищи по команде могут победить, выполнив все задания или обнаружив и проголосовав за самозванца с
              корабля.
            </p>
            <p className="game__bot-text">
              Самозванец может использовать саботаж, чтобы вызвать хаос, упрощая убийства и улучшая алиби.
            </p>
          </div>
          <div className="game__social social">
            <p className="social__title">Социальные сети</p>
            <div className="social-list">
              {socials.map((elem, index) => (
                <SocialItem logo={elem.logo} link={elem.link} alt={elem.alt} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
