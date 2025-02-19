import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Link = ({ ...props }: GenericIconProps) => (
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
            d="M12.33 3.06a2.703 2.703 0 00-2.947.586L7.94 5.088a.5.5 0 11-.707-.707L8.675 2.94a3.705 3.705 0 115.239 5.237l-2.06 2.06a3.707 3.707 0 01-5.238 0 .5.5 0 01.707-.707 2.704 2.704 0 003.824 0l2.06-2.06a2.706 2.706 0 00-.877-4.41z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.764 7.385a2.704 2.704 0 00-1.912.792l-2.059 2.06a2.704 2.704 0 103.824 3.824l1.441-1.442a.5.5 0 11.708.707l-1.442 1.441A3.705 3.705 0 112.086 9.53l2.06-2.059a3.704 3.704 0 015.237 0 .5.5 0 11-.707.707 2.704 2.704 0 00-1.912-.792z"
            fill="currentColor"
        />
    </svg>
);
