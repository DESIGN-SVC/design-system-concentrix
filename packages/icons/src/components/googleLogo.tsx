import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GoogleLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.588 1.22a6 6 0 105.392 6.464H7.007a.5.5 0 110-1H13.5a.5.5 0 01.5.5 7 7 0 11-2.05-4.943.5.5 0 11-.707.707A6 6 0 007.588 1.22z"
            fill="currentColor"
        />
    </svg>
);
