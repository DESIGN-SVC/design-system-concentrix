import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const LinkedinLogo = ({ ...props }: GenericIconProps) => (
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
            d="M2.065 2.19A.065.065 0 002 2.256v11.87c0 .035.03.064.065.064h11.87c.036 0 .065-.029.065-.065V2.255a.065.065 0 00-.065-.065H2.065zM1 2.256c0-.589.477-1.066 1.065-1.066h11.87c.588 0 1.065.477 1.065 1.066v11.87c0 .588-.477 1.064-1.065 1.064H2.065A1.065 1.065 0 011 14.125V2.255z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.435 6.56a.5.5 0 01.5.5v4.522a.5.5 0 01-1 0V7.06a.5.5 0 01.5-.5zM5.174 6.56a.5.5 0 01.5.5v4.522a.5.5 0 01-1 0V7.06a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.413 7.56a1.478 1.478 0 00-1.478 1.478.5.5 0 01-1 0 2.478 2.478 0 114.956 0v2.544a.5.5 0 01-1 0V9.038A1.478 1.478 0 009.413 7.56z"
            fill="currentColor"
        />
        <path
            d="M5.174 5.647a.848.848 0 100-1.696.848.848 0 000 1.696z"
            fill="currentColor"
        />
    </svg>
);
