import React from "react";

interface SelectInputProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
  disabled?: boolean;
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id = "id-07",
  name = "select-name",
  label = "Select an option",
//   value = "",
//   onChange = () => {},
  options = [],
  disabled = false,
  required = false,
}) => {
//   const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = evt.target.value;
//     onChange(value);
//   };

  return (
    <div className="relative my-6 w-full">
      <select
        id={id}
        name={name}
        // value={value}
        // onChange={handleChange}
        required={required}
        disabled={disabled}
        className="peer relative h-12 w-full appearance-none border-b border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border- focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-base text-slate-400 transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text- peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute top-3.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill- peer-disabled:cursor-not-allowed"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-labelledby="title-07 description-07"
        role="graphics-symbol"
      >
        <title id="title-07">Arrow Icon</title>
        <desc id="description-07">Arrow icon of the select list.</desc>
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SelectInput;
