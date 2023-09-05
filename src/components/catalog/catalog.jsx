import CatalogItem from "./catalogItem";
import data from "../utils/catalogData";
const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <h2 className="catalog__title">Категории</h2>
          <ul className="catalog__list">
            {data.map((elem, index) => (
              <CatalogItem amount={elem.amount} type={elem.type} about={elem.about} img={elem.img} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
