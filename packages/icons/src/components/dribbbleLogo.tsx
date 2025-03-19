import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const DribbbleLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8 14.69a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM4.14 13.424a10.84 10.84 0 0110.36-5.18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.063 3.12a10.82 10.82 0 01-8.396 3.987c-.684 0-1.366-.064-2.038-.19M5.15 2.348a10.867 10.867 0 015.031 11.97"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
