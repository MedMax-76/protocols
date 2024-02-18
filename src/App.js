import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./moduls/Nav";
import Header from "./moduls/Header";
import Footer from "./moduls/Footer";
import Berry from "./elements/Berry";
import Chocolate from "./elements/Chocolate";
import Hanakasumi from "./elements/Hanakasumi";
import Olive from "./elements/Olive";
import Yogurt from "./elements/Yogurt";
import Contacts from "./moduls/Contacts";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/berry" element={<Berry />} />
          <Route path="/choco" element={<Chocolate />} />
          <Route path="/olive" element={<Olive />} />
          <Route path="/yogurt" element={<Yogurt />} />
          <Route path="/hanakasumi" element={<Hanakasumi />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
