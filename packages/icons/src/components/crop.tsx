import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Crop = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.046a.5.5 0 01.5-.5H4a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1.046a.5.5 0 01.5.5v10h10a.5.5 0 110 1H4a.5.5 0 01-.5-.5v-10.5a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.046a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6a.5.5 0 01-1 0v-5.5H6a.5.5 0 01-.5-.5zM12 11.546a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0v-2.5a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
    </svg>
);
