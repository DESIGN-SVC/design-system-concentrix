import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TrademarkRegistered = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.376a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.875 5.667a.5.5 0 01.5-.5h2.167a2.125 2.125 0 010 4.25H6.875v1.667a.5.5 0 11-1 0V5.667zm1 2.75h1.667a1.125 1.125 0 000-2.25H6.875v2.25z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.363 8.5a.5.5 0 01.696.125l1.517 2.173a.5.5 0 01-.82.572L8.24 9.197a.5.5 0 01.124-.696z"
            fill="currentColor"
        />
    </svg>
);
