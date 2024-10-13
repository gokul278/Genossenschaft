import { useState } from "react";
import de from "../../assets/Img/Language/DE/de.svg";
import en from "../../assets/Img/Language/EN/en.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Img/Logo/LOGO.png";
import { Loader } from "../../Components/Loader/Loader";
import { useTranslation } from "react-i18next";

export default function Header() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation("global");

  const [menuStatus, setMenuStatus] = useState(false);
  const [menu, setMenu] = useState({
    about: false,
    pictures: false,
  });

  const [langauge, setLanguage] = useState("en");

  const [loaderstatus, setLoaderstatus] = useState(false);

  return (
    <>
      {loaderstatus ? <Loader /> : null}
      <div className="w-full">
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : null
          } justify-center items-center h-[80px] bg-white`}
        >
          <div className="w-[100%] h-[10vh] lg:w-[95%] flex justify-evenly items-center">
            <div className="w-[50%] lg:w-[10%] flex justify-start ">
              <img src={logo} className="h-[120%]" alt="log" />
            </div>
            <div className="hidden lg:flex w-[85%] justify-center gap-x-8">
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/");
                }}
              >
                <span className="underline-animation">{t("header.home")}</span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold relative"
                onMouseOver={() => {
                  setMenu({ ...menu, about: true });
                }}
                onMouseOut={() => {
                  setMenu({ ...menu, about: false });
                }}
              >
                <span
                  onClick={() => {
                    navigate("about");
                    setMenu({ ...menu, about: false });
                  }}
                  className="underline-animation"
                >
                  {t("header.about")}&nbsp;&nbsp;
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {menu.about && (
                  <div
                    onMouseOver={() => {
                      setMenu({ ...menu, about: true });
                    }}
                    onMouseOut={() => {
                      setMenu({ ...menu, about: false });
                    }}
                    className="absolute z-10 bg-white rounded mt-6 p-4 w-60 shadow-lg transition-opacity duration-300 ease-in-out"
                  >
                    <div
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/board");
                        setMenu({ ...menu, about: false });
                      }}
                    >
                      {t("header.board")}
                    </div>
                    <div
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/chart");
                        setMenu({ ...menu, about: false });
                      }}
                    >
                      {t("header.chart")}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/address");
                        setMenu({ ...menu, about: false });
                      }}
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                    >
                      {t("header.address")}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/regulations");
                }}
              >
                <span className="underline-animation">
                  {t("header.regulations")}
                </span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/report");
                }}
              >
                <span className="underline-animation">
                  {t("header.report")}
                </span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/applicationform");
                }}
              >
                <span className="underline-animation">{t("header.form")}</span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/units");
                }}
              >
                <span className="underline-animation">{t("header.units")}</span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold relative"
                onMouseOver={() => {
                  setMenu({ ...menu, pictures: true });
                }}
                onMouseOut={() => {
                  setMenu({ ...menu, pictures: false });
                }}
              >
                <span
                  onClick={() => {
                    navigate("pictures");
                    setMenu({ ...menu, pictures: false });
                  }}
                  className="underline-animation"
                >
                  {t("header.gallery")}&nbsp;&nbsp;
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {menu.pictures && (
                  <div
                    onMouseOver={() => {
                      setMenu({ ...menu, pictures: true });
                    }}
                    onMouseOut={() => {
                      setMenu({ ...menu, pictures: false });
                    }}
                    className="absolute z-10 bg-white rounded mt-6 p-4 w-58 shadow-lg transition-opacity duration-300 ease-in-out"
                  >
                    <div
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/settlement");
                        setMenu({ ...menu, pictures: false });
                      }}
                    >
                      {t("header.settlement")}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/archive");
                        setMenu({ ...menu, pictures: false });
                      }}
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                    >
                      {t("header.archive")}
                    </div>
                  </div>
                )}
              </div>

              {/* <div
                className="relative text-[15px] mt-2 cursor-pointer font-semibold"
                onMouseOver={() => {
                  setMenu({ ...menu, about: true });
                }}
                onMouseOut={() => {
                  setMenu({ ...menu, about: false });
                }}
              >
                About Us&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i>
                {menu.about && (
                  <div
                    onMouseOver={() => {
                      setMenu({ ...menu, about: true });
                    }}
                    onMouseOut={() => {
                      setMenu({ ...menu, about: false });
                    }}
                    className="absolute z-10 bg-white rounded mt-8 p-4 w-48 shadow-lg transition-opacity duration-300 ease-in-out"
                  >
                    <div
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/board");
                        setMenu({ ...menu, about: false });
                      }}
                    >
                      Board
                    </div>
                    <div className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer">
                      Organization Chart
                    </div>
                    <div className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer">
                      Address
                    </div>
                  </div>
                )}
              </div> */}
            </div>
            <div className="w-[10%] lg:w-[5%] flex justify-end">
              {langauge === "de" ? (
                <img
                  src={de}
                  alt="de"
                  onClick={() => {
                    i18n.changeLanguage("de");
                    setLanguage("en");
                    setLoaderstatus(true);
                    setTimeout(() => {
                      setLoaderstatus(false);
                    }, 1000);
                  }}
                  className=" cursor-pointer w-[30px] h-[30px]"
                />
              ) : langauge === "en" ? (
                <img
                  src={en}
                  alt="de"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setLanguage("de");
                    setLoaderstatus(true);
                    setTimeout(() => {
                      setLoaderstatus(false);
                    }, 1000);
                  }}
                  className=" cursor-pointer w-[30px] h-[30px]"
                />
              ) : null}
            </div>
            <div className="w-[10%] flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus ? true : false}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for Mobile */}
        <div
          className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white           transform ${
            menuStatus
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full">
            <div className="w-[80%]">
              {/* <div className="text-[15px] cursor-pointer font-mont pb-7 font-semibold">
                About Us&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-7 font-semibold">
                  Board
                </div>
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-7 font-semibold">
                  Organization chart
                </div>
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-7 font-semibold">
                  Address
                </div>
              </div> */}

              <div
                className="text-[15px] py-5 cursor-pointer font-mont font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/");
                }}
              >
                {t("header.home")}
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/about");
                }}
              >
                {t("header.about")}&nbsp;&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div
                  onClick={() => {
                    setMenuStatus(false);
                    navigate("/board");
                  }}
                  className="w-[80%] text-[15px] flex justify-start cursor-pointer py-5 font-normal font-mont"
                >
                  {t("header.board")}
                </div>
                <div
                  onClick={() => {
                    setMenuStatus(false);
                    navigate("/chart");
                  }}
                  className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont"
                >
                  {t("header.chart")}
                </div>
                <div
                  onClick={() => {
                    setMenuStatus(false);
                    navigate("/address");
                  }}
                  className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont"
                >
                  {t("header.address")}
                </div>
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/regulations");
                }}
              >
                {t("header.regulations")}
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/report");
                }}
              >
                {t("header.report")}
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/applicationform");
                }}
              >
                {t("header.form")}
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/units");
                }}
              >
                {t("header.units")}
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/pictures");
                }}
              >
                {t("header.gallery")}&nbsp;&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div
                  onClick={() => {
                    setMenuStatus(false);
                    navigate("/settlement");
                  }}
                  className="w-[80%] text-[15px] flex justify-start cursor-pointer py-5 font-normal font-mont"
                >
                  {t("header.settlement")}
                </div>
                <div
                  onClick={() => {
                    setMenuStatus(false);
                    navigate("/archive");
                  }}
                  className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont"
                >
                  {t("header.archive")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
