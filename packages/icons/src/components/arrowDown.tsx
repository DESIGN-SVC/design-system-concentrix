import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowDown = ({ ...props }: GenericIconProps) => (
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
            d="M8.019 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.347 8.828a.5.5 0 01.707 0l4.964 4.965 4.965-4.965a.5.5 0 01.707.707l-5.318 5.318a.5.5 0 01-.707 0L2.347 9.535a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
