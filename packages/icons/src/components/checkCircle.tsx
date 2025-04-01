import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CheckCircle = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.853a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.679 6.193a.5.5 0 010 .707l-4.613 4.613a.5.5 0 01-.707 0L4.32 9.473a.5.5 0 11.707-.706l1.686 1.685 4.259-4.259a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
