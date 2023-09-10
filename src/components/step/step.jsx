import "./style.scss";
const Step = () => {
  return (
    <div className="step">
      <div className="container">
        <div className="step__wrapper">
            <h2 className="step__title">
            Как быстро запустить монетизацию вместе с <span>CosmoTon</span>
            </h2>
          <div className="step__inner">
            <div className="step__item step__item-1">
              <p className="step__item-number">1</p>
              <p className="step__item-text">Создай аккаунт на CosmoTon </p>
            </div>
            <div className="step__item step__item-2">
              <p className="step__item-number">2</p>
              <p className="step__item-text">Создай бота в бот фазере</p>
            </div>
            <div className="step__item step__item-3">
              <p className="step__item-number">3</p>
              <p className="step__item-text">Размести ссылку на свою игру </p>
            </div>
            <div className="step__item step__item-4">
              <p className="step__item-number">4</p>
              <p className="step__item-text">Создай кошелек для приема платежей </p>
            </div>
            <div className="step__item step__item-5">
              <p className="step__item-number">5</p>
              <p className="step__item-text">Подключи API своего бота </p>
            </div>
            <div className="step__item step__item-6">
              <p className="step__item-number">6</p>
              <p className="step__item-text">Настрой API платежи для игры </p>
            </div>
            <div className="step__item step__item-7">
              <p className="step__item-number">7</p>
              <p className="step__item-text">Привлекайте игроков и монетизируйте </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step;
