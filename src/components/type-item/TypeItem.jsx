import "./style.scss";

const TypeItem = ({ img, title, text }) => {
  return (
    <div className="type__item">
      <div className="type__item-img">
        <img src={img} alt="img" />
      </div>
      <div className="type__item-content">
        <h3 className="type__item-title">{title}</h3>
        <p className="type__item-text">{text}</p>
      </div>
    </div>
  );
};

export default TypeItem;
