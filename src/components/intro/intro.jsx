import Button from "../button/Button";
import "./style.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">
            Eдиное игровое пространство в <span>Telegram</span> на
            базе <span>TON</span>
          </h1>
          <p className="intro__subtitle">
            Вы разработчик игр? Хотите получить доступ к аудитории в 700 млн
            юзеров Telegram и начать монетизировать свой проект немедленно?
          </p>
          <div className="intro__btn">
            <Button>Запустить Игру</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
