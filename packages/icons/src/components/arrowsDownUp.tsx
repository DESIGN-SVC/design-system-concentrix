import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsDownUp = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.146 11.546a.5.5 0 01.708 0L4.1 13.793l2.246-2.247a.5.5 0 01.708.708l-2.6 2.6a.5.5 0 01-.708 0l-2.6-2.6a.5.5 0 010-.708z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.1 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5zM11.546 1.146a.5.5 0 01.707 0l2.6 2.6a.5.5 0 01-.707.708L11.9 2.207 9.653 4.454a.5.5 0 11-.707-.708l2.6-2.6z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
