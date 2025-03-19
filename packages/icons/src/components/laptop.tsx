import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Laptop = ({ ...props }: GenericIconProps) => (
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
            d="M3.5 4.08a.5.5 0 00-.5.5v6.5a.5.5 0 01-1 0v-6.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v6.5a.5.5 0 01-1 0v-6.5a.5.5 0 00-.5-.5h-9z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 11.08a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v1a1.5 1.5 0 01-1.5 1.5h-11a1.5 1.5 0 01-1.5-1.5v-1zm1 .5v.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-.5H2zM6.5 5.58a.5.5 0 01.5-.5h2a.5.5 0 110 1H7a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
