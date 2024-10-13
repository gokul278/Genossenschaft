import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Units/01-BG.png";
import prop1 from "../../assets/Img/Units/Properties/01-PROP.jpg";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import Properties from "../../Components/Properties/Properties";
import { useTranslation } from "react-i18next";

const Units = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("global");

  const PropertyData = [
    {
      name: " Modern luxury villa with 5 bedrooms close to the center of Ciudad Quesada",
      price: "15,000",
      img: prop1,
      type: "Apartment",
      bed: "2",
      bath: "2",
      ruler: "16.33 m2",
    },
    {
      name: "Sea View Duplex Penthouse",
      price: "255,000",
      img: prop1,
      type: "Duplex Penthouse",
      bed: "3",
      bath: "2",
      ruler: "164.35 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },

    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: prop1,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
  ];

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
            {t("header.units")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/units")} className="cursor-pointer">
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

      <div className="w-[85%] mb-10">
        <HeadingLabel label={t("units.available")} />
        <div className="flex flex-wrap w-full mt-5 gap-x-20 gap-y-14">
          {PropertyData.map((element) => (
            <Properties
              name={element.name}
              price={element.price}
              img={element.img}
              type={element.type}
              bed={element.bed}
              bath={element.bath}
              ruler={element.ruler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Units;
