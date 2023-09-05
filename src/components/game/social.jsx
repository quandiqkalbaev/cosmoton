import { Link } from "react-router-dom";
export default function SocialItem({ logo, link, alt }) {
  return (
    <Link to={link} className="social__item">
      <img src={logo} alt={alt} className="social__item-img" />
    </Link>
  );
}
