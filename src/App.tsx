import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Pages/01-Header/Header";
import Footer from "./Pages/02-Footer/Footer";
import Home from "./Pages/03-Home/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} path="/" index />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
