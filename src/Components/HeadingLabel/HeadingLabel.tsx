import React from "react";

interface HeadingLabelProps {
  label: string;
}

const HeadingLabel: React.FC<HeadingLabelProps> = ({ label }) => {
  return <h1 className="text-[40px] font-mont font-bold">{label}</h1>;
};

export default HeadingLabel;
