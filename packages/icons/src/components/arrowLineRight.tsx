import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowLineRight = ({ ...props }: GenericIconProps) => (
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
            d="M1 7.962a.5.5 0 01.5-.5h10.74a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.798 2.522a.5.5 0 01.707 0l5.087 5.087a.5.5 0 010 .707l-5.087 5.087a.5.5 0 01-.707-.707l4.733-4.734L6.798 3.23a.5.5 0 010-.707zM14.5 1.245a.5.5 0 01.5.5V14.18a.5.5 0 01-1 0V1.745a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
