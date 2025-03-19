import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Divide = ({ ...props }: GenericIconProps) => (
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
            d="M1 8.523a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            d="M8 4.432a1 1 0 100-2 1 1 0 000 2zM8 14.614a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
        />
    </svg>
);
