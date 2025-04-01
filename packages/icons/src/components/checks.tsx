import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Checks = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.514 5.093a.5.5 0 010 .707l-5.107 5.107a.5.5 0 01-.707 0L1.146 8.354a.5.5 0 01.708-.708l2.2 2.2 4.753-4.753a.5.5 0 01.707 0zM14.853 5.093a.5.5 0 010 .707l-5.107 5.107a.5.5 0 01-.707 0L7.683 9.551a.5.5 0 11.707-.708l1.003 1.003 4.753-4.753a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
