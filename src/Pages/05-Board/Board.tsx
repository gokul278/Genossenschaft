import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Board/01-BG.png";

const Board = () => {
  const navigate = useNavigate();
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
          <h1 className="text-[#fff] text-[30px] font-bold font-mont">Board</h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              Home
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/about")} className="cursor-pointer">
              About Us
            </span>
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/board")} className="cursor-pointer">
              Board
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
