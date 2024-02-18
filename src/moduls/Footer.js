import git from "../img/icons/gitHub.svg";
import inst from "../img/icons/instagram.svg";
import twi from "../img/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item">
            <a
              href="https://www.instagram.com/maximus_max76/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={inst} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://twitter.com/MedMax1976"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={twi} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://github.com/MedMax-76 "
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={git} alt="Link" />
            </a>
          </li>
        </ul>
        <div className="copyright">
          <h4>© 2024</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
