import React from "react";
import { SubmitButtonProps } from "@/types/formTypes";

export default function SubmitButton({
  loading,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className={`btn ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Sending...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
