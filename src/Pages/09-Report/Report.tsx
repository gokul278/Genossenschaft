import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Report/01-BG.png";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import assets1 from "../../assets/Img/About/01-ASSETS.png";
import assets2 from "../../assets/Img/About/02-ASSETS.png";
import assets3 from "../../assets/Img/Report/01-ASSETS.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import { useTranslation } from "react-i18next";

const Report = () => {
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
            {t("header.report")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span
              onClick={() => navigate("/report")}
              className="cursor-pointer"
            >
              {t("header.report")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[85%] mt-10">
        <HeadingLabel label={`${t("documents.annualreports")} 2020`} />
        <p className="my-5 font-mont text-[18px] font-normal">
          {t("report.content1")}
        </p>
        <p className="font-mont text-[18px] font-normal">
          {t("report.content2")}
        </p>
      </div>

      <div className="w-[85%] mt-10">
        <HeadingLabel label={t("report.historyhead")} />
        <div className=" mt-8 w-[100%] flex flex-col lg:flex-row justify-between gap-y-10 h-[auto] lg:h-[45vh] items-center">
          <div className="w-[100%] lg:w-[60%] text-[16px] font-normal h-[auto] lg:h-[40vh] flex flex-col justify-center items-start font-mont text-justify">
            <span className="mb-5">{t("report.historycontent1")}</span>
            <span className="mb-5 font-bold">
              {t("report.historycontent2")}
            </span>
            <div className="w-[100%] flex">
              <div className="w-[10%] text-center">1.</div>
              <div className="w-[85%]">
                <span>{t("report.histiropoint1")}</span>
              </div>
            </div>

            <div className="w-[100%] flex my-3">
              <div className="w-[10%] text-center">2.</div>
              <div className="w-[85%]">
                <span>{t("report.histiropoint2")}</span>
              </div>
            </div>

            <div className="w-[100%] flex">
              <div className="w-[10%] text-center">3.</div>
              <div className="w-[85%]">
                <span>{t("report.histiropoint3")}</span>
              </div>
            </div>

            <p className="mt-5">{t("report.histiropoint4")}</p>
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

      <div className="w-[85%] mt-16">
        <HeadingLabel label={t("report.nexthead")} />
        <div className="w-[100%] font-mont text-[16px] font-normal">
          <p className="mt-5">{t("report.nextcontent1")}</p>

          <div className="w-[100%] flex mt-10">
            <div className="w-[10%] lg:w-[5%] text-center">1.</div>
            <div className="w-[90%]">
              <span>{t("report.nextpoint1")}</span>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div className="w-[10%] lg:w-[5%] text-center">2.</div>
            <div className="w-[90%]">
              <span>{t("report.nextpoint2")}</span>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div className="w-[10%] lg:w-[5%] text-center">3.</div>
            <div className="w-[90%]">
              <span>{t("report.nextpoint3")}</span>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div className="w-[10%] lg:w-[5%] text-center">4.</div>
            <div className="w-[90%]">
              <span>{t("report.nextpoint4")}</span>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div className="w-[10%] lg:w-[5%] text-center">5.</div>
            <div className="w-[90%]">
              <span>{t("report.nextpoint5")}</span>
            </div>
          </div>

          <p className="mt-5">{t("report.nextpoint6")}</p>

          <p className="mt-5">
            {t("report.nextpoint7")}
            <span className="font-bold">{t("report.nextpoint8")}</span>
          </p>
        </div>
      </div>

      <div
        className="w-[95%] mt-16 h-[auto] lg:h-[70vh] lg:bg-center flex justify-center items-center"
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
            <h1 className="text-[25px] font-semibold font-mont">
              {t("report.whathead")}
            </h1>
            <p className="mt-5 text-[16px] font-normal font-mont text-justify">
              <div className="w-[100%] flex">
                <div className="w-[5%]">1.</div>
                <div className="w-[95%]">{t("report.whatpoint1")}</div>
              </div>

              <div className="w-[100%] flex my-3">
                <div className="w-[5%]">2.</div>
                <div className="w-[95%]">{t("report.whatpoint2")}</div>
              </div>

              <div className="w-[100%] flex">
                <div className="w-[5%]">3.</div>
                <div className="w-[95%]">{t("report.whatpoint3")}</div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[85%] mt-16 mb-10">
        <p className="w-full font-mont font-normal text-[16px]">
          {t("report.final1")}
        </p>

        <p className="w-full font-mont font-normal text-[16px] mt-5">
          {t("report.final2")}
        </p>

        <p className="w-full font-mont font-bold text-[16px] mt-5">
          {t("report.final3")}
        </p>

        <p className="w-full font-mont font-semibold text-[16px] mt-2">
          Danny Freundlieb
        </p>
      </div>
    </div>
  );
};

export default Report;
