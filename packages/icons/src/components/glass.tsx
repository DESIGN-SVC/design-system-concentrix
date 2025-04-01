import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Glass = ({ ...props }: GenericIconProps) => (
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
            d="M8 11.178a.5.5 0 01.5.5v3.391a.5.5 0 01-1 0v-3.391a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.674 15.069a.5.5 0 01.5-.5h5.652a.5.5 0 010 1H5.174a.5.5 0 01-.5-.5zM2.369 1.796a.5.5 0 01.419-.227H13.21a.5.5 0 01.42.227 6.717 6.717 0 11-11.262 0zm.698.773a5.717 5.717 0 109.866 0H3.066z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.283 5.46a.5.5 0 01.5-.5h12.435a.5.5 0 110 1H1.783a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
