import "./Loader.css";
import logo from "../../assets/Img/Logo/LOGO.png";

export const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loading-bar">
        <img src={logo} alt="" />
      </div>
      {/* <div className="mt-8 text-[25px]">Loading</div> */}
    </div>
  );
};
