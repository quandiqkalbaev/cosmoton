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
              title="Родная сеть Telegram"
              text="Telegram изначально создал технологию TON и передал IP в фонд TON. Недавно мессенджер начал создавать свои собственные продукты на TON."
            />
            <WhyItem
              img={WhyImg2}
              title="Получайте оплату по всему миру"
              text="Вам не нужно интегрировать отдельные платежные системы на разных рынках. С помощью нашего API пользователи могут быстро платить в TON с минимальными требованиями."
            />
            <WhyItem
              img={WhyImg3}
              title="1-дневная интеграция"
              text="ВНачните с интеграции нашего SDK менее чем за час, затем добавьте API цифровых активов и увеличьте свой игровой доход."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
