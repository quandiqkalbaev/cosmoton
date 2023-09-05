import "./style.scss";
import { Link } from "react-router-dom";
const CatalogItem = ({ amount, type, about, img }) => {
  return (
    <li className="catalog__item">
      <Link to="/game" className="catalog__link">
        <div className="catalog__item-left">
          <div className="catalog__img">
            <img src={img} alt={type + `GameImg`} />
          </div>
        </div>
        <div className="catalog__item-right">
          <p className="catalog__item-count">{amount}</p>
          <p className="catalog__item-title">{type}</p>
          <p className="catalog__item-about">{about}</p>
        </div>
      </Link>
    </li>
  );
};

export default CatalogItem;
