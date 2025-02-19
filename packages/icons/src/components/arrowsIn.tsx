import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsIn = ({ ...props }: GenericIconProps) => (
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
            d="M9.95 2.823a.5.5 0 01.5.5v2.75h2.75a.5.5 0 010 1H9.95a.5.5 0 01-.5-.5v-3.25a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.854 1.67a.5.5 0 010 .707l-4.55 4.55a.5.5 0 11-.707-.708l4.55-4.55a.5.5 0 01.707 0zM2.3 10.473a.5.5 0 01.5-.5h3.25a.5.5 0 01.5.5v3.25a.5.5 0 01-1 0v-2.75H2.8a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.404 10.12a.5.5 0 010 .707l-4.55 4.55a.5.5 0 11-.708-.707l4.55-4.55a.5.5 0 01.708 0zM9.45 10.473a.5.5 0 01.5-.5h3.25a.5.5 0 010 1h-2.75v2.75a.5.5 0 01-1 0v-3.25z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.597 10.12a.5.5 0 01.707 0l4.55 4.55a.5.5 0 11-.707.706l-4.55-4.55a.5.5 0 010-.707zM6.05 2.823a.5.5 0 01.5.5v3.25a.5.5 0 01-.5.5H2.8a.5.5 0 010-1h2.75v-2.75a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.146 1.67a.5.5 0 01.708 0l4.55 4.55a.5.5 0 11-.708.707l-4.55-4.55a.5.5 0 010-.708z"
            fill="currentColor"
        />
    </svg>
);
