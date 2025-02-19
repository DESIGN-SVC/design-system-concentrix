import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowUp = ({ ...props }: GenericIconProps) => (
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
            d="M8.019 1.429a.5.5 0 01.5.5v13a.5.5 0 11-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.665 1.575a.5.5 0 01.707 0l5.318 5.318a.5.5 0 11-.707.707L8.018 2.636 3.054 7.6a.5.5 0 01-.707-.707l5.318-5.318z"
            fill="currentColor"
        />
    </svg>
);
