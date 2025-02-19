import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TextAlignJustify = ({ ...props }: GenericIconProps) => (
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
        d="M1 4.169a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM1 7.124a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM1 10.078a.5.5 0 01.5-.5h13a.5.5 0 110 1h-13a.5.5 0 01-.5-.5zM1 13.033a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor" 
      />
    </svg>
);
