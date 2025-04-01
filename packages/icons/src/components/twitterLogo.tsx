import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TwitterLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.312 3.11c0-1.412 1.188-2.586 2.6-2.567a2.567 2.567 0 012.323 1.54H13.5l-2.073 2.073a8.208 8.208 0 01-8.195 7.682c-2.054 0-2.567-.77-2.567-.77s2.053-.77 3.08-2.31c0 0-4.107-2.054-3.08-7.701 0 0 2.567 2.567 5.647 3.08V3.11z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
