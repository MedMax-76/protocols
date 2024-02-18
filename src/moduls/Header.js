import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="header">
          <h1>Протоколы</h1>
        </header>
      </div>
      <main className="top">
        <ul className="list">
          <li className="list__item">
            <Link to="/berry">
              <h2>Ягода</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/choco">
              <h2>Шоколад</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/hanakasumi">
              <h2>Ханакасуми</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/olive">
              <h2>Джем</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/yogurt">
              <h2>Йогурт</h2>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Header;
