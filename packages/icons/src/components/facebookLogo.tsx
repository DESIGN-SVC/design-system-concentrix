import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FacebookLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8 14.69a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10.708 5.482H9.625A1.618 1.618 0 008 7.107v7.583M5.833 9.274h4.333"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
