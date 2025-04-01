import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Bank = ({ ...props }: GenericIconProps) => (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.738 2.468a.5.5 0 01.524 0l6.035 3.714a.5.5 0 01-.262.926H1.964a.5.5 0 01-.262-.926l6.036-3.714zM3.73 6.108h8.539L7.999 3.48 3.73 6.108z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.821 6.107a.5.5 0 01.5.5v4.643a.5.5 0 01-1 0V6.607a.5.5 0 01.5-.5zM6.607 6.107a.5.5 0 01.5.5v4.643a.5.5 0 01-1 0V6.607a.5.5 0 01.5-.5zM9.393 6.107a.5.5 0 01.5.5v4.643a.5.5 0 01-1 0V6.607a.5.5 0 01.5-.5zM12.179 6.107a.5.5 0 01.5.5v4.643a.5.5 0 11-1 0V6.607a.5.5 0 01.5-.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.929 11.25a.5.5 0 01.5-.5h11.143a.5.5 0 110 1H2.429a.5.5 0 01-.5-.5zM1 13.107a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
);
