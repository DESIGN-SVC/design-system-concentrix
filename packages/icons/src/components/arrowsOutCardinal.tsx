import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsOuCardinal = ({ ...props }: GenericIconProps) => (
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
            d="M4.696 11.336a.5.5 0 01.707 0L7 12.933l1.596-1.597a.5.5 0 11.707.707l-1.95 1.95a.5.5 0 01-.707 0l-1.95-1.95a.5.5 0 010-.707zM11.196 4.836a.5.5 0 01.707 0l1.95 1.95a.5.5 0 010 .707l-1.95 1.95a.5.5 0 11-.707-.707l1.597-1.596-1.597-1.597a.5.5 0 010-.707zM2.804 4.836a.5.5 0 010 .707L1.207 7.14l1.597 1.596a.5.5 0 11-.708.707l-1.95-1.95a.5.5 0 010-.707l1.95-1.95a.5.5 0 01.708 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.14a.5.5 0 01.5-.5h13a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM6.646.287a.5.5 0 01.707 0l1.95 1.95a.5.5 0 01-.707.707L7 1.347 5.403 2.944a.5.5 0 01-.707-.707l1.95-1.95z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 .14a.5.5 0 01.5.5v13a.5.5 0 11-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
