import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const UserPlus = ({ ...props }: GenericIconProps) => (
    <svg
        width={15}
        height={14}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={5.36167} cy={3.42417} r={2.42417} stroke="currentColor" />
        <path
            d="M7.738 12.826h-4.75c-1.31 0-2.469-1.342-1.785-2.648.668-1.277 1.962-2.2 4.16-2.2 2.199 0 3.493.923 4.161 2.2.684 1.306-.474 2.648-1.786 2.648z"
            stroke="currentColor"
        />
        <path
            d="M11.828 1.449v3.95M13.77 3.424H9.89"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);
