import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsClockwise = ({ ...props }: GenericIconProps) => (
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
            d="M14.5 3.145a.5.5 0 01.5.5v3.244a.5.5 0 01-.5.5h-3.244a.5.5 0 110-1H14V3.645a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 3.353a5.448 5.448 0 00-3.853 1.596.5.5 0 01-.707-.707 6.448 6.448 0 019.12 0l2.294 2.294a.5.5 0 01-.707.707l-2.295-2.294A5.448 5.448 0 008 3.353zM1 10.713a.5.5 0 01.5-.5h3.244a.5.5 0 110 1H2v2.744a.5.5 0 11-1 0v-3.244z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.146 10.36a.5.5 0 01.708 0l2.294 2.293a5.448 5.448 0 007.704 0 .5.5 0 11.708.708 6.448 6.448 0 01-9.12 0l-2.294-2.295a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
