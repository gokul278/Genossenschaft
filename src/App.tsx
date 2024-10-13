import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Pages/01-Header/Header";
import Footer from "./Pages/02-Footer/Footer";
import Home from "./Pages/03-Home/Home";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ContactUs from "./Pages/07-Contactus/ContactUs";
import Aboutus from "./Pages/04-Aboutus/Aboutus";
import Board from "./Pages/05-Board/Board";
import OrganizationChart from "./Pages/06-OrganizationChart/OrganizationChart";
import Regulations from "./Pages/08-Regulations/Regulations";
import Report from "./Pages/09-Report/Report";
import ApplicationForm from "./Pages/10-ApplicationForm/ApplicationForm";
import Units from "./Pages/11-Units/Units";
import Gallery from "./Pages/12-Gallery/Gallery";
import SettlementGallery from "./Pages/13-SettlementGallery/SettlementGallery";
import Archive from "./Pages/14-Archive/Archive";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route element={<Home />} path="/" index />
            <Route element={<Aboutus />} path="/about" />
            <Route element={<Board />} path="/board" />
            <Route element={<OrganizationChart />} path="/chart" />
            <Route element={<ContactUs />} path="/address" />
            <Route element={<Regulations />} path="/regulations" />
            <Route element={<Report />} path="/report" />
            <Route element={<ApplicationForm />} path="/applicationform" />
            <Route element={<Units />} path="/units" />
            <Route element={<Gallery />} path="/pictures" />
            <Route element={<SettlementGallery />} path="/settlement" />
            <Route element={<Archive />} path="/archive" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
