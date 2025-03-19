import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Voicemail = ({ ...props }: GenericIconProps) => (
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
            d="M4.1 6.323a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zM1 8.423a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0zM11.9 6.323a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zm-3.1 2.1a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6 11.023a.5.5 0 01.5-.5h7.8a.5.5 0 110 1H4.1a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
