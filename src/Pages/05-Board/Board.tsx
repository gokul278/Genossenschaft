import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Board/01-BG.png";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import BoardMemberCard from "../../Components/BoardMemberCard/BoardMemberCard";
import member1 from "../../assets/Img/Board/MEMBERS/01-IMG.jpg";
import member2 from "../../assets/Img/Board/MEMBERS/02-IMG.jpg";
import member3 from "../../assets/Img/Board/MEMBERS/03-IMG.jpg";
import unknowfemale from "../../assets/Img/Board/MEMBERS/UNKNOW-FEMALE.jpg";
import bg2 from "../../assets/Img/Home/02-BG.png";
import assets1 from "../../assets/Img/Board/01-ASSETS.png";
import assets2 from "../../assets/Img/Board/02-ASSETS.png";
import { useTranslation } from "react-i18next";

const Board = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
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
            {t("header.board")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/about")} className="cursor-pointer">
              {t("header.about")}
            </span>
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span onClick={() => navigate("/board")} className="cursor-pointer">
              {t("header.board")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[80%] my-14 flex flex-col justify-between gap-y-10 lg:flex-row">
        <div
          data-aos="zoom-in"
          className="w-[100%] lg:w-[40%] flex justify-start"
        >
          <img src={assets2} className="w-[100%] rounded" alt="assets" />
        </div>
        <p
          data-aos="fade-right"
          className="w-[100%] lg:w-[55%] flex justify-center items-center font-mont font-semibold text-justify text-[18px]"
        >
          {t("board.content")}
        </p>
      </div>

      <div className="w-[85%] mb-10">
        <HeadingLabel label={t("board.intro")} />
        <div className="flex mt-5 flex-wrap justify-center lg:justify-center gap-x-10 gap-y-10">
          <BoardMemberCard
            img={member1}
            name="Freundlieb Danny"
            position="Präsident"
            email="info@genossenschaft-gasi.ch"
            phoneno="076'390'14'13"
          />
          <BoardMemberCard
            img={member2}
            name="Diana Fijacko"
            position="Aktuarin"
            email="info@genossenschaft-gasi.ch"
            phoneno="076'390'14'13"
          />
          <BoardMemberCard
            img={member3}
            name="Negoslav Mihailovic"
            position="Finanzen"
            email="info@genossenschaft-gasi.ch"
            phoneno="044'480'24'5"
          />
          <BoardMemberCard
            img={unknowfemale}
            name="Ursula Amore"
            position="Beisitzerin"
            email="info@genossenschaft-gasi.ch"
            phoneno="076'390'14'13"
          />
          <BoardMemberCard
            img={unknowfemale}
            name="Rebecca Harbart"
            position="Beisitzerin"
            email="info@genossenschaft-gasi.ch"
            phoneno="076'390'14'13s"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center py-10">
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
              <h1 className="text-[25px] font-bold font-mont">
                {t("board.head1")}
              </h1>
              <p className="mt-3 text-[16px] font-normal font-mont text-justify">
                {t("board.content1")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
