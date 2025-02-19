import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretDoubleUp = ({ ...props }: GenericIconProps) => (
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
        d="M7.646 7.646a.5.5 0 01.708 0l6.5 6.5a.5.5 0 01-.708.708L8 8.707l-6.146 6.147a.5.5 0 01-.708-.708l6.5-6.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.646 1.146a.5.5 0 01.708 0l6.5 6.5a.5.5 0 01-.708.708L8 2.207 1.854 8.354a.5.5 0 11-.708-.708l6.5-6.5z"
        fill="currentColor"
      />
    </svg>
);
