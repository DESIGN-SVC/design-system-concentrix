import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Archive = ({ ...props }: GenericIconProps) => (
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
            d="M2 4v1.5h12V4H2zM1 4a1 1 0 011-1h12a1 1 0 011 1v1.5a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 5.5A.5.5 0 013 6v6h10V6a.5.5 0 011 0v6a1 1 0 01-1 1H3a1 1 0 01-1-1V6a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 8.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
