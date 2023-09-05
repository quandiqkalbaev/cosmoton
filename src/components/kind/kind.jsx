import "./style.scss";

import appData from "../utils/appData";
import KindItem from "./kindItem";
const Kind = () => {
  return (
    <div className="kind">
      <div className="container">
        <div className="kind__inner">
          <div className="kind__top">
            <h2 className="kind__title">Казуальные игры</h2>
            <p className="kind__amount">6</p>
          </div>
            <p className="kind__about">Игры для широкой аудитории. Разные простые игры.</p>
          <div className="kind__bot">
            <ul className="kind__list">
              {appData.map((elem, index) => (
                <KindItem img={elem.img} logo={elem.logo} about={elem.about} name={elem.name} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kind;
