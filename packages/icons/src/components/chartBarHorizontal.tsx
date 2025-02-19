import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChartBarHorizontal = ({ ...props }: GenericIconProps) => (
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
            d="M1.5 1.523a.5.5 0 01.5.5v13a.5.5 0 11-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 3.205a.5.5 0 01.5-.5h9.454a.5.5 0 01.5.5V6.75a.5.5 0 11-1 0V3.705H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.75a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v3.546a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V6.75zm1 .5v2.545h12V7.25H2z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.59 9.796a.5.5 0 01.5.5v3.545a.5.5 0 01-.5.5H1.5a.5.5 0 010-1h6.59v-3.045a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
