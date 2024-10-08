import bg1 from "../../assets/Img/Home/01-BG.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import assets1 from "../../assets/Img/Home/01-ASSETS.png";
import logo1 from "../../assets/Img/Home/Logo/01-HOME.svg";
import logo2 from "../../assets/Img/Home/Logo/02-AFFORD.svg";
import logo3 from "../../assets/Img/Home/Logo/03-COMMUNITY.svg";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import bg3 from "../../assets/Img/Home/03-BG.png";
import WhyCard from "../../Components/WhyCard/WHyCard";
import Slider from "../../Components/Home-Slider/Slider";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#fff]">
      <div className="w-[95%] h-screen flex justify-center">
        <div
          className="w-[100%] h-[100vh] flex flex-col justify-center items-center"
          style={{
            background: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="w-[90%] mt-[10vh] flex flex-col justify-center items-center">
            <h1
              className="text-[25px] lg:text-[45px] font-mont text-center text-white font-bold"
              data-aos="fade-up"
            >
              Welcome to Genossenschaft GASI <br />
              Your sustainable cooperative housing in Zurich
            </h1>
            <p
              className="w-[100%] lg:w-[90%] text-[17px] lg:text-[25px] font-mont py-5 text-center text-white font-normal"
              data-aos="fade-up"
            >
              Experience the comfort of cooperative living in a vibrant,
              sustainable, and inclusive environment. At Genossenschaft GASI, we
              believe in creating a property that fosters a strong sense of
              belonging and shared values.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-10 py-10">
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
                A{" "}
                <span className="font-bold">
                  Cooperative Housing Experience
                </span>
                <div className="hidden lg:block"></div>
                Like No Other{" "}
              </h1>
              <p className="mt-3 text-[16px] font-normal font-mont text-justify">
                More than just a housing cooperative-Genossenschaft GASI is an
                active community striving for sustainability thereby building
                close connections between people. Our Cooperative living offers
                a unique blend of living with modern design and social vision
                for a future that will be better for everyone. From a peaceful
                retreat to a vibrant social atmosphere, you're welcome to our
                experience the ambience of living.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[95%] flex flex-col  items-center justify-center py-20">
          <div className="w-[90%]">
            <h1 className="text-[40px] font-mont font-bold">Key Features</h1>
          </div>
          <div className="w-[90%] flex flex-wrap gap-x-10 justify-center items-center">
            <div className="w-[300px] mt-10 lg:my-10 border-0 lg:border-r-2">
              <img className="w-[80px] h-[80px]" src={logo1} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-start items-center font-mont font-bold mt-3">
                Eco-Friendly Living
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                Sustainability is the word that we keep emphasizing in all that
                we do. From energy-efficient building materials to eco-friendly
                appliances, our goal is to minimize our impact on the
                environment.{" "}
              </p>
            </div>

            <div className="w-[300px] mt-10 lg:my-10 border-0 lg:border-r-2">
              <img className="w-[80px] h-[80px]" src={logo2} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-start items-center font-mont font-bold mt-3">
                Affordable Housing
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                Relish having the space of living without digging a hole in your
                pocket. Our units are competitively priced to ensure
                accessibility for all, which promotes diversity in our
                communities.
              </p>
            </div>

            <div className="w-[300px]  my-10">
              <img className="w-[80px] h-[80px]" src={logo3} alt="logo1" />
              <h1 className="text-[22px] h-[60px] flex justify-center items-center font-mont font-bold mt-3">
                Community Development
              </h1>
              <p className="w-[100%] lg:w-[90%] text-[16px] mt-3 text-[#555555] font-normal text-justify">
                We foster collaborative innovation, creating a welcoming space
                where neighbors connect, and shared experiences thrive. Through
                community events, we strengthen bonds and enhance our lives.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-[200px] h-[60px] flex justify-center items-center rounded cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont">
              Join Us Today !
            </div>
          </div>
        </div>

        <div
          className="w-[95%] flex justify-center h-[auto] lg:h-screen bg-center pb-10"
          style={{
            background: `url(${bg3})`,
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="w-[90%] h-[auto] lg:h-screen">
            <h1 className="h-[20vh] text-[23px] lg:text-[30px] font-semibold font-mont text-[#fff] flex justify-center items-center">
              Why Choose Genossenschaft GASI?{" "}
            </h1>
            <div className="w-[w-full] h-[auto] lg:h-[80vh] justify-center items-center gap-x-10 gap-y-10 flex flex-wrap">
              <WhyCard
                head="Affordable Living in Switzerland's Competitive Housing Market"
                content="Housing in Switzerland, especially cities like Zurich, is scarce and expensive. The cooperative housing model, on the other hand, allows for a non-profit, low-priced offering of housing. Genossenschaft GASI makes sure the rents they pay are significantly lower compared to what private landlords or companies offer, saving at a considerably competitive level."
              />
              <WhyCard
                head="A Community Experience Unlike Any Other"
                content="Apart from economic advantages, shared dwelling has social benefits relating to connectivity within community. The occupants are involved in decision-making and enjoy a lively, warm space which fosters interaction and mutual assistance. "
              />
              <WhyCard
                head="Stress-Free housing process"
                content="At Genossenschaft GASI, we make finding a home stress-free. Our cooperative housing offers lower prices than private rentals, with a community-driven approach that provides more than just affordable living—peace of mind and a welcoming environment. Enjoy simple access to quality housing without endless searches."
              />
            </div>
          </div>
        </div>

        <div className="w-[95%] mt-14">
          <div className="w-[100%] mt-5 bg-[#fff] flex justify-center items-center">
            <div className="w-[90%] lg:w-[90%]">
              <h1 className="text-[40px] font-mont font-bold mb-10">
                View Our Properties
              </h1>
              <div className="w-full flex justify-center items-center">
              <div className="w-full lg:w-[90%]">
                <Slider />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[95%] pt-14 pb-10 flex justify-center items-center">
          <div className="w-[90%]">
            <h1 className="text-[40px] font-mont font-bold">
              Words from Our Residents
            </h1>
            <div className="w-full flex mt-8 justify-center items-center">
              <ReviewSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
