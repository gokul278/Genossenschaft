import React, { useState, ChangeEvent } from "react";

interface FormElementsRadioPrimaryProps {
  options: { value: string; label: string }[];
}

const RadioButton: React.FC<FormElementsRadioPrimaryProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <fieldset className="flex gap-10">
      {/* <legend className="mb-6 text-slate-500">Primary radio group:</legend> */}
      {options.map((option, index) => (
        <div key={option.value} className="relative flex items-center">
          <input
            className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-[#000] checked:bg-[#000] checked:hover:border-[#000] checked:hover:bg-[#000] focus:outline-none checked:focus:border-[#000] checked:focus:bg-[#000] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="radio"
            value={option.value}
            id={option.value}
            name="drone"
            onChange={onValueChange}
            checked={selectedOption === option.value}
          />
          <label
            className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            htmlFor={option.value}
          >
            {option.label}
          </label>
          <svg
            className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={`title-${index} description-${index}`}
            role="graphics-symbol"
          >
            <title id={`title-${index}`}>Circle Shape</title>
            <desc id={`description-${index}`}>
              Circle shape to indicate whether the radio input is checked or
              not.
            </desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioButton;
