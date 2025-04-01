import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Invoice = ({ ...props }: GenericIconProps) => (
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
            d="M5.081 4.832a.5.5 0 01.5-.5h4.945a.5.5 0 010 1H5.581a.5.5 0 01-.5-.5zM5.081 6.302a.5.5 0 01.5-.5h4.945a.5.5 0 010 1H5.581a.5.5 0 01-.5-.5zM5.081 7.771a.5.5 0 01.5-.5h2.473a.5.5 0 010 1H5.58a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.28 8.173h1.872v1H2.28v3.658a1.5 1.5 0 001.5 1.5h8.44a1.5 1.5 0 001.5-1.5V9.173h-.773v-1h1.772v4.658a2.5 2.5 0 01-2.5 2.5H3.78a2.5 2.5 0 01-2.5-2.5V8.173z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.047 11.204L3.146 8.176l-.526.85 5.427 3.353 5.426-3.352-.525-.851-4.901 3.028zM2.143 2.83a1.5 1.5 0 011.5-1.5h8.8a1.5 1.5 0 011.5 1.5v5.007h-1V2.83a.5.5 0 00-.5-.5h-8.8a.5.5 0 00-.5.5v5.006h-1V2.83z"
            fill="currentColor"
        />
    </svg>
);
