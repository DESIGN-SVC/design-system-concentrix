import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GridFour = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.119 1.569A.119.119 0 001 1.688V13.45c0 .066.053.119.12.119H12.88a.119.119 0 00.119-.12V1.689a.119.119 0 00-.119-.12H1.119zM0 1.688C0 1.07.501.568 1.119.568h11.762c.618 0 1.119.502 1.119 1.12V13.45c0 .618-.501 1.119-1.119 1.119H1.119A1.119 1.119 0 010 13.449V1.689z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 .569a.5.5 0 01.5.5v13a.5.5 0 11-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.569a.5.5 0 01.5-.5h13a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
