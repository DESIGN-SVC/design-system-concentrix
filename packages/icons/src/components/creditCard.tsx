import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CreditCard = ({ ...props }: GenericIconProps) => (
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
            d="M2 4.523v8h12v-8H2zm-1 0a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1v-8z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 11.023a.5.5 0 01.5-.5h2a.5.5 0 110 1h-2a.5.5 0 01-.5-.5zM7 11.023a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM1 6.576a.5.5 0 01.5-.5h13a.5.5 0 110 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
