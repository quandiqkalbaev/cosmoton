import Button from "../button/Button";
import gamepadIcon from "../../assets/images/intro/gamepad.svg";
import tgIcon from "../../assets/images/intro/telegram.svg";
import "./style.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">
            Сделайте запуск своей игры успешным вместе с
            <span>
              <img src={tgIcon} alt="tg-icon" />
              Telegram
            </span>
            на блокчейне
            <span>
              <img src={gamepadIcon} alt="gamepad-icon" />
              TON
            </span>
          </h1>
          <p className="intro__subtitle">
            Получите доступ к аудитории в 800 млн пользователей Telegram и начните монетизацию своего проекта вместе с
            COSMOTON?
          </p>
          <div className="intro__btn">
            <Button>Создать проект</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
