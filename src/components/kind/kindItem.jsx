import { Link } from "react-router-dom";

const KindItem = ({ img, logo, name, about }) => {
  return (
    <li className="kind__item">
      <Link to="/game/android" className=" kind__item app">
        <div className="app__top">
          <img src={img} alt="" className="app__img" />
        </div>
        <div className="app__bot">
          <div className="app__left">
            <img src={logo} alt="" className="app__logo" />
          </div>
          <div className="app__right">
            <p className="app__title">{name}</p>
            <p className="app__subtitle">{about}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default KindItem;
