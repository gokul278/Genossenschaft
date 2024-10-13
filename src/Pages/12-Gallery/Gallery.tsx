import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Gallery/01-BG.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import assets1 from "../../assets/Img/Gallery/01-ASSETS.png";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import img1 from "../../assets/Img/Gallery/Gallery Img/01.jpeg";
import img2 from "../../assets/Img/Gallery/Gallery Img/02.jpeg";
import img3 from "../../assets/Img/Gallery/Gallery Img/03.jpeg";
import img4 from "../../assets/Img/Gallery/Gallery Img/04.jpeg";
import img5 from "../../assets/Img/Gallery/Gallery Img/05.jpeg";
import img6 from "../../assets/Img/Gallery/Gallery Img/06.jpeg";
import img7 from "../../assets/Img/Gallery/Gallery Img/07.jpeg";
import img8 from "../../assets/Img/Gallery/Gallery Img/08.jpeg";
import img9 from "../../assets/Img/Gallery/Gallery Img/09.jpeg";
import img10 from "../../assets/Img/Gallery/Gallery Img/10.jpeg";
import img11 from "../../assets/Img/Gallery/Gallery Img/11.jpeg";
import img12 from "../../assets/Img/Gallery/Gallery Img/12.jpeg";
import img13 from "../../assets/Img/Gallery/Gallery Img/13.jpeg";
import img14 from "../../assets/Img/Gallery/Gallery Img/14.jpeg";
import img15 from "../../assets/Img/Gallery/Gallery Img/15.jpeg";
import img16 from "../../assets/Img/Gallery/Gallery Img/16.jpeg";
import img17 from "../../assets/Img/Gallery/Gallery Img/17.jpeg";
import img18 from "../../assets/Img/Gallery/Gallery Img/18.jpeg";
import img19 from "../../assets/Img/Gallery/Gallery Img/19.jpeg";
import img20 from "../../assets/Img/Gallery/Gallery Img/20.jpeg";
import img21 from "../../assets/Img/Gallery/Gallery Img/21.jpeg";
import img22 from "../../assets/Img/Gallery/Gallery Img/22.jpeg";
import img23 from "../../assets/Img/Gallery/Gallery Img/23.jpeg";
import img24 from "../../assets/Img/Gallery/Gallery Img/24.jpeg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("global");

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
    img23,
    img24,
  ];

  const [modalStatus, setModalStatus] = useState({
    status: false,
    img: "",
  });

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
              {t("header.gallery")}
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
            </div>
          </div>
        </div>

        <div className="w-[85%] my-10">
          <HeadingLabel label={t("gallery.head1")} />
          <p className="mt-3 font-mont font-normal text-justify text-[16px]">
          {t("gallery.content1")}
          </p>
        </div>

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
              {t("gallery.head2")}
              </h1>
              <p className="mt-3 text-[16px] font-normal font-mont text-justify">
              {t("gallery.content2")}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] lg:w-[73%] my-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-10">
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

export default Gallery;
