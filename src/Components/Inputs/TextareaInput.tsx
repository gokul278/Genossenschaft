import React from "react";

interface TextareaInputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  id = "id-l02",
  name = "textarea-name",
  placeholder = "Write your message",
  label = "",
  rows = 2,
  //   value = "",
  //   onChange = () => {},
  disabled = false,
  required = false,
}) => {
  //   const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     const value = evt.target.value;
  //     onChange(value);
  //   };

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        // value={value}
        // onChange={handleChange}
        required={required}
        disabled={disabled}
        className="peer relative w-full border-b border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#000] focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      ></textarea>
      <label
        htmlFor={id}
        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#000] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
    </div>
  );
};

export default TextareaInput;
