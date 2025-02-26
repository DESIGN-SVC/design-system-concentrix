import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GooglePlayLogo = ({ ...props }: GenericIconProps) => (
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
            d="M1.26.317a1 1 0 01.998.01l10.479 6.001a.982.982 0 010 1.725l-10.479 6a1 1 0 01-1.508-.852V1.18a1 1 0 01.51-.863zM12.23 7.19L1.75 1.19v12.003l.008-.004L12.23 7.19z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.047.475a.5.5 0 01.707 0L10.11 8.83a.5.5 0 11-.707.707L1.047 1.182a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.11 4.843a.5.5 0 010 .707l-8.356 8.357a.5.5 0 01-.707-.707l8.356-8.357a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
