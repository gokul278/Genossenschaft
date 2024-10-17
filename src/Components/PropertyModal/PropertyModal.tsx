import { useState } from "react";
import bed from "../../assets/Img/Home/Icon/Bed.svg";
import ruler from "../../assets/Img/Home/Icon/Ruler.svg";
// import img1 from "../../assets/img/Units/Properties/01-IMG.png";
interface Property {
  name: string;
  price: string;
  thumbnail: string;
  imgs: any; // Array of image URLs (as strings)
  type: string;
  bed: string;
  ruler: string;
}

interface PropertyModalProps {
  data: Property[]; // An array of Property objects
  handleclose: () => void; // Function to handle modal close
}

const PropertyModal: React.FC<PropertyModalProps> = ({ data, handleclose }) => {
  const [modaldata, setModalData] = useState({
    name: data[0].name, // Initialize with the first item's data
    bed: data[0].bed,
    ruler: data[0].ruler,
    imgs: data[0].imgs[0],
    currentimg: data[0].imgs[0][0], // Initialize with the first image
  });

  const handleNextImage = () => {
    setModalData((prevData) => {
      const currentIndex = prevData.imgs.indexOf(prevData.currentimg);
      const nextIndex = (currentIndex + 1) % prevData.imgs.length;
      return {
        ...prevData,
        currentimg: prevData.imgs[nextIndex],
      };
    });
  };

  const handlePrevImage = () => {
    setModalData((prevData) => {
      const currentIndex = prevData.imgs.indexOf(prevData.currentimg);
      const prevIndex =
        (currentIndex - 1 + prevData.imgs.length) % prevData.imgs.length; // Handle negative index
      return {
        ...prevData,
        currentimg: prevData.imgs[prevIndex],
      };
    });
  };

  return (
    <div className="fixed w-full h-screen inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="w-[90%] h-[98vh] lg:h-[90vh] bg-white flex justify-center flex-col items-center rounded">
        <div className="w-[100%] h-[8vh] border-b flex justify-center">
          <div className="w-[95%] h-[8vh] flex flex-row justify-between items-center">
            <h1
              className="text-[12px] w-[90%] lg:text-[18px] font-mont overflow-hidden whitespace-nowrap"
              style={{ textOverflow: "ellipsis" }}
            >
              {modaldata.name}
            </h1>
            <div>
              <i
                onClick={handleclose}
                className=" cursor-pointer text-[20px] fa-solid fa-xmark"
              ></i>
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[90vh] lg:h-[81vh] flex flex-col lg:flex-row items-center">
          <div className="w-[100%] lg:w-[80%] flex justify-between items-center py-10">
            <div>
              <i
                onClick={handlePrevImage}
                className="text-[20px] lg:text-[40px] text-[#555555] fa-solid fa-chevron-left cursor-pointer"
              ></i>
            </div>
            <img
              className="w-[90%] lg:w-[90%] h-[auto] lg:h-[70vh] object-contain"
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }${modaldata.currentimg}`}
              alt="img"
            />
            <div>
              <i
                onClick={handleNextImage}
                className="text-[20px] lg:text-[40px] text-[#555555] fa-solid fa-chevron-right cursor-pointer"
              ></i>
            </div>
          </div>
          <div className="w-[100%] lg:w-[25%] flex flex-wrap justify-center items-start">
            <div className="w-[90%] h-[10vh]">
              <h1
                className="font-mont font-semibold overflow-hidden whitespace-nowrap"
                style={{ textOverflow: "ellipsis" }}
              >
                {modaldata.name}
              </h1>
              <div className="mt-3 flex font-mont text-[16px]">
                <img className="w-[22px] h-[22px]" src={bed} alt="logo" />
                &nbsp;&nbsp;
                <div>{modaldata.bed}</div>&nbsp;&nbsp; &nbsp;&nbsp;
                <img className="w-[22px] h-[22px]" src={ruler} alt="logo" />
                &nbsp;&nbsp;
                <div>{modaldata.ruler}</div>
              </div>
            </div>
            <div className="h-[30vh] mt-3 lg:h-[60vh] overflow-y-auto">
              <div className="rounded flex flex-wrap justify-center gap-x-5 gap-y-3">
                {modaldata.imgs.map((img: string, index: number) => (
                  <img
                    key={index}
                    className="w-[100px] h-[100px] rounded object-cover object-center shadow-lg cursor-pointer"
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }${img}`}
                    onClick={() =>
                      setModalData((prevData) => ({
                        ...prevData,
                        currentimg: img,
                      }))
                    }
                    alt={`img-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
