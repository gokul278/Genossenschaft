interface BoardMemberProps {
  img: string;
  name: string;
  position: string;
}

const BoardMemberCard: React.FC<BoardMemberProps> = ({
  img,
  name,
  position,
}) => {
  return (
    <div>
      <div
        className="w-[250px] h-[300px] rounded"
        style={{
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <h2 className="text-[20px] font-bold py-1">{name}</h2>
      <p className="text-[16px] font-nomal">{position}</p>
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
