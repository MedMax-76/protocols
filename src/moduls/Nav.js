// import logo from "../img/Logo_black.svg";
import logo from "../img/Logo_1 1.svg";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="/">
              <img className="nav-row-logo-img" src={logo} alt="Logp Maks" />
            </a>
            {/* <a href="/">
              <img className="nav-row-logo-img" src={logo} alt="Logp Maks" />
            </a> */}
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="contacts" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
