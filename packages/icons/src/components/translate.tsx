import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Translate = ({ ...props }: GenericIconProps) => (
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
            d="M11 6.58a.5.5 0 01.447.277l3.5 7a.5.5 0 01-.894.447L11 8.2l-3.053 6.105a.5.5 0 11-.894-.447l3.5-7A.5.5 0 0111 6.581z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 12.08a.5.5 0 01.5-.5h5a.5.5 0 110 1h-5a.5.5 0 01-.5-.5zM5.5 2.08a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4.08a.5.5 0 01.5-.5h8a.5.5 0 110 1h-8a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 3.58a.5.5 0 01.5.5 6.5 6.5 0 01-6.5 6.5.5.5 0 010-1A5.5 5.5 0 007 4.08a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.675 5.61a.5.5 0 01.638.304A5.502 5.502 0 009.5 9.579a.5.5 0 110 1 6.503 6.503 0 01-6.13-4.331.5.5 0 01.305-.639z"
            fill="currentColor"
        />
    </svg>
);
