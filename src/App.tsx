import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Pages/01-Header/Header";
import Footer from "./Pages/02-Footer/Footer";
import Home from "./Pages/03-Home/Home";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ContactUs from "./Pages/Contactus/ContactUs";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route element={<Home />} path="/" index />
            <Route element={<ContactUs />} path="/contact" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
