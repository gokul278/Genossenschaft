import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Contact/01-BG.png";
import TextInput from "../../Components/Inputs/TextInput";
import SelectInput from "../../Components/Inputs/SelectInput";
import TextareaInput from "../../Components/Inputs/TextareaInput";
// import { useState } from "react";

const ContactUs = () => {
  // const [input, setInput] = useState({
  //   name: "",
  //   email: "",
  //   phoneno: "",
  //   subject: "",
  //   message: "",
  // });

  const navigate = useNavigate();

  return (
    <div className="w-full justify-center flex-col items-center flex">
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
            Contact Us
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              Home
            </span>{" "}
            -{" "}
            <span
              onClick={() => navigate("/contact")}
              className="cursor-pointer"
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>

      <div className="w-[95%] flex justify-center items-center">
        <div className="w-[90%] my-5">
          <h1 className="text-[40px] font-mont font-bold">Get in Touch</h1>
          <p className="text-[#555555] font-normal text-justify">
            We're here to help you! If you have any questions concerning our
            housing units, joining, or future community events, please do not
            hesitate to reach out.
          </p>
        </div>
      </div>

      <div className="w-[95%] my-10 flex justify-center items-center">
        <div className="w-[90%] flex flex-wrap justify-center gap-x-10 gap-y-10">
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] border flex justify-center flex-col items-center gap-y-10">
            <h1>
              <i className="text-[40px] text-[#555555] fa-solid fa-phone"></i>
            </h1>
            <p className="text-[20px] text-[#000] font-bold font-mont">
              +41 XXXXXXXX
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] border flex justify-center flex-col items-center gap-y-10">
            <h1>
              <i className="text-[40px] text-[#555555] fa-solid fa-envelope"></i>
            </h1>
            <p className="text-[20px] text-[#000] font-bold font-mont">
              XXXXXX@XXX.com
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-[#fbfbfb] border flex justify-center flex-col items-center gap-y-9">
            <div className="flex justify-center flex-row items-center gap-x-10">
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-facebook-f"></i>
              </h1>
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-instagram"></i>
              </h1>
              <h1>
                <i className="text-[40px] text-[#555555] fa-brands fa-linkedin-in"></i>
              </h1>
            </div>

            <p className="text-[30px] text-[#000] font-bold font-mont">
              Social Media
            </p>
          </div>
        </div>
      </div>

      <div className="w-[95%] flex justify-center items-center">
        <div className="w-[90%] my-5 flex flex-col lg:flex-row justify-between gap-y-10">
          <div className="w-[100%] lg:w-[49%]">
            <h1 className="text-[40px] font-mont font-bold mb-10">
              Contact Form
            </h1>
            <div>
              <TextInput id="name" type="text" name="name" label="Name" />
            </div>
            <div className="mt-10">
              <TextInput id="email" type="email" name="email" label="Email" />
            </div>
            <div className="mt-10">
              <TextInput
                id="phoneno"
                type="tel"
                name="phoneno"
                label="Phone Number"
              />
            </div>
            <div className="mt-10">
              <SelectInput
                id="subject"
                name="subject"
                label="Subject"
                options={[
                  { value: "General Inquiry", label: "General Inquiry" },
                  { value: "Membership", label: "Membership" },
                  {
                    value: "Maintenance Request",
                    label: "Maintenance Request",
                  },
                  { value: "Others", label: "Others" },
                ]}
              />
            </div>
            <div className="mt-10">
              <TextareaInput id="message" name="message" label="Message" />
            </div>
            <div className="mt-10">
              <div className="py-2 px-3 rounded text-center cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont">
                Send a Message
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[48%]">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.684892936333!2d78.14989567452514!3d11.645788388560824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728453895619!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <h1 className="text-[40px] font-mont font-bold mb-10">
              Our Location
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.684892936333!2d78.14989567452514!3d11.645788388560824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728453895619!5m2!1sen!2sin"
              width="100%"
              className="h-[300px] lg:h-[85%]"
              allowFullScreen // instead of allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // instead of referrerpolicy
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
