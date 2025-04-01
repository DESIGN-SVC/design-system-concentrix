import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const BuildingOffice = ({ ...props }: GenericIconProps) => (
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
            d="M1 13.386a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.21 2.49a.964.964 0 01.682-.283h5.571a.964.964 0 01.965.964v10.215a.5.5 0 01-1 0V3.207h-5.5v10.179a.5.5 0 01-1 0V3.17c0-.255.101-.5.282-.682z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.428 6.421a.5.5 0 01.5-.5h4.178a.964.964 0 01.965.965v6.5a.5.5 0 01-1 0V6.92H8.928a.5.5 0 01-.5-.5zM3.785 5.028a.5.5 0 01.5-.5h1.857a.5.5 0 010 1H4.285a.5.5 0 01-.5-.5zM4.714 8.743a.5.5 0 01.5-.5H7.07a.5.5 0 110 1H5.214a.5.5 0 01-.5-.5zM3.785 11.064a.5.5 0 01.5-.5h1.857a.5.5 0 110 1H4.285a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.285 11.064a.5.5 0 01.5-.5h.929a.5.5 0 110 1h-.929a.5.5 0 01-.5-.5zM10.285 8.743a.5.5 0 01.5-.5h.929a.5.5 0 110 1h-.929a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
