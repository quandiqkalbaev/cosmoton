import TypeItem from "../type-item/TypeItem";
import TypeImg1 from "../../assets/images/type-item/icon-1.svg";
import TypeImg2 from "../../assets/images/type-item/icon-2.svg";
import TypeImg3 from "../../assets/images/type-item/icon-3.svg";
import TypeImg4 from "../../assets/images/type-item/icon-4.svg";

import "./style.scss";

const Type = () => {
  return (
    <section className="type">
      <div className="container">
        <h2 className="type__title">
          Какие виды игр мы ждем в нашем каталоге?
        </h2>
        <div className="type__items">
          <TypeItem
            img={TypeImg1}
            title="Казуальные игры"
            text="Собирай новую аудиторию для своей игры через CosmoTon в Telegram. Добавь дополнительный поток монетизации, продавая блокчейн-пропуска на платные турниры."
          />
          <TypeItem
            img={TypeImg2}
            title="RPG"
            text="Если в вашем жанре уже есть черный рынок артефактов, аккаунтов или скинов, вы можете внедрить внутриигровой блокчейн-рынок и зарабатывать роялти за каждую перепродажу активов."
          />
          <TypeItem
            img={TypeImg3}
            title="Мобильные игры"
            text="Добавьте внешнюю монетизацию через платные турниры. Монетизируй свою игру без комиссии. Привлекай доступную аудиторию в 700 млн юзеров. "
          />
          <TypeItem
            img={TypeImg4}
            title="Play2Earn & Move2Earn"
            text="Запускай вместе с нами проекты, чтобы максимизировать свою прибыль  и на старте привлечь 10.000 -ки юзеров и начать монетизацию сразу же."
          />
        </div>
      </div>
    </section>
  );
};

export default Type;
