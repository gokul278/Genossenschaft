import { useState } from "react";
import de from "../../assets/Img/Language/de.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Img/Logo/LOGO.png";

export default function Header() {
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);
  const [menu, setMenu] = useState({
    about: false,
    pictures: false,
  });

  return (
    <>
      <div className="w-full">
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : null
          } justify-center items-center h-[80px] bg-white`}
        >
          <div className="w-[100%] h-[10vh] lg:w-[95%] flex justify-evenly items-center">
            <div className="w-[50%] lg:w-[15%] flex justify-start ">
              <img src={logo} className="h-[100%]" alt="log" />
            </div>
            <div className="hidden lg:flex w-[80%] justify-center gap-x-9">
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/");
                }}
              >
                <span className="underline-animation">Home</span>
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
                  About Us&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i>
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
                      Board
                    </div>
                    <div className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer">
                      Organization Chart
                    </div>
                    <div
                      onClick={() => {
                        navigate("/address");
                        setMenu({ ...menu, about: false });
                      }}
                      className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer"
                    >
                      Address
                    </div>
                  </div>
                )}
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span className="underline-animation">
                  Regulations & Documents
                </span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span className="underline-animation">Annual report</span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span className="underline-animation">Application form</span>
              </div>
              <div
                className="text-[15px] py-10 cursor-pointer font-mont mt-2 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/contact");
                }}
              >
                <span className="underline-animation">Units</span>
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
                <span className="underline-animation">
                  Picture Gallery&nbsp;&nbsp;
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
                        navigate("/board");
                        setMenu({ ...menu, about: false });
                      }}
                    >
                      Settlement
                    </div>
                    <div className="hover:bg-[#e6eaf8] rounded p-2 cursor-pointer">
                      Archive
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
              <img src={de} alt="de" className="w-[30px] h-[30px]" />
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
                Home
              </div>
              <div className="text-[15px] cursor-pointer font-mont font-semibold">
                About Us&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer py-5 font-normal font-mont">
                  Board
                </div>
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont">
                  Organization chart
                </div>
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont">
                  Address
                </div>
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  navigate("/");
                }}
              >
                Regulations & Documents
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  navigate("/");
                }}
              >
                Annual report
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/contact");
                }}
              >
                Application form
              </div>
              <div
                className="text-[15px] cursor-pointer font-mont pb-5 font-semibold"
                onClick={() => {
                  setMenuStatus(false);
                  navigate("/contact");
                }}
              >
                Units
              </div>
              <div className="text-[15px] cursor-pointer font-mont font-semibold">
                Picture Gallery&nbsp;&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer py-5 font-normal font-mont">
                  Settlement
                </div>
                <div className="w-[80%] text-[15px] flex justify-start cursor-pointer pb-5 font-normal font-mont">
                  Archive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
