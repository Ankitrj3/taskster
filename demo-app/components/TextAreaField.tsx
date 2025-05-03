import React from "react";
import { TextAreaFieldProps } from "@/types/formTypes";

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 6,
  ...props
}: TextAreaFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-200 mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="textarea"
        {...props}
      />
    </div>
  );
}
