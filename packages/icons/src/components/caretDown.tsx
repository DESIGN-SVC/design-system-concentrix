import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CaretDown = ({ ...props }: GenericIconProps) => (
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
            d="M1.146 4.92a.5.5 0 01.708 0L8 11.067l6.146-6.147a.5.5 0 01.708.707l-6.5 6.5a.5.5 0 01-.708 0l-6.5-6.5a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
