import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Units/01-BG.png";
// import prop1 from "../../assets/Img/Units/Properties/01-PROP.jpg";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import Properties from "../../Components/Properties/Properties";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import PropertyModal from "../../Components/PropertyModal/PropertyModal";

interface ModalData {
  name: string;
  price: string;
  thumbnail: string;
  imgs: any;
  type: string;
  bed: string;
  ruler: string;
}

const Units = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("global");

  const [modalStatus, setModalStatus] = useState(false);

  const [modaldata, setModaldata] = useState<ModalData | null>(null);

  const handleclose = () => {
    setModalStatus(false);
    setModaldata(null);
  };

  const PropertyData = [
    {
      name: "Wohneinheit mit 2 Mansarden",
      price: "15,000",
      thumbnail: "01.jpeg",
      imgs: ["01.jpeg", "02.jpeg"],
      type: "Apartment",
      bed: "1",
      ruler: "16.33 m2",
    },
    {
      name: "Wohneinheit mit 2½ Zimmer",
      price: "255,000",
      thumbnail: "03.jpeg",
      imgs: ["03.jpeg", "04.jpeg", "05.jpeg"],
      type: "Duplex Penthouse",
      bed: "2",
      ruler: "164.35 m2",
    },
    {
      name: "Wohneinheit mit 2 Zimmer + 2 Mansarden",
      price: "1,050,000",
      thumbnail: "06.jpeg",
      imgs: ["06.jpeg", "07.jpeg"],
      type: "Villa",
      bed: "1",
      ruler: "288 m2",
    },
    {
      name: "Wohneinheit mit 3 Zimmer",
      price: "1,050,000",
      thumbnail: "08.jpeg",
      imgs: ["08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg"],
      type: "Villa",
      bed: "3",
      ruler: "288 m2",
    },
    {
      name: "Wohneinheit mit 3 Zimmer + 1 Mansarde",
      price: "1,050,000",
      thumbnail: "12.jpeg",
      imgs: ["12.jpeg", "13.jpeg", "14.jpeg"],
      type: "Villa",
      bed: "4",
      ruler: "288 m2",
    },
    {
      name: "Wohneinheit mit 3 Zimmer + 3 Mansarden",
      price: "1,050,000",
      thumbnail: "15.jpeg",
      imgs: ["15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg"],
      type: "Villa",
      bed: "1",
      ruler: "288 m2",
    },
    {
      name: "Wohneinheit mit 3 Zimmer + 4 Mansarden",
      price: "1,050,000",
      thumbnail: "21.jpeg",
      imgs: ["21.jpeg", "22.jpeg"],
      type: "Villa",
      bed: "3",
      ruler: "288 m2",
    },
    {
      name: "Wohneinheit mit 4 Zimmer",
      price: "1,050,000",
      thumbnail: "23.jpeg",
      imgs: ["23.jpeg", "24.jpeg"],
      type: "Villa",
      bed: "3",
      ruler: "288 m2",
    },
  ];

  return (
    <>
      {modalStatus && modaldata && (
        <PropertyModal data={[modaldata]} handleclose={handleclose} />
      )}
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
              {t("header.units")}
            </h1>
            <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
              <span onClick={() => navigate("/")} className=" cursor-pointer">
                {t("header.home")}
              </span>{" "}
              &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
              <span
                onClick={() => navigate("/units")}
                className="cursor-pointer"
              >
                {t("header.units")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-[85%] my-10">
          <HeadingLabel label={t("units.head")} />
          <p className="mt-3 font-mont font-normal text-[18px] text-justify">
            {t("units.content")}
          </p>
        </div>

        <div className="w-[90%] lg:w-[85%] mb-10">
          <HeadingLabel label={t("units.available")} />
          <div className="flex flex-wrap justify-center items-center w-full mt-5 gap-x-20 gap-y-14">
            {PropertyData.map((element) => (
              <div
                className=" cursor-pointer"
                onClick={() => {
                  setModalStatus(true);
                  setModaldata({
                    name: element.name,
                    price: element.price,
                    thumbnail: element.thumbnail,
                    imgs: [element.imgs],
                    type: element.type,
                    bed: element.bed,
                    ruler: element.ruler,
                  });
                }}
              >
                <Properties
                  name={element.name}
                  price={element.price}
                  thumbnail={element.thumbnail}
                  imgs={element.imgs}
                  type={element.type}
                  bed={element.bed}
                  ruler={element.ruler}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Units;
