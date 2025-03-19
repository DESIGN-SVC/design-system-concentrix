import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Sliders = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5.087a.5.5 0 01.5.5v7.63a.5.5 0 01-1 0v-7.63a.5.5 0 01.5-.5zM7 .283a.5.5 0 01.5.5V2.76a.5.5 0 11-1 0V.783a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3.26a.913.913 0 100 1.827.913.913 0 000-1.826zm-1.913.914a1.913 1.913 0 113.826 0 1.913 1.913 0 01-3.826 0zM12.087 10.74a.5.5 0 01.5.5v1.977a.5.5 0 01-1 0V11.24a.5.5 0 01.5-.5zM12.087.283a.5.5 0 01.5.5v7.63a.5.5 0 11-1 0V.783a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.087 8.913a.913.913 0 100 1.826.913.913 0 000-1.826zm-1.913.913a1.913 1.913 0 113.826 0 1.913 1.913 0 01-3.826 0zM1.913 8.479a.5.5 0 01.5.5v4.239a.5.5 0 01-1 0v-4.24a.5.5 0 01.5-.5zM1.913.283a.5.5 0 01.5.5v5.37a.5.5 0 01-1 0V.782a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.913 6.652a.913.913 0 100 1.826.913.913 0 000-1.826zM0 7.565a1.913 1.913 0 113.826 0 1.913 1.913 0 01-3.826 0z"
            fill="currentColor"
        />
    </svg>
);
