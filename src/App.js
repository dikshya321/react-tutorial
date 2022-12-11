import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Pagesnotfound from "./components/pages/pagesnotfound/Pagesnotfound";
import Services from "./components/pages/Services/Services";
import Register from "./components/pages/user/Register";
import Header from "./components/header/Header";
import Login from "./components/pages/user/Login";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagesnotfound />} />
          <Route path ="/register"element={<Register/>}/>
          <Route path ="/login"element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
