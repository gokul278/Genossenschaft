import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Contact/01-BG.png";
import TextInput from "../../Components/Inputs/TextInput";
// import SelectInput from "../../Components/Inputs/SelectInput";
import TextareaInput from "../../Components/Inputs/TextareaInput";
import { useTranslation } from "react-i18next";
import CheckBox from "../../Components/Inputs/CheckBox";
// import { useState } from "react";

const ContactUs = () => {
  // const [input, setInput] = useState({
  //   name: "",
  //   email: "",
  //   phoneno: "",
  //   subject: "",
  //   message: "",
  // });

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
            {t("header.address")}
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
            <span
              onClick={() => navigate("/address")}
              className="cursor-pointer"
            >
              {t("header.address")}
            </span>
          </div>
        </div>
      </div>

      {/* <div className="w-[95%] flex justify-center items-center">
        <div className="w-[90%] my-10">
          <h1 className="text-[25px] lg:text-[40px] font-mont font-bold">
            {t("address.get")}
          </h1>
          <p className="text-[#555555] mt-4 font-normal text-justify">
            {t("address.getcontent")}
          </p>
        </div>
      </div>

      <div className="w-[95%] my-10 flex justify-center items-center">
        <div className="w-[90%] flex flex-wrap justify-center gap-x-10 gap-y-10">
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] shadow-sm border flex justify-center flex-col items-center gap-y-10">
            <h1>
              <i className="text-[40px] text-[#555555] fa-solid fa-phone"></i>
            </h1>
            <p className="text-[20px] text-[#000] font-bold font-mont">
              +41 XXXXXXXX
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] shadow-sm border flex justify-center flex-col items-center gap-y-10">
            <h1>
              <i className="text-[40px] text-[#555555] fa-solid fa-envelope"></i>
            </h1>
            <p className="text-[20px] text-[#000] font-bold font-mont">
              XXXXXX@XXX.com
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] shadow-sm border flex justify-center flex-col items-center gap-y-9">
            <div className="flex justify-center flex-row items-center gap-x-10">
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-facebook-f"></i>
              </h1>
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-instagram"></i>
              </h1>
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-linkedin-in"></i>
              </h1>
            </div>

            <p className="text-[20px] text-[#000] font-bold font-mont">
              {t("address.social")}
            </p>
          </div>
        </div>
      </div> */}

      <div className="w-[95%] flex justify-center items-center my-10">
        <div className="w-[90%] my-5 flex flex-col lg:flex-row justify-center">
          <div className="w-[100%] lg:w-[50%] border px-5 py-3 rounded">
            <h1 className="text-[25px] lg:text-[30px] text-center font-mont font-bold mb-10">
              {t("address.contactform")}
            </h1>
            <div className="w-[100%] flex justify-between">
              <div className="w-[49%]">
                <TextInput
                  id="fname"
                  type="text"
                  name="fname"
                  label="Vorname*"
                />
              </div>
              <div className="w-[49%]">
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  label="Nachname*"
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between">
              <div className="w-[49%]">
                <TextInput
                  id="mobileno"
                  type="tel"
                  name="mobileno"
                  label="Telefon/Mobile"
                />
              </div>
              <div className="w-[49%]">
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  label="E-mail*"
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between">
              <div className="w-[100%]">
                <TextInput
                  id="regarding"
                  type="text"
                  name="Betreff"
                  label="Regarding"
                />
              </div>
            </div>
            <div className="">
              <TextareaInput id="news" name="news" label="Nachricht" />
            </div>
            <div className="mt-3">
              <CheckBox
                label="Bitte rufen Sie mich zurück"
                checked={false}
                onChange={(newChecked) => console.log(newChecked)}
                disabled={false}
              />
            </div>
            <div className="mt-10 mb-3">
              <div className="py-2 px-3 rounded text-center cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont">
                SENDEN
              </div>
            </div>
          </div>

          {/* <div className="w-[100%] lg:w-[48%]">
           
            <h1 className="text-[20px] lg:text-[40px] font-mont font-bold mb-10">
              {t("address.ourlocation")}
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.684892936333!2d78.14989567452514!3d11.645788388560824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728453895619!5m2!1sen!2sin"
              width="100%"
              className="h-[300px] lg:h-[85%]"
              allowFullScreen // instead of allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // instead of referrerpolicy
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
