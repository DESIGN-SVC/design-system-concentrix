import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const AndroidLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={11}
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.25 7.69a.75.75 0 100-1.5.75.75 0 000 1.5zM4.75 7.69a.75.75 0 100-1.5.75.75 0 000 1.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.28 2.14a6 6 0 00-2.303-.45C3.67 1.702 1 4.434 1 7.76v1.43h12v-1.5a6.001 6.001 0 00-3.72-5.55zM6.973.69a7 7 0 017.027 7v1.5a1 1 0 01-1 1H1a1 1 0 01-1-1V7.76C0 3.896 3.103.703 6.973.69"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.646.337a.5.5 0 01.708 0L3.297 2.28a.5.5 0 11-.707.707L.646 1.044a.5.5 0 010-.707zM13.353.337a.5.5 0 010 .707l-1.931 1.931a.5.5 0 11-.707-.707L12.646.337a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
