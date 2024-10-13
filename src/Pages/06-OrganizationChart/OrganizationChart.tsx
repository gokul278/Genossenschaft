import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Chart/01-BG.png";
import chart1 from "../../assets/Img/Chart/01-CHART.png";
import { useTranslation } from "react-i18next";

const OrganizationChart = () => {
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
            {t("header.chart")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/about")} className="cursor-pointer">
              {t("header.about")}
            </span>
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/chart")} className="cursor-pointer">
              {t("header.chart")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[80%] my-14 flex flex-col justify-center items-center gap-y-10">
        <div
          data-aos="fade-right"
          className="w-[100%] lg:w-[60%] flex justify-center items-center font-mont font-semibold text-center text-[18px]"
        >
          {t("chart.content1")}
        </div>

        <div
          data-aos="fade-right"
          className="w-[100%] lg:w-[100%] flex justify-center items-center font-mont font-semibold text-center text-[18px]"
        >
          {t("chart.content2")}
        </div>
      </div>

      <div className="w-[95%] mt-10">
        <img src={chart1} alt="chart1" />
      </div>
    </div>
  );
};

export default OrganizationChart;
