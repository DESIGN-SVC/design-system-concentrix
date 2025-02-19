import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Barcode = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.292 2.584a.5.5 0 01.5-.5H14.5a.5.5 0 01.5.5v2.708a.5.5 0 11-1 0V3.084h-2.208a.5.5 0 01-.5-.5zM1.5 10.209a.5.5 0 01.5.5v2.208h2.208a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5V10.71a.5.5 0 01.5-.5zM14.5 10.209a.5.5 0 01.5.5v2.708a.5.5 0 01-.5.5h-2.708a.5.5 0 110-1H14V10.71a.5.5 0 01.5-.5zM1 2.584a.5.5 0 01.5-.5h2.708a.5.5 0 110 1H2v2.208a.5.5 0 01-1 0V2.584zM4.75 4.792a.5.5 0 01.5.5v5.417a.5.5 0 01-1 0V5.292a.5.5 0 01.5-.5zM11.25 4.792a.5.5 0 01.5.5v5.417a.5.5 0 01-1 0V5.292a.5.5 0 01.5-.5zM9.083 4.792a.5.5 0 01.5.5v5.417a.5.5 0 01-1 0V5.292a.5.5 0 01.5-.5zM6.917 4.792a.5.5 0 01.5.5v5.417a.5.5 0 01-1 0V5.292a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
