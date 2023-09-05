import "./style.scss";

const WhyItem = ({ img, title, text }) => {
  return (
    <div className="why__item">
      <div className="why__item-img">
        <img src={img} alt="img" />
      </div>
      <h3 className="why__item-title">{title}</h3>
      <p className="why__item-text">{text}</p>
    </div>
  );
};

export default WhyItem;
