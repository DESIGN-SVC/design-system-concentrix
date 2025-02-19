import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Clock = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.523a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4.231a.5.5 0 01.5.5v3.292h3.292a.5.5 0 010 1H8a.5.5 0 01-.5-.5V4.731a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
