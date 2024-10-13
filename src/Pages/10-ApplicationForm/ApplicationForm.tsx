import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Application Form/01-BG.png";
import logo1 from "../../assets/Img/Application Form/01-LOGO.svg";
import pdf from "../../assets/Img/Application Form/Application Form.pdf";
import { useTranslation } from "react-i18next";

const ApplicationForm = () => {
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
            {t("header.form")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span
              onClick={() => navigate("/applicationform")}
              className="cursor-pointer"
            >
              {t("header.form")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[85%] flex flex-col items-center gap-y-10  my-10">
        <p className="w-[100%] lg:w-[60%] font-mont justify-center font-semibold text-[20px]">
          {t("form.content1")}
        </p>

        <a href={pdf} download>
          <img className="w-[120px]" src={logo1} alt="logo1" />
        </a>
      </div>
    </div>
  );
};

export default ApplicationForm;
