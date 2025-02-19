import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MagnifyingGlass = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.188 2.853a5.188 5.188 0 100 10.375 5.188 5.188 0 000-10.375zM1 8.04a6.188 6.188 0 1112.376 0A6.188 6.188 0 011 8.04z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.855 11.709a.5.5 0 01.707 0l3.291 3.29a.5.5 0 01-.707.708l-3.29-3.29a.5.5 0 010-.708z"
            fill="currentColor"
        />
    </svg>
);
