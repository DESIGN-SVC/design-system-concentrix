import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const InstagramLogo = ({ ...props }: GenericIconProps) => (
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
            d="M8 5.864a2.326 2.326 0 100 4.652 2.326 2.326 0 000-4.652zM4.674 8.19a3.326 3.326 0 116.652 0 3.326 3.326 0 01-6.652 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.891 2.19A2.891 2.891 0 002 5.082v6.217a2.891 2.891 0 002.891 2.891h6.218A2.891 2.891 0 0014 11.3V5.081a2.891 2.891 0 00-2.891-2.892H4.89zM1 5.082A3.891 3.891 0 014.891 1.19h6.218A3.891 3.891 0 0115 5.082v6.217a3.891 3.891 0 01-3.891 3.891H4.89A3.891 3.891 0 011 11.3V5.081z"
            fill="currentColor"
        />
        <path
            d="M11.674 5.364a.848.848 0 100-1.696.848.848 0 000 1.696z"
            fill="currentColor"
        />
    </svg>
);
