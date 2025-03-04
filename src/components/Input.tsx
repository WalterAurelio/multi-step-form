import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

function Input({ className, label, ...props }: InputProps) {
  const [borderStyle, setBorderStyle] = useState('border-grey-custom');

  return (
    <div className={`flex flex-col ${className}`}>
      {
        label && (
          <label htmlFor={label} className="text-blue-custom font-medium mb-1">{label}</label>
        )
      }
      <input id={label} onFocus={() => setBorderStyle('border-blue-2-custom') } onBlur={() => setBorderStyle('border-grey-custom') } className={`border-1 rounded-md py-2 px-4 text-blue-custom font-medium outline-none ${borderStyle}`} {...props} />
    </div>
  )
}

export default Input;