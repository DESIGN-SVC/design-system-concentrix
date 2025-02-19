import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Cursor = ({ ...props }: GenericIconProps) => (
    <svg
        width={10}
        height={15}
        viewBox="0 0 10 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.493 13.64l2.013-.917-2.093-4.598 3.81-.168L.776.64v11.163l2.62-2.762 2.096 4.6z"
            stroke="currentColor"
            strokeLinejoin="round"
        />
    </svg>
);
