import WhyItem from "./WhyItem";

import WhyImg1 from "../../assets/images/why/why-img-1.svg";
import WhyImg2 from "../../assets/images/why/why-img-2.svg";
import WhyImg3 from "../../assets/images/why/why-img-3.svg";

import "./style.scss";

const Why = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="why__inner">
          <h2 className="why__title">
            Почему&nbsp;
            <span>
              COSMO <span>|</span> TON
            </span>
          </h2>
          <div className="why__items">
            <WhyItem
              img={WhyImg1}
              title="Мессенджер"
              text="Мы используем Telegram, как самый передовой мессенджер с аудиторией 800 млн пользователей. Интеграция блокчейна TON в экосистему Telegram создает массу возможностей. CosmoTon создал мост для разработчиков между Telegram и TON.  
              "
            />
            <WhyItem
              img={WhyImg2}
              title="Платежи"
              text="Вам не нужно интегрировать отдельные платежные системы на разных рынках. 
                 С помощью нашего API пользователи могут быстро платить в TON, USDT, JETON, BITCOIN с минимальными требованиями."
            />
            <WhyItem
              img={WhyImg3}
              title="1-день"
              text="Интеграции нашего SDK, API ключей и старт монетизации вашего проекта займет всего 1 день. Начните получать прибыль уже завтра."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
