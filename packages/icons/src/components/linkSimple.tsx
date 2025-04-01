import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const LinkSimple = ({ ...props }: GenericIconProps) => (
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
            d="M10.72 6.134a.5.5 0 010 .707l-4.733 4.732a.5.5 0 01-.707-.707l4.732-4.732a.5.5 0 01.707 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.805 7.317a.5.5 0 010 .707L2.833 9.996a2.846 2.846 0 004.025 4.025l1.971-1.972a.5.5 0 11.707.707l-1.971 1.972a3.846 3.846 0 01-5.44-5.439l1.973-1.972a.5.5 0 01.707 0zM8.435 2.98a3.846 3.846 0 015.44 5.438l-1.972 1.972a.5.5 0 01-.708-.707l1.972-1.972a2.846 2.846 0 00-4.025-4.024L7.171 5.658a.5.5 0 11-.707-.707L8.435 2.98z"
            fill="currentColor"
        />
    </svg>
);
