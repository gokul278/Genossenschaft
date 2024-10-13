import React from "react";
import bedimg from "../../assets/Img/Home/Icon/Bed.svg";
import bathimg from "../../assets/Img/Home/Icon/Bath.svg";
import rulerimg from "../../assets/Img/Home/Icon/Ruler.svg";

// Define the props interface
interface PropertyProps {
  name: string;
  price: string;
  img: any;
  type: string;
  bed: string;
  bath: string;
  ruler: string;
}

// Reusable Properties component
const Properties: React.FC<PropertyProps> = ({
  name,
  price,
  img,
  type,
  bed,
  bath,
  ruler,
}) => {
  return (
    <div className="w-[320px] cursor-pointer">
      <div
        className="w-[320px] lg:w-[320px] h-[250px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-[100%] h-[250px] flex items-end relative group">
          <div className="w-[100%] h-[250px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent hover:opacity-0 opacity-70 transition-opacity duration-300"></div>
          <div className="w-[100%] text-[#fff] h-[40px] flex justify-center items-center z-10">
            <div className="w-[90%] flex justify-between">
              <div className="text-[18px] font-semibold">€ {price}</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[320px] mt-4">
        <h1
          className="w-[320px] font-plus font-semibold overflow-hidden whitespace-nowrap"
          style={{ textOverflow: "ellipsis" }}
        >
          {name}
        </h1>
        <h1
          className="w-[320px] mt-3 font-plus font-semibold overflow-hidden whitespace-nowrap"
          style={{ textOverflow: "ellipsis" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex">
                <img className="w-[22px] h-[22px]" src={bedimg} alt="bed logo" />
                &nbsp;&nbsp;
                <div>{bed}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <img className="w-[22px] h-[22px]" src={bathimg} alt="bath logo" />
                &nbsp;&nbsp;
                <div>{bath}</div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img className="w-[22px] h-[22px]" src={rulerimg} alt="ruler logo" />
                &nbsp;&nbsp;
                <div>{ruler}</div>
              </div>
              <div className="mt-2 uppercase text-[13px]">{type}</div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Properties;
