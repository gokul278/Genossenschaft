import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Regulations/01-BG.png";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import assets3 from "../../assets/Img/Regulations/01-ASSETS.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import bylaws from "../../assets/Img/Regulations/Documents/Bylaws.pdf";
import houserules from "../../assets/Img/Regulations/Documents/House Rules.pdf";
import chart from "../../assets/Img/Regulations/Documents/Organization chart.pdf";
import regulations from "../../assets/Img/Regulations/Documents/Regulations.pdf";
import annualreport2019 from "../../assets/Img/Regulations/Documents/Annual Report 2019.pdf";
import annualreport2018 from "../../assets/Img/Regulations/Documents/Annual Report 2018.pdf";
import annualreport2017 from "../../assets/Img/Regulations/Documents/Annual Report 2017.pdf";
import annualreport2016 from "../../assets/Img/Regulations/Documents/Annual Report 2016.pdf";
import annualreport2015 from "../../assets/Img/Regulations/Documents/Annual Report 2015.pdf";
import { useTranslation } from "react-i18next";

const Regulations = () => {
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
            {t("header.regulations")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span
              onClick={() => navigate("/regulations")}
              className="cursor-pointer"
            >
              {t("header.regulations")}
            </span>
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
            <HeadingLabel label={t("documents.head")} />
            <p className="mt-3 text-[16px] font-normal font-mont text-justify">
              {t("documents.content")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[85%] mb-10">
        <HeadingLabel label={t("documents.docu&repo")} />
        <p className="mt-5 font-mont text-[18px]">
          {t("documents.docucontent")}
        </p>
      </div>

      <div className="w-[98%] lg:w-[85%] flex flex-col mb-10 lg:flex-row gap-y-10 justify-between">
        <div className="w-[100%] lg:w-[45%]">
          <table className="custom-table">
            <thead>
              <tr>
                <th>{t("documents.document")}</th>
                <th>Version</th>
                <td>
                  <i className="font-mont">Download</i>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("documents.bylaws")}</td>
                <td>06/2019</td>
                <td>
                  <a href={bylaws} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.chart")}</td>
                <td>06/2020</td>
                <td>
                  <a href={chart} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.rules")}</td>
                <td>04/2008</td>
                <td>
                  <a href={houserules} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.regulations")}</td>
                <td>-/-</td>
                <td>
                  <a href={regulations} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <table className="custom-table">
            <thead>
              <tr>
                <th>{t("documents.annualreport")}</th>
                <th>Version</th>
                <td>
                  <i>Download</i>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("documents.annualreports")} 2019</td>
                <td>07/2020</td>
                <td>
                  <a href={annualreport2019} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.annualreports")} 2018</td>
                <td>07/2019</td>
                <td>
                  <a href={annualreport2018} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.annualreports")} 2017</td>
                <td>05/2018</td>
                <td>
                  <a href={annualreport2017} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.annualreports")} 2016</td>
                <td>05/2017</td>
                <td>
                  <a href={annualreport2016} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t("documents.annualreports")} 2015</td>
                <td>05/2016</td>
                <td>
                  <a href={annualreport2015} download>
                    <i className=" cursor-pointer fa-solid fa-download"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
