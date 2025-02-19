import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Prohibit = ({ ...props }: GenericIconProps) => (
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
            d="M8 2a6 6 0 100 12A6 6 0 008 2zM1 8a7 7 0 1114 0A7 7 0 011 8z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.05 3.05a.5.5 0 01.707 0l9.192 9.193a.5.5 0 01-.707.707L3.05 3.757a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
