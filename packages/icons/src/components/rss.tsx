import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Rss = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.237 8.876a.5.5 0 01.5-.5 5.705 5.705 0 015.705 5.705.5.5 0 01-1 0A4.705 4.705 0 00.737 9.376a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.237 4.973a.5.5 0 01.5-.5 9.609 9.609 0 019.609 9.608.5.5 0 11-1 0A8.609 8.609 0 00.737 5.473a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.237 1.069a.5.5 0 01.5-.5A13.512 13.512 0 0114.25 14.08a.5.5 0 11-1 0A12.512 12.512 0 00.737 1.569a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            d="M1.062 14.569a.813.813 0 100-1.627.813.813 0 000 1.627z"
            fill="currentColor"
        />
    </svg>
);
