import "./Footer.css";
import logo from "../../assets/Img/Logo/LOGO.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-5 bg-white flex justify-center items-center">
      <div className="w-[95%] flex justify-center bg-[#fafafa] rounded-[10px]">
        <div className="w-[80%] py-10 flex flex-col lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[35%]">
            <div className="h-[60px] w-full flex justify-center items-center">
              <img src={logo} className="h-[80px]" alt="logo" />
            </div>
            <p className="text-justify mt-10 text-[16px] text-[#555555] font-normal font-mont">
              Creating Sustainable, Inclusive, and Affordable Homes for a Better
              Tomorrow. Our Cooperative living offers a unique blend of living
              with modern design and social vision for a future that will be
              better for everyone.
            </p>
          </div>

          <div className="w-[100%] mt-10 lg:mt-0 lg:w-[25%]">
            <div className="h-[60px]">
              <h1 className="text-[20px] font-bold font-mont">Contact Us</h1>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-phone"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  +41 XXXXXXXX
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-envelope"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  XXXXXX@XXX.com
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start cursor-pointer pb-5">
              <div className="w-[15%] flex justify-start items-center">
                <i className="text-[#555555] text-[20px] mb-2 fa-solid fa-location-dot"></i>
              </div>
              <div className="w-[85%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation">
                  1234 XXXXXXXXXXX,
                  <br />
                  XXXXXXXXXX
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start text-[25px] cursor-pointer pb-2">
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-facebook-f text-[#555555] underline-animation"></i>
              </div>
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-instagram text-[#555555] underline-animation"></i>
              </div>
              <div className="w-[50px] h-[30px] flex justify-start items-center">
                <i className="fa-brands py-1 fa-linkedin-in text-[#555555] underline-animation"></i>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-10 lg:mt-0 lg:w-[25%]">
            <div className="h-[60px]">
              <h1 className="text-[20px] font-bold font-mont text-[#00000]">
                Quick Links
              </h1>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About Us
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/regulations");
                  }}
                >
                  Regulations & Documents
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/report");
                  }}
                >
                  Annual report
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/applicationform");
                  }}
                >
                  Application form
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div
                  className="font-normal font-mont text-[15px] text-[#555555] underline-animation"
                  onClick={() => {
                    navigate("/units");
                  }}
                >
                  Units
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end cursor-pointer pb-2">
              <div className="w-[10%] flex justify-start items-center">
                <i className="text-[#555555] mb-2 fa-solid fa-angle-right"></i>
              </div>
              <div className="w-[90%]">
                <div className="font-normal font-mont text-[15px] text-[#555555] underline-animation"  onClick={() => {
                    navigate("/pictures");
                  }}>
                  Picture Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
