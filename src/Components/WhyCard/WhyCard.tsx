interface WhyCardProps {
  head: string;
  content: string;
}

const WhyCard: React.FC<WhyCardProps> = ({ head, content }) => {
  return (
    <div className="w-[300px] h-[auto] lg:h-[400px] lg:w-[350px] cursor-pointer flex justify-center rounded border-2">
      <div className="w-[90%] py-3">
        <h1 className="text-[16px] h-[100px] flex justify-center items-center font-bold text-center font-mont text-[#fff]">
          {head}
        </h1>
        <p className="text-[16px] font-normal font-mont text-[#fff] text-justify">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
