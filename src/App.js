import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Pagesnotfound from "./components/pages/pagesnotfound/Pagesnotfound";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagesnotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
