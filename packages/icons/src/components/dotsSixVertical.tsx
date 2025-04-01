import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const DotsSixVertical = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            d="M5 3.523a1 1 0 100-2 1 1 0 000 2zM11 3.523a1 1 0 100-2 1 1 0 000 2zM5 9.523a1 1 0 100-2 1 1 0 000 2zM11 9.523a1 1 0 100-2 1 1 0 000 2zM5 15.523a1 1 0 100-2 1 1 0 000 2zM11 15.523a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
        />
    </svg>
);
