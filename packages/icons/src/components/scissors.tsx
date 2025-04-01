import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Scissors = ({ ...props }: GenericIconProps) => (
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
            d="M3.32 4.153a1.32 1.32 0 100 2.64 1.32 1.32 0 000-2.64zM1 5.473a2.32 2.32 0 114.64 0 2.32 2.32 0 01-4.64 0zM3.32 10.913a1.32 1.32 0 100 2.64 1.32 1.32 0 000-2.64zM1 12.233a2.32 2.32 0 114.64 0 2.32 2.32 0 01-4.64 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.673 8.57a.5.5 0 01-.13.696l-3.438 2.352a.5.5 0 01-.565-.825L7.978 8.44a.5.5 0 01.695.13zM14.912 4.301a.5.5 0 01-.13.695l-4.398 3.01a.5.5 0 01-.565-.826l4.398-3.01a.5.5 0 01.695.131z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.41 6.218a.5.5 0 01.695-.13l9.678 6.622a.5.5 0 01-.565.825L4.54 6.913a.5.5 0 01-.13-.695z"
            fill="currentColor"
        />
    </svg>
);
