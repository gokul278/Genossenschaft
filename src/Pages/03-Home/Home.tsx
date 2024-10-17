import bg1 from "../../assets/Img/Home/01-BG.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import assets1 from "../../assets/Img/Home/01-ASSETS.png";
import logo1 from "../../assets/Img/Home/Logo/01-HOME.svg";
import logo2 from "../../assets/Img/Home/Logo/02-AFFORD.svg";
import logo3 from "../../assets/Img/Home/Logo/03-COMMUNITY.svg";
import bg3 from "../../assets/Img/Home/03-BG.png";
// import bg4 from "../../assets/Img/Home/04-BG.png";
import Slider from "../../Components/Home-Slider/Slider";
// import TextInput from "../../Components/Inputs/TextInput";
// import TextareaInput from "../../Components/Inputs/TextareaInput";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";

const Home = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#fff]">
      <div className="w-[95%] h-[85vh] lg:h-[70vh] flex justify-center">
        <div
          className="w-[100%] h-[85vh] lg:h-[70vh] flex flex-col justify-center items-center"
          style={{
            background: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="w-[90%] mt-[10vh] flex flex-col justify-center items-center">
            <h1
              className="text-[25px] lg:text-[30px] font-mont text-center text-white font-bold"
              data-aos="fade-up"
            >
              {t("home.heading1")} <br />
              {t("home.heading2")}
            </h1>
            <p
              className="w-[100%] lg:w-[90%] text-[17px] lg:text-[20px] font-mont py-5 text-center text-white font-normal"
              data-aos="fade-up"
            >
              {t("home.content1")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center pt-10">
        <div
          className="w-[95%] h-[auto] lg:h-[70vh] lg:bg-center flex justify-center items-center"
          style={{
            background: `url(${bg2})`,
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="w-[90%] flex-col flex lg:flex-row justify-between">
            <div
              className="w-[100%] lg:w-[50%] pt-14 pb-10 lg:pt-0 lg:pb-0 flex flex-col justify-center items-start"
              data-aos="zoom-in"
            >
              <div className="w-[100%] lg:w-[500px] h-[300px] relative hidden lg:block z-0 bg-[#ffcc41] rounded-[2px]"></div>
              <img
                src={assets1}
                className="w-[100%] lg:w-[500px] relative z-50 lg:-mt-[310px] lg:ml-[15px] h-[300px] rounded-[2px]"
                alt=""
              />
            </div>
            <div
              className="w-[100%] lg:w-[48%] pb-10 lg:pb-0 flex flex-col justify-center items-start"
              data-aos="fade-right"
            >
              <h1 className="text-[25px] font-semibold font-mont">
                {t("home.mainhead1")}{" "}
                <span className="font-bold">{t("home.mainhead2")}</span>
                <div className="hidden lg:block"></div>
                {t("home.mainhead3")}{" "}
              </h1>
              <p className="mt-3 text-[16px] font-normal font-mont text-justify">
                {t("home.mainheadcontent")}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[95%] flex flex-col  items-center justify-center py-5">
          <div className="w-[90%]">
            <h1 className="text-[25px] lg:text-[40px] font-mont font-bold">
              {t("home.keyhead")}
            </h1>
          </div>
          <div className="w-[100%] flex flex-wrap gap-x-10 justify-center items-center">
            <div
              className="w-[300px] mt-10 lg:my-10 border-0 lg:border-r-2"
              data-aos="zoom-in"
              data-aos-duration="400"
            >
              <img className="w-[80px] h-[80px]" src={logo1} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-start items-center font-mont font-bold mt-3">
                {t("home.keyhead1")}
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                {t("home.keycontent1")}
              </p>
            </div>

            <div
              className="w-[300px] mt-10 lg:my-10 border-0 lg:border-r-2"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img className="w-[80px] h-[80px]" src={logo2} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-start items-center font-mont font-bold mt-3">
                {t("home.keyhead2")}
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                {t("home.keycontent2")}
              </p>
            </div>

            <div
              className="w-[300px]  my-10"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              <img className="w-[80px] h-[80px]" src={logo3} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-center items-center font-mont font-bold mt-3">
                {t("home.keyhead3")}
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                {t("home.keycontent3")}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div
              className={`${
                t("header.home") === "Home"
                  ? "w-[200px] h-[60px]"
                  : "w-[250px] h-[80px]"
              } flex justify-center items-center text-center rounded cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont`}
              onClick={() => {
                navigate("/address");
              }}
            >
              {t("home.join")}
            </div>
          </div>
        </div>

        <div
          className="w-[95%] flex justify-center h-[auto] lg:h-[auto] bg-center pb-10"
          style={{
            background: `url(${bg3})`,
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="w-[90%] h-[auto] flex-col flex justify-center items-center">
            <h1 className="h-[15vh] text-[23px] lg:text-[30px] font-semibold font-mont text-[#fff] flex justify-center items-center">
              {t("home.whyquestion")}
            </h1>
            <ReviewSlider />
            <div className="w-full flex justify-center">
              <div
                className={`${
                  t("header.home") === "Home"
                    ? "w-[200px] h-[60px]"
                    : "w-[250px] h-[80px]"
                } flex justify-center items-center text-center rounded cursor-pointer bg-white text-[#000] text-[18px] transition-all duration-300 hover:bg-transparent hover:text-[#fff] border-2 border-[#fff] font-bold font-mont`}
                onClick={() => {
                  navigate("/address");
                }}
              >
                {t("home.join")}
              </div>
            </div>
            {/* <h1 className="h-[20vh] text-[23px] lg:text-[30px] font-semibold font-mont text-[#fff] flex justify-center items-center">
              {t("home.whyquestion")}
            </h1>
            <div className="w-[100%] h-[auto] flex gap-x-10 overflow-y-auto">
              <WhyCard
                head={t("home.whyhead1")}
                content={t("home.whycontent1")}
              />

              <WhyCard
                head={t("home.whyhead1")}
                content={t("home.whycontent1")}
              />

              <WhyCard
                head={t("home.whyhead1")}
                content={t("home.whycontent1")}
              />
              <WhyCard
                head={t("home.whyhead1")}
                content={t("home.whycontent1")}
              />
              <WhyCard
                head={t("home.whyhead1")}
                content={t("home.whycontent1")}
              />
            </div> */}
          </div>
        </div>

        <div className="w-[95%] mt-14">
          <div className="w-[100%] mt-5 bg-[#fff] flex justify-center items-center">
            <div className="w-[90%] lg:w-[90%]">
              <div className="flex w-full justify-between mb-10">
                <h1 className="text-[20px] lg:text-[40px] font-mont font-bold">
                  {t("home.viewhead")}
                </h1>
                <div className="text-[18px] justify-center items-center flex font-mont font-bold">
                  <div
                    className="py-2 px-3 rounded text-center cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont"
                    onClick={() => {
                      navigate("/units");
                    }}
                  >
                    {t("home.viewbtn")}
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-full lg:w-[90%]">
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="w-[95%] mt-10 flex justify-center h-[auto] lg:h-screen pb-10"
          style={{
            background: `url(${bg4})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[90%] h-[auto] flex justify-center items-center flex-col lg:h-screen">
            <h1 className="h-[20vh] text-[23px] lg:text-[30px] font-semibold font-mont text-[#fff] flex justify-center items-center">
              {t("home.lets")}
            </h1>
            <p className="text-[16px] font-normal font-mont text-[#fff] text-center">
              {t("home.letscontent")}
            </p>
            <div className="w-[100%] lg:w-[50%] bg-white p-10 rounded justify-between mt-10">
              <div className="w-[100%]">
                <TextInput id="name" type="text" name="name" label="Name" />
              </div>
              <div className="w-[100%]">
                <TextareaInput
                  id="othercomments"
                  name="othercomments"
                  label="Any Other Comments"
                />
              </div>
              <div className="w-full">
                <div className="py-2 px-3 rounded text-center cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont">
                  {t("home.submitbtn")}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="w-[95%] pt-14 pb-10 flex justify-center items-center">
          <div className="w-[90%]">
            <h1 className="text-[40px] font-mont font-bold">
              Words from Our Residents
            </h1>
            <div className="w-full flex mt-8 justify-center items-center">
              <ReviewSlider />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
