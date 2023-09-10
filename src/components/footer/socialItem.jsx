import { ReactComponent as WappLogo } from "../../assets/images/footer/whatsapp.svg";
import { ReactComponent as TgLogo } from "../../assets/images/footer/telegram.svg";
import { ReactComponent as MailLogo } from "../../assets/images/footer/gmail.svg";
import { ReactComponent as InstaLogo } from "../../assets/images/footer/instagram.svg";
import { ReactComponent as FbLogo } from "../../assets/images/footer/facebook.svg";
import { ReactComponent as TwitLogo } from "../../assets/images/footer/twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/images/footer/youtube.svg";
import { Link } from "react-router-dom";
const socialsData = [
  {
    url: "/",
    component: <TgLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <WappLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <MailLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <InstaLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <FbLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <YoutubeLogo className="footer__social-icon" />,
  },
  {
    url: "/",
    component: <TwitLogo className="footer__social-icon" />,
  },
];

const SocialItem = () => {
  return (
    <>
      {socialsData.map((e, index) => (
        <Link href={e.url} className="footer__social-item" key={index}>
          {e.component}
        </Link>
      ))}
    </>
  );
};
export default SocialItem;
