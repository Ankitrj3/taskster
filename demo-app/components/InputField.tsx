import React from "react";
import { InputFieldProps } from "@/types/formTypes";

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-200 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="input"
        {...props}
      />
    </div>
  );
}
