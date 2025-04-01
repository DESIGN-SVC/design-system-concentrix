import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Export = ({ ...props }: GenericIconProps) => (
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
            d="M7.646 1.715a.5.5 0 01.707 0l2.84 2.839a.5.5 0 01-.708.707L8 2.776 5.514 5.26a.5.5 0 01-.707-.707l2.839-2.839z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1.57a.5.5 0 01.5.5v7.57a.5.5 0 01-1 0V2.07a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.133 7.457a.04.04 0 00-.041.04v7.031a.04.04 0 00.04.041h9.735a.041.041 0 00.04-.04V7.497a.041.041 0 00-.04-.041h-1.622a.5.5 0 010-1h1.622a1.041 1.041 0 011.04 1.04v7.031a1.04 1.04 0 01-1.04 1.041H3.133a1.04 1.04 0 01-1.041-1.04V7.497a1.04 1.04 0 011.04-1.041h1.623a.5.5 0 010 1H3.133z"
            fill="currentColor"
        />
    </svg>
);
