import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PauseCircle = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1.615a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.375 4.949a.5.5 0 01.5.5v4.333a.5.5 0 11-1 0V5.45a.5.5 0 01.5-.5zM8.625 4.949a.5.5 0 01.5.5v4.333a.5.5 0 11-1 0V5.45a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
