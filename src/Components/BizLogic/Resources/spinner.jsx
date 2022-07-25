import React from "react";

export default function Spinner({ size = 32 }) {
  return (
    <svg
      className="spinner"
      width={size}
      height={size}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="spinner-path" fill="none" cx="33" cy="33" r="30" />
    </svg>
  );
}
