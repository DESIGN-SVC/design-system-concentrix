import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const VideoCamera = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={10}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.964.977h7.429a2.357 2.357 0 012.357 2.357v5.572a.964.964 0 01-.964.964H2.357A2.357 2.357 0 010 7.513V1.94A.964.964 0 01.964.977zm.036 1h7.393A1.357 1.357 0 019.75 3.334V8.87H2.357A1.357 1.357 0 011 7.513V1.977z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.751 2.205a.5.5 0 01.25.433v5.571a.5.5 0 01-.749.434l-3.25-1.857a.5.5 0 11.496-.868L13 7.348V3.499l-2.502 1.43a.5.5 0 01-.496-.868l3.25-1.857a.5.5 0 01.499.001z"
            fill="currentColor"
        />
    </svg>
);
