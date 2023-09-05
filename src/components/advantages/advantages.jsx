import "./style.scss";
import advIcon from "../../assets/images/advantages/advIcon.svg";
import advImg from "../../assets/images/advantages/advantage-img.png";
const Advantage = () => {
  return (
    <div className="advantage">
      <div className="container">
        <div className="advantage__inner">
          <div className="advantage__left">
            <h2 className="advantage__title">Программа поддержки разработчиков</h2>
            <p className="advantage__subtitle">
              Мы помогаем лучшим проектам расти быстрее. Зарегистрируйтесь в нашей программе поддержки разработчиков и
              получите массу преимуществ
            </p>
            <ul className="advantage__list">
              <li className="advantage__item">
                <div className="advantage__item-left">
                  <img src={advIcon} alt="" />
                </div>
                <div className="advantage__item-right">
                  <p className="advantage__item-title">Выделенный менеджер по работе с клиентами </p>
                  <p className="advantage__item-subtitle">
                    Наш менеджер поможет вам внедрить инструменты и, при необходимости, приглашать экспертов из команды
                    Cosmo TON для решения вашего конкретного запроса.
                  </p>
                </div>
              </li>
              <li className="advantage__item">
                <div className="advantage__item-left">
                  <img src={advIcon} alt="" />
                </div>
                <div className="advantage__item-right">
                  <p className="advantage__item-title">Гранты на трафик</p>
                  <p className="advantage__item-subtitle">
                    Мы предлагаем лучшие новые гранты на командный трафик для тестирования концепции игры.
                  </p>
                </div>
              </li>
              <li className="advantage__item">
                <div className="advantage__item-left">
                  <img src={advIcon} alt="" />
                </div>
                <div className="advantage__item-right">
                  <p className="advantage__item-title">Выделенный менеджер по работе с клиентами </p>
                  <p className="advantage__item-subtitle">
                    Если ваша игра работает хорошо, мы поможем вам упаковать ваш продукт и представить его нашей сети
                    инвесторов.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="advantage__right">
            <img src={advImg} alt="advImg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantage;
