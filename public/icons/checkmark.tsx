import React, { ComponentPropsWithoutRef } from "react";

function CheckMark(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.9 4.198h-.001L5.11 9.985a.863.863 0 01-1.222 0L1.265 7.36a.864.864 0 011.22-1.22l2.016 2.014 5.39-5.389a.863.863 0 111.22 1.221l-.212.212z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CheckMark;