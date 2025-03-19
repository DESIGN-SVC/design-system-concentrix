import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const UserCheck = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={8.36167} cy={4.42417} r={2.42417} stroke="currentColor" />
        <path
            d="M8.364 13.826H5.989c-1.312 0-2.47-1.342-1.786-2.648.668-1.277 1.962-2.2 4.16-2.2"
            stroke="currentColor"
            strokeLinecap="round"
        />
        <path
            d="M14.25 9.53l-4 4-2-2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
