import Glide from "@glidejs/glide";
import { useEffect } from "react";
import events from "../../assets/Img/Home/Logo/EVENTS.png";
// import maleuser from "../../assets/Img/Home/Logo/MALE.png";
// import femaleuser from "../../assets/Img/Home/Logo/FEMALE.png";

export default function ReviewSlider() {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        swipeable: "glide__swipeable", // Class for swipeable slides
        dragging: "glide__dragging", // Class for dragging state
        direction: {
          ltr: "glide__direction--ltr", // Class for left-to-right direction
          rtl: "glide__direction--rtl", // Class for right-to-left direction
        },
        type: {
          slider: "glide__type--slider", // Class for slider type
          carousel: "glide__type--carousel", // Class for carousel type
        },
        slide: {
          active: "glide__slide--active", // Class for active slide
          clone: "glide__slide--clone", // Class for cloned slide
        },
        arrow: {
          disabled: "glide__arrow--disabled", // Class for disabled arrows
        },
        nav: {
          active: "[&>*]:bg-[#fff]", // Custom active nav class
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial slider --> */}
      <div className="relative w-[100%] lg:w-[90%] my-3 glide-08">
        {/*    <!-- Slides --> */}
        <div
          className="overflow-hidden text-center bg-white rounded shadow-2xl text-slate-500"
          data-glide-el="track"
        >
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <div className="w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="overflow-hidden ">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 h-[auto] leading-loose lg:text-[18px] flex justify-center items-center font-mont">
                        <div className="w-[100%] flex flex-col lg:flex-row justify-between">
                          <div className="w-[100%] lg:w-[40%] gap-y-10 flex justify-center items-center">
                            <img
                              className="w-[100%]"
                              src={events}
                              alt="events"
                            />
                          </div>
                          <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center">
                            <h1 className="text-start w-full font-bold text-[18px] text-[#000]">
                              EVENTS - 1
                            </h1>
                            <p className="text-justify text-[16px]">
                              Here, living in Zurich has been a totally new
                              experience. The community spirit here is
                              incredible. And this is what I really love about
                              being part of something meaningful.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>

            <li>
              <div className="w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="overflow-hidden ">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 h-[auto] leading-loose lg:text-[18px] flex justify-center items-center font-mont">
                        <div className="w-[100%] flex flex-col lg:flex-row justify-between">
                          <div className="w-[100%] lg:w-[40%] gap-y-10 flex justify-center items-center">
                            <img
                              className="w-[100%]"
                              src={events}
                              alt="events"
                            />
                          </div>
                          <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center">
                            <h1 className="text-start w-full font-bold text-[18px] text-[#000]">
                              EVENTS - 2
                            </h1>
                            <p className="text-justify text-[16px]">
                              Here, living in Zurich has been a totally new
                              experience. The community spirit here is
                              incredible. And this is what I really love about
                              being part of something meaningful.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>

            <li>
              <div className="w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="overflow-hidden ">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 h-[auto] leading-loose lg:text-[18px] flex justify-center items-center font-mont">
                        <div className="w-[100%] flex flex-col lg:flex-row justify-between">
                          <div className="w-[100%] lg:w-[40%] gap-y-10 flex justify-center items-center">
                            <img
                              className="w-[100%]"
                              src={events}
                              alt="events"
                            />
                          </div>
                          <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center">
                            <h1 className="text-start w-full font-bold text-[18px] text-[#000]">
                              EVENTS - 3
                            </h1>
                            <p className="text-justify text-[16px]">
                              Here, living in Zurich has been a totally new
                              experience. The community spirit here is
                              incredible. And this is what I really love about
                              being part of something meaningful.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>
            <li>
              <div className="w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="overflow-hidden ">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 h-[auto] leading-loose lg:text-[18px] flex justify-center items-center font-mont">
                        <div className="w-[100%] flex flex-col lg:flex-row justify-between">
                          <div className="w-[100%] lg:w-[40%] gap-y-10 flex justify-center items-center">
                            <img
                              className="w-[100%]"
                              src={events}
                              alt="events"
                            />
                          </div>
                          <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center">
                            <h1 className="text-start w-full font-bold text-[18px] text-[#000]">
                              EVENTS - 4
                            </h1>
                            <p className="text-justify text-[16px]">
                              Here, living in Zurich has been a totally new
                              experience. The community spirit here is
                              incredible. And this is what I really love about
                              being part of something meaningful.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex items-center justify-center w-full gap-2 pt-6"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>

      {/*<!-- End Testimonial slider --> */}
    </>
  );
}
