import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Paths = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <rect
            x={1.5}
            y={1.5}
            width={3}
            height={3}
            rx={0.5}
            stroke="currentColor"
        />
        <rect
            x={6.5}
            y={6.5}
            width={3}
            height={3}
            rx={0.5}
            stroke="currentColor"
        />
        <path
            d="M5 3h8.5a1 1 0 011 1v3a1 1 0 01-1 1h-2.196"
            stroke="currentColor"
        />
        <rect
            x={11.5}
            y={11.5}
            width={3}
            height={3}
            rx={0.5}
            stroke="currentColor"
        />
        <path
            d="M6 8H2.5a1 1 0 00-1 1v3a1 1 0 001 1H10"
            stroke="currentColor"
        />
        <path
            d="M13 6.5l-1.893 1.42a.1.1 0 000 .16L13 9.5M8 11.5l1.893 1.42a.1.1 0 010 .16L8 14.5"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);
