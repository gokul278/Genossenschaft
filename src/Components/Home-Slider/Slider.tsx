import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
// import sliderimg1 from "../../assets/Img/Home/SliderImg/sliderimg-1.jpg";
// import sliderimg2 from "../../assets/Img/Home/SliderImg/sliderimg-2.jpg";
// import sliderimg3 from "../../assets/Img/Home/SliderImg/sliderimg-3.jpg";
import bed from "../../assets/Img/Home/Icon/Bed.svg";
// import bath from "../../assets/Img/Home/Icon/Bath.svg";
import ruler from "../../assets/Img/Home/Icon/Ruler.svg";
import PropertyModal from "../PropertyModal/PropertyModal";
// import img1 from "../../assets/img/Units/Properties/01-IMG.png";
// import img2 from "../../assets/img/Units/Properties/02-IMG.png";
// import img3 from "../../assets/img/Units/Properties/03-IMG.png";
// import img4 from "../../assets/img/Units/Properties/04-IMG.png";

interface ModalData {
  name: string;
  price: string;
  thumbnail: string;
  imgs: any;
  type: string;
  bed: string;
  ruler: string;
}

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      autoplay: 3500,
      rewind: true,
      rewindDuration: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const [modalStatus, setModalStatus] = useState(false);

  const [modaldata, setModaldata] = useState<ModalData | null>(null);

  const handleclose = () => {
    setModalStatus(false);
    setModaldata(null);
  };

  const sliderData = [
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
    }
  ];

  // const [modaldata, setModalData] = useState({
  //   name: "Sea View Duplex Penthouse",
  //   bed: "2",
  //   ruler: "150.33 m2",
  //   imgs: [img1, img2, img3, img4], // Your array of images
  //   currentimg: img1, // Initialize with the first image
  // });

  // const handleNextImage = () => {
  //   const currentIndex = modaldata.imgs.indexOf(modaldata.currentimg);
  //   const nextIndex = (currentIndex + 1) % modaldata.imgs.length;
  //   setModalData({
  //     ...modaldata,
  //     currentimg: modaldata.imgs[nextIndex],
  //   });
  // };

  // const handlePrevImage = () => {
  //   const currentIndex = modaldata.imgs.indexOf(modaldata.currentimg);
  //   const prevIndex =
  //     (currentIndex - 1 + modaldata.imgs.length) % modaldata.imgs.length; // Handle negative index
  //   setModalData({
  //     ...modaldata,
  //     currentimg: modaldata.imgs[prevIndex],
  //   });
  // };

  return (
    <>
      {modalStatus && modaldata && (
        <PropertyModal data={[modaldata]} handleclose={handleclose} />
      )}

      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 bg-[#fff] relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {sliderData.map((element) => (
              <li
                className="w-[320px] cursor-pointer"
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
                <div
                  className="w-[320px] lg:w-[320px] h-[250px]"
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_PUBLIC_URL
                    }${element.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div className="w-[100%] h-[250px] flex items-end relative group">
                    <div className="w-[100%] h-[250px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent hover:opacity-0 opacity-70 transition-opacity duration-300"></div>
                    <div className="w-[100%] text-[#fff] h-[40px] flex justify-center items-center z-10">
                      <div className="w-[90%] flex justify-end">
                        <div className="text-[18px] font-semibold">
                          <i className="text-[16px] text-[#fff] fa-solid fa-expand"></i>
                        </div>
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
                    {element.name}
                  </h1>
                  <h1
                    className="w-[320px] mt-3 font-plus font-semibold overflow-hidden whitespace-nowrap"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex">
                          <img
                            className="w-[22px] h-[22px]"
                            src={bed}
                            alt="logo"
                          />
                          &nbsp;&nbsp;
                          <div>{element.bed}</div>&nbsp;&nbsp;
                          {/* <img
                            className="w-[22px] h-[22px]"
                            src={bath}
                            alt="logo"
                          /> */}
                          &nbsp;&nbsp;
                          <img
                            className="w-[22px] h-[22px]"
                            src={ruler}
                            alt="logo"
                          />
                          &nbsp;&nbsp;
                          <div>{element.ruler}</div>
                        </div>
                        <div className="mt-2 uppercase text-[13px]">
                          {element.type}
                        </div>
                      </div>
                      {/* <div>
                        <button className="bg-[#306677] py-2 px-2 text-[#fff] rounded">
                          Details
                        </button>
                      </div> */}
                    </div>
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full mt-5 items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
