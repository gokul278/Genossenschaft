import { useEffect } from "react";
import Glide from "@glidejs/glide";
import sliderimg1 from "../../assets/Img/Home/SliderImg/sliderimg-1.jpg";
import sliderimg2 from "../../assets/Img/Home/SliderImg/sliderimg-2.jpg";
import sliderimg3 from "../../assets/Img/Home/SliderImg/sliderimg-3.jpg";
import bed from "../../assets/Img/Home/Icon/Bed.svg";
import bath from "../../assets/Img/Home/Icon/Bath.svg";
import ruler from "../../assets/Img/Home/Icon/Ruler.svg";

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
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

  const sliderData = [
    {
      name: " Modern luxury villa with 5 bedrooms close to the center of Ciudad Quesada",
      price: "15,000",
      img: sliderimg1,
      type: "Apartment",
      bed: "2",
      bath: "2",
      ruler: "16.33 m2",
    },
    {
      name: "Sea View Duplex Penthouse",
      price: "255,000",
      img: sliderimg2,
      type: "Duplex Penthouse",
      bed: "3",
      bath: "2",
      ruler: "164.35 m2",
    },
    {
      name: " Luxury villa with 4 bedrooms, 3 bathrooms and 2 guest toilets",
      price: "1,050,000",
      img: sliderimg3,
      type: "Villa",
      bed: "4",
      bath: "3",
      ruler: "288 m2",
    },
  ];

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 bg-[#fff] relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {sliderData.map((element) => (
              <li className="w-[320px] cursor-pointer">
                <div
                  className="w-[320px] lg:w-[320px] h-[250px]"
                  style={{
                    backgroundImage: `url(${element.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div className="w-[100%] h-[250px] flex items-end relative group">
                    <div className="w-[100%] h-[250px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent hover:opacity-0 opacity-70 transition-opacity duration-300"></div>
                    <div
                      className="w-[100%] text-[#fff] h-[40px] flex justify-center items-center z-10"
                      align="center"
                    >
                      <div className="w-[90%] flex justify-between">
                        <div className="text-[18px] font-semibold">
                          € {element.price}
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[320px] mt-4" align="center">
                  <h1
                    className="w-[320px] font-plus font-semibold overflow-hidden whitespace-nowrap"
                    style={{ textOverflow: "ellipsis" }}
                    align="start"
                  >
                    {element.name}
                  </h1>
                  <h1
                    className="w-[320px] mt-3 font-plus font-semibold overflow-hidden whitespace-nowrap"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    <div className="flex justify-between items-center">
                      <div align="start">
                        <div className="flex">
                          <img
                            className="w-[22px] h-[22px]"
                            src={bed}
                            alt="logo"
                          />
                          &nbsp;&nbsp;
                          <div>{element.bed}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                          <img
                            className="w-[22px] h-[22px]"
                            src={bath}
                            alt="logo"
                          />
                          &nbsp;&nbsp;
                          <div>{element.bath}</div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
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
