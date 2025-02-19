import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SignOut = ({ ...props }: GenericIconProps) => (
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
            d="M11.045 4.544a.5.5 0 01.707 0l3.101 3.103a.5.5 0 010 .707l-3.101 3.102a.5.5 0 01-.707-.707L13.793 8l-2.748-2.749a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.728 8a.5.5 0 01.5-.5h8.27a.5.5 0 010 1h-8.27a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.09 2a.09.09 0 00-.09.09v11.82a.091.091 0 00.09.09h4.137a.5.5 0 010 1H2.091A1.09 1.09 0 011 13.91V2.09A1.09 1.09 0 012.09 1h4.137a.5.5 0 110 1H2.091z"
            fill="currentColor"
        />
    </svg>
);
