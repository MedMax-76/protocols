const Yogurt = () => {
  return (
    <>
      <header className="header">
        <h1>Йогурт</h1>
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
                <h3>Lulur exfoliant Gerdrd</h3>
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
                <h3>Synergica tonic</h3>
                <p>Змочуемо рушник</p>
              </td>
              <td>20 мл</td>
              <td>
                <h3>
                  <span>15 хв</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Lulur natural yohurt</h3>
                <p>Масаж</p>
              </td>
              <td>
                <h3>
                  <span>60 гр</span>
                </h3>
              </td>
              <td>
                <h3>
                  <span>40 хв</span>
                </h3>
              </td>
            </tr>
          </table>
        </container>
      </main>
    </>
  );
};

export default Yogurt;
