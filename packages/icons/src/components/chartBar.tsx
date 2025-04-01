import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChartBar = ({ ...props }: GenericIconProps) => (
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
            d="M1 13.983a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.68 6.183a.5.5 0 01.5-.5h3.64a.5.5 0 010 1H6.68v7.3a.5.5 0 01-1 0v-7.8z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.32 3.063a.5.5 0 01.5-.5h3.64a.5.5 0 01.5.5v10.92a.5.5 0 01-.5.5H9.82a.5.5 0 01-.5-.5V3.063zm1 .5v9.92h2.64v-9.92h-2.64zM2.04 9.303a.5.5 0 01.5-.5h3.64a.5.5 0 010 1H3.04v4.18a.5.5 0 11-1 0v-4.68z"
            fill="currentColor"
        />
    </svg>
);
