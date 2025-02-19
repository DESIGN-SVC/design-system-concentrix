import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsCounterClockwise = ({ ...props }: GenericIconProps) => (
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
            d="M1.5 3.145a.5.5 0 01.5.5v2.744h2.744a.5.5 0 110 1H1.5a.5.5 0 01-.5-.5V3.645a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.533 2.844a6.448 6.448 0 017.027 1.398.5.5 0 11-.708.707 5.448 5.448 0 00-7.704 0L1.854 7.243a.5.5 0 11-.708-.707l2.295-2.294a6.448 6.448 0 012.092-1.398zM10.756 10.713a.5.5 0 01.5-.5H14.5a.5.5 0 01.5.5v3.244a.5.5 0 11-1 0v-2.744h-2.744a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.854 10.36a.5.5 0 010 .706l-2.295 2.295a6.448 6.448 0 01-9.119 0 .5.5 0 11.708-.708 5.448 5.448 0 007.704 0l2.294-2.294a.5.5 0 01.708 0z"
            fill="currentColor"
        />
    </svg>
);
