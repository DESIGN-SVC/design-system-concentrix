import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Help = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.069a1.5 1.5 0 00-1.5 1.5.5.5 0 01-1 0 2.5 2.5 0 113.7 2.194 1.89 1.89 0 00-.523.401c-.125.147-.177.28-.177.405v.987a.5.5 0 01-1 0V9.57c0-.428.186-.784.418-1.056.23-.268.525-.476.8-.627A1.5 1.5 0 008 5.069z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.569a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            d="M8.75 12.382a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            fill="currentColor"
        />
    </svg>
);
