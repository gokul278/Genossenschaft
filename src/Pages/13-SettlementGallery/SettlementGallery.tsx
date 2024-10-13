import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Settlement/01-BG.png";
import img1 from "../../assets/Img/Settlement/IMG/01.jpg";
import img2 from "../../assets/Img/Settlement/IMG/02.jpg";
import img3 from "../../assets/Img/Settlement/IMG/03.jpg";
import img4 from "../../assets/Img/Settlement/IMG/04.jpg";
import img5 from "../../assets/Img/Settlement/IMG/05.jpg";
import img6 from "../../assets/Img/Settlement/IMG/06.jpg";
import img7 from "../../assets/Img/Settlement/IMG/07.jpg";
import img8 from "../../assets/Img/Settlement/IMG/08.jpg";
import img9 from "../../assets/Img/Settlement/IMG/09.jpg";
import img10 from "../../assets/Img/Settlement/IMG/10.jpg";
import img11 from "../../assets/Img/Settlement/IMG/11.jpg";
import img12 from "../../assets/Img/Settlement/IMG/12.jpg";
import img13 from "../../assets/Img/Settlement/IMG/13.jpg";
import img14 from "../../assets/Img/Settlement/IMG/14.jpg";
import img15 from "../../assets/Img/Settlement/IMG/15.jpeg";
import img16 from "../../assets/Img/Settlement/IMG/16.jpeg";
import img17 from "../../assets/Img/Settlement/IMG/17.jpeg";
import img18 from "../../assets/Img/Settlement/IMG/18.jpeg";
import img19 from "../../assets/Img/Settlement/IMG/19.jpeg";
import img20 from "../../assets/Img/Settlement/IMG/20.jpeg";
import img21 from "../../assets/Img/Settlement/IMG/21.jpg";
import img22 from "../../assets/Img/Settlement/IMG/22.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SettlementGallery = () => {
  const navigate = useNavigate();

  const imgData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
  ];

  const [modalStatus, setModalStatus] = useState({
    status: false,
    img: "",
  });

  const { t } = useTranslation("global");

  return (
    <div>
      {modalStatus.status ? (
        <div className="fixed w-full h-screen inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative p-4 rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[100%] lg:w-[50%] text-end">
                <i
                  className="text-[20px] text-[#ff0d0d] fa-solid fa-xmark cursor-pointer"
                  onClick={() => {
                    setModalStatus({
                      status: false,
                      img: "",
                    });
                  }}
                ></i>
              </div>
              <img
                className="mt-2 w-[100%] lg:w-[50%]"
                src={modalStatus.img}
                alt="img"
              />
            </div>
          </div>
        </div>
      ) : null}
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
              {t("header.settlement")}
            </h1>
            <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
              <span onClick={() => navigate("/")} className=" cursor-pointer">
                {t("header.home")}
              </span>{" "}
              &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
              <span
                onClick={() => navigate("/pictures")}
                className="cursor-pointer"
              >
                {t("header.gallery")}
              </span>
              &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
              <span
                onClick={() => navigate("/settlement")}
                className="cursor-pointer"
              >
                {t("header.settlement")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-[90%] lg:w-[70%] mt-10 mb-5 text-justify font-mont font-normal text-[16px]">
          {t("settlement.content1")}
        </div>

        <div className="w-[90%] lg:w-[70%] font-mont text-justify font-normal text-[16px]">
          {t("settlement.content2")}
        </div>

        <div className="w-[90%] lg:w-[73%] my-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10">
          {imgData.map((element, index) => (
            <div
              className="w-[300px] h-[300px]"
              onClick={() => {
                setModalStatus({
                  status: true,
                  img: element,
                });
              }}
            >
              <img
                className="w-[100%] h-[100%] rounded bg-center bg-contain"
                src={element}
                alt={`${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettlementGallery;
