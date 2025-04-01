import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SortAscending = ({ ...props }: GenericIconProps) => (
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
            d="M8.237 10.27a.5.5 0 01.707 0l2.601 2.6 2.601-2.6a.5.5 0 01.707.707L11.9 13.931a.5.5 0 01-.707 0l-2.955-2.954a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.546 5.987a.5.5 0 01.5.5v7.09a.5.5 0 01-1 0v-7.09a.5.5 0 01.5-.5zM1 7.669a.5.5 0 01.5-.5h5.318a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5zM1 2.941a.5.5 0 01.5-.5h10.045a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5zM1 12.396a.5.5 0 01.5-.5h4.136a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
