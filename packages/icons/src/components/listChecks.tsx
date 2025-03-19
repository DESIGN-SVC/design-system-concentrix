import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ListChecks = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.357 3.486H14.5M5.357 8.057H14.5M5.357 12.629H14.5M4 2.333l-2 2-1-1M4 11.334l-2 2-1-1M4 6.833l-2 2-1-1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
