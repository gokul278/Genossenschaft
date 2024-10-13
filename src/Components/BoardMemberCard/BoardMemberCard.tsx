interface BoardMemberProps {
  img: string;
  name: string;
  position: string;
  email: string;
  phoneno: string;
}

const BoardMemberCard: React.FC<BoardMemberProps> = ({
  img,
  name,
  position,
  email,
  phoneno,
}) => {
  return (
    <div>
      <h2 className="text-[20px] font-bold font-mont pb-3">{position}</h2>
      <div
        className="w-[250px] h-[300px] rounded"
        style={{
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p className="text-[16px] mt-3 font-nomal font-mont">{name}</p>
      {email.length > 0 ? (
        <p>
          <a
            href={`mailto:${email}`}
            className="text-[16px] font-nomal font-mont"
          >
            {email}
          </a>
        </p>
      ) : null}
      {phoneno.length > 0 ? (
        <p className="mt-1">
          <a
            href={`tel:${phoneno}`}
            className="text-[16px] font-nomal font-mont"
          >
            {phoneno}
          </a>
        </p>
      ) : null}
      <div className="py-2 flex gap-x-3">
        <i className="text-[20px] cursor-pointer hover:text-[red] transition-all duration-200 fa-brands fa-facebook-f"></i>
        <i className="text-[22px] cursor-pointer hover:text-[red] transition-all duration-200 fa-brands fa-instagram"></i>
        <i className="text-[22px] cursor-pointer hover:text-[red] transition-all duration-200 fa-brands fa-x-twitter"></i>
        <i className="text-[22px] cursor-pointer hover:text-[red] transition-all duration-200 fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default BoardMemberCard;
