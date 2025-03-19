import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Moon = ({ ...props }: GenericIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.202.544a.5.5 0 01.622.627 6.122 6.122 0 007.527 7.528.5.5 0 01.63.342.5.5 0 01-.003.28A7.121 7.121 0 115.202.545zM4.676 1.79a6.121 6.121 0 108.057 8.057A7.122 7.122 0 014.676 1.79z"
        fill="currentColor"
      />
    </svg>
);
