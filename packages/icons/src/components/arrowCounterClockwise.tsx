import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowCounterClockwise = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.499 1.824a.5.5 0 00-.5.5v2.824a.5.5 0 00.5.5h2.823a.5.5 0 000-1H1V2.324a.5.5 0 00-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.174 1.542a5.712 5.712 0 11-2.925 9.641.5.5 0 00-.707.707 6.712 6.712 0 100-9.492L.146 4.794a.5.5 0 10.708.707l2.395-2.395a5.712 5.712 0 012.925-1.564z"
            fill="currentColor"
        />
    </svg>
);
