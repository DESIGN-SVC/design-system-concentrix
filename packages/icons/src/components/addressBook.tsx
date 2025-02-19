import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AddressBook = ({ ...props }: GenericIconProps) => (
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
            d="M8.811 5.26a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.334zM6.145 6.925a2.667 2.667 0 115.333 0 2.667 2.667 0 01-5.333 0zM1.27 6.655a.5.5 0 01.5-.5h1.626a.5.5 0 010 1H1.77a.5.5 0 01-.5-.5zM1.27 3.947a.5.5 0 01.5-.5h1.626a.5.5 0 110 1H1.77a.5.5 0 01-.5-.5zM1.27 9.364a.5.5 0 01.5-.5h1.626a.5.5 0 010 1H1.77a.5.5 0 01-.5-.5zM1.27 12.072a.5.5 0 01.5-.5h1.626a.5.5 0 110 1H1.77a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.812 9.592a3.563 3.563 0 00-2.85 1.425.5.5 0 01-.8-.6 4.563 4.563 0 017.3 0 .5.5 0 01-.8.6 3.563 3.563 0 00-2.85-1.425z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.73 2.051a.042.042 0 00-.042-.041h-9.75a.042.042 0 00-.042.041v11.917c0 .023.019.042.042.042h9.75a.042.042 0 00.041-.042V2.051zm-.042-1.041c.575 0 1.041.466 1.041 1.041v11.917c0 .575-.466 1.042-1.041 1.042h-9.75a1.042 1.042 0 01-1.042-1.042V2.051c0-.575.467-1.041 1.042-1.041h9.75z"
            fill="currentColor"
        />
    </svg>
);
