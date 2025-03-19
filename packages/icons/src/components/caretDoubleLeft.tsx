import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretDoubleLeft = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.854 1.146a.5.5 0 010 .708L8.707 8l6.147 6.146a.5.5 0 01-.708.708l-6.5-6.5a.5.5 0 010-.708l6.5-6.5a.5.5 0 01.708 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.354 1.146a.5.5 0 010 .708L2.207 8l6.147 6.146a.5.5 0 01-.708.708l-6.5-6.5a.5.5 0 010-.708l6.5-6.5a.5.5 0 01.708 0z"
        fill="currentColor"
      />
    </svg>
);
