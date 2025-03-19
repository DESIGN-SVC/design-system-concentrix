import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Percent = ({ ...props }: GenericIconProps) => (
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
            d="M14.204 2.412a.5.5 0 010 .707l-11.7 11.7a.5.5 0 11-.707-.707l11.7-11.7a.5.5 0 01.707 0zM3.775 2.615a1.775 1.775 0 100 3.55 1.775 1.775 0 000-3.55zM1 4.39a2.775 2.775 0 115.55 0 2.775 2.775 0 01-5.55 0zM12.225 11.065a1.775 1.775 0 100 3.55 1.775 1.775 0 000-3.55zM9.45 12.84a2.775 2.775 0 115.55 0 2.775 2.775 0 01-5.55 0z"
            fill="currentColor"
        />
    </svg>
);
