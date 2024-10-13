import "./Footer.css";
import logo from "../../assets/Img/Logo/LOGO.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <div className="w-[95%] flex justify-center bg-[#fafafa] rounded-[10px]">
        <div className="w-[80%] py-10 flex flex-col lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[35%]">
            <div className="h-[60px] w-full flex justify-center items-center">
              <img src={logo} className="h-[80px]" alt="logo" />
            </div>
            <p className="text-justify mt-10 text-[16px] text-[#555555] font-normal font-mont">
              {t("footer.content")}
            </p>
          </div>

          <div className="w-[100%] mt-10 lg:mt-0 lg:w-[25%]">
            <div className="h-[60px]">
              <h1 className="text-[20px] font-bold font-mont">
                {t("footer.quick")}
              </h1>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-phone"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  +41 XXXXXXXX
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-envelope"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  XXXXXX@XXX.com
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-location-dot"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  1234 XXXXXXXXXXX,
                  <br />
                  XXXXXXXXXX
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start text-[25px] cursor-pointer pb-2">
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-facebook-f text-[#555555] underline-animation"></i>
              </div>
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-instagram text-[#555555] underline-animation"></i>
              </div>
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-linkedin-in text-[#555555] underline-animation"></i>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-10 lg:mt-0 lg:w-[25%]">
            <div className="h-[60px]">
              <h1 className="text-[20px] font-bold font-mont text-[#00000]">
                {t("footer.contact")}
              </h1>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {t("header.home")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  {t("header.about")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/regulations");
                  }}
                >
                  {t("header.regulations")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/report");
                  }}
                >
                  {t("header.report")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/applicationform");
                  }}
                >
                  {t("header.form")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/units");
                  }}
                >
                  {t("header.units")}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/pictures");
                  }}
                >
                  {t("header.gallery")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mt-5 ">
        <hr />
        <div className="py-3 text-center font-mont font-bold">
          © {new Date().getFullYear()} Gasi Cooperative
        </div>
      </div>
    </div>
  );
};

export default Footer;
