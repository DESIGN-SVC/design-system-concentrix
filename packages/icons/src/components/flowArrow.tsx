import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FlowArrow = ({ ...props }: GenericIconProps) => (
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
            d="M3.125 10.578a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM1 11.703a2.125 2.125 0 114.25 0 2.125 2.125 0 01-4.25 0zM11.825 3.456a.5.5 0 01.707 0l2.322 2.321a.5.5 0 010 .708l-2.322 2.321a.5.5 0 11-.707-.707l1.968-1.968-1.968-1.968a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.786 6.631A2.286 2.286 0 008.5 8.917a3.286 3.286 0 01-3.286 3.286H4.75a.5.5 0 010-1h.464A2.286 2.286 0 007.5 8.917a3.286 3.286 0 013.286-3.286H14.5a.5.5 0 010 1h-3.714z"
            fill="currentColor"
        />
    </svg>
);
