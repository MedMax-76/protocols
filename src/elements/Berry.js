const Berry = () => {
  return (
    <>
      <header className="header">
        <h1>Ягідна насолода</h1>
      </header>
      <main className="main">
        <container>
          <table className="tab">
            <tr>
              <td>
                <h3>Бочка</h3>
              </td>
              <td></td>
              <td>
                <h3>
                  <span>15 хв</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Пілінг Podofarm</h3>
              </td>
              <td>
                <h3>
                  <span>50 гр</span>
                </h3>
              </td>
              <td>
                <h3>
                  <span>15 хв</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Обгортання</h3>
              </td>
              <td></td>
              <td>
                <h3>
                  <span>15 хв</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Крем маска Podofarm</h3>
              </td>
              <td>
                <h3>
                  <span>15 гр</span>
                </h3>
              </td>
              <td>
                <h3>
                  <span>15 хв</span>
                </h3>
              </td>
            </tr>
          </table>
        </container>
        {/* <div className="back">
          <Link to="/">
            <p> Протоколи</p>
          </Link>
        </div> */}
      </main>
    </>
  );
};

export default Berry;
