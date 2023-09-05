import { ReactComponent as PolygonIcon } from "../../assets/images/button/polygon-icon.svg";
import "./style.scss";

export default function Button({ children }) {
  return (
    <button className="button">
      <PolygonIcon className="button__icon" />
      {children}
    </button>
  );
}
