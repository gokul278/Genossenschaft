import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/About/01-BG.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import assets1 from "../../assets/Img/About/01-ASSETS.png";
import assets2 from "../../assets/Img/About/02-ASSETS.png";
import assets3 from "../../assets/Img/About/03-ASSETS.png";
import img1 from "../../assets/Img/About/ICONS/AFOORT.svg";
import img2 from "../../assets/Img/About/ICONS/COMMUNITY.svg";
import img3 from "../../assets/Img/About/ICONS/SUSTAINABILITY.svg";
import img4 from "../../assets/Img/About/ICONS/TRANSPARENCY.svg";
import img5 from "../../assets/Img/About/ICONS/COLLABORATION.svg";
import TextareaInput from "../../Components/Inputs/TextareaInput";
import TextInput from "../../Components/Inputs/TextInput";
import bg4 from "../../assets/Img/Home/04-BG.png";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("global");
  return (
    <div
      className="w-full justify-center flex-col items-center flex"
      data-aos="fade-up"
    >
      <div
        className="w-[95%] h-[50vh] flex justify-center items-center"
        style={{
          background: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <div className="w-[90%]">
          <h1 className="text-[#fff] text-[30px] font-bold font-mont">
            {t("header.about")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/about")} className="cursor-pointer">
              {t("header.about")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[85%] mt-10">
        <HeadingLabel label={t("header.about")} />
        <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-y-10 h-[auto] lg:h-[45vh] items-center">
          <div className="w-[100%] lg:w-[60%] text-[16px] font-normal h-[auto] lg:h-[40vh] flex justify-center items-center font-mont text-justify">
            {t("about.content1")}
            <br />
            <br />
            {t("about.content2")}
          </div>
          <div className="w-[100%] lg:w-[38%] h-[auto] lg:h-[50vh] flex flex-col justify-center items-start">
            <div className="w-[100%] flex justify-end">
              <img
                src={assets1}
                className="w-[200px] lg:w-[300px] h-[250px] rounded"
                alt="assets1"
                data-aos="zoom-in"
              />
              <img
                src={assets2}
                className="w-[220px] -ml-[100px] mt-[120px] rounded"
                alt="assets2"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[95%] h-[auto] lg:h-[70vh] my-10 lg:bg-center flex justify-center items-center"
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
              src={assets3}
              className="w-[100%] lg:w-[500px] relative z-50 lg:-mt-[310px] lg:ml-[15px] h-[300px] rounded-[2px]"
              alt=""
            />
          </div>
          <div
            className="w-[100%] lg:w-[48%] pb-10 lg:pb-0 flex flex-col justify-center items-start"
            data-aos="fade-right"
          >
            <HeadingLabel label={t("about.historyhead")} />
            <p className="mt-3 text-[16px] font-normal font-mont text-justify">
              {t("about.historycontent")}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-around ${t("header.home") === "Home" ? "h-[450px]" : "h-[600px]"} lg:h-[140px] my-10 bg-[#ffcc41] rounded lg:rounded-r-full`}
        data-aos="fade-up"
      >
        <div className="block lg:hidden">
          <div className="w-[140px] h-[140px] border-[3px] border-[#ffcc41] flex flex-col justify-center items-center text-[20px] font-mont font-bold bg-[#fff] text-[#000] rounded-full">
            {t("about.our")} <div>Vision</div>
          </div>
        </div>
        <div className="w-[85%] lg:w-[80%] h-[300px] lg:h-[120px] text-justify lg:text-center font-mont flex justify-center items-center">
          {t("about.visioncontent")}
        </div>
        <div className="hidden lg:block">
          <div className="w-[160px] p-2 h-[160px] border-[3px] border-[#ffcc41] flex flex-col justify-center items-center text-[20px] font-mont font-bold  -mt-1 -mr-12 bg-[#fff] text-[#000] rounded-full">
            {t("about.our")} <div>Vision</div>
          </div>
        </div>
      </div>

      <div
        className={`w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-around ${t("header.home") === "Home" ? "h-[450px]" : "h-[600px]"} lg:h-[140px] my-10 bg-[#ffcc41] rounded lg:rounded-r-full`}
        data-aos="fade-up"
      >
        <div className="block lg:hidden">
          <div className="w-[140px] h-[140px] border-[3px] border-[#ffcc41] flex flex-col justify-center items-center text-[20px] font-mont font-bold bg-[#fff] text-[#000] rounded-full">
            {t("about.our")} <div>Mission</div>
          </div>
        </div>
        <div className="w-[85%] lg:w-[80%] h-[230px] lg:h-[120px] text-justify lg:text-center font-mont flex justify-center items-center">
          {t("about.missioncontent")}
        </div>
        <div className="hidden lg:block">
          <div className="w-[160px] h-[160px] border-[3px] border-[#ffcc41] flex flex-col justify-center items-center text-[20px] font-mont font-bold  -mt-1 -mr-12 bg-[#fff] text-[#000] rounded-full">
            {t("about.our")} <div>Mission</div>
          </div>
        </div>
      </div>

      <div className="w-[90%] my-10">
        <HeadingLabel label={t("about.core")} />
        <div className="w-full mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
          <div
            className="w-[200px] h-[250px] flex flex-col justify-around items-center"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <div className="h-[130px] flex justify-between flex-col items-center">
              <img src={img1} className="w-[80px] h-[80px]" alt="afford" />
              <p className="font-bold text-[20px] font-mont">
                {t("about.corehead1")}
              </p>
            </div>
            <p className="font-normal mt-[10px] h-[80px] lg:h-[110px] text-center text-[#555555] text-[15px] font-mont">
              {t("about.corecontent1")}
            </p>
          </div>
          <div
            className="w-[200px] h-[250px] flex flex-col justify-around items-center"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="h-[130px] flex justify-between flex-col items-center">
              <img src={img2} className="w-[80px] h-[80px]" alt="afford" />
              <p className="font-bold text-[20px] font-mont">
                {t("about.corehead2")}
              </p>
            </div>
            <p className="font-normal mt-[10px] h-[110px] text-center text-[#555555] text-[15px] font-mont">
              {t("about.corecontent2")}
            </p>
          </div>
          <div
            className="w-[200px] h-[250px] flex flex-col justify-around items-center"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="h-[130px] flex justify-between flex-col items-center">
              <img src={img3} className="w-[80px] h-[80px]" alt="afford" />
              <p className="font-bold text-[20px] font-mont">
                {t("about.corehead3")}
              </p>
            </div>
            <p className="font-normal mt-[10px] h-[110px] text-center text-[#555555] text-[15px] font-mont">
              {t("about.corecontent3")}
            </p>
          </div>
          <div
            className="w-[200px] h-[250px] flex flex-col justify-around items-center"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="h-[130px] flex justify-between flex-col items-center">
              <img src={img4} className="w-[80px] h-[80px]" alt="afford" />
              <p className="font-bold text-[20px] font-mont">
                {t("about.corehead4")}
              </p>
            </div>
            <p className="font-normal mt-[10px] h-[110px] text-center text-[#555555] text-[15px] font-mont">
              {t("about.corecontent4")}
            </p>
          </div>
          <div
            className="w-[200px] h-[250px] flex flex-col justify-around items-center"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <div className="h-[130px] flex justify-between flex-col items-center">
              <img src={img5} className="w-[80px] h-[80px]" alt="afford" />
              <p className="font-bold text-[20px] font-mont">
                {t("about.corehead5")}
              </p>
            </div>
            <p className="font-normal mt-[10px] h-[110px] text-center text-[#555555] text-[15px] font-mont">
              {t("about.corecontent5")}
            </p>
          </div>
        </div>
      </div>

      <div
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
          <h1 className="h-[20vh] text-[23px] lg:text-[30px] font-semibold font-mont text-[#fff] flex justify-center items-center text-center">
          {t("about.join")}
          </h1>
          <p className="text-[16px] font-normal font-mont text-[#fff] text-center">
          {t("about.content")}
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
      </div>
    </div>
  );
};

export default Aboutus;
