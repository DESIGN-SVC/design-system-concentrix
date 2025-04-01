import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const StopCircle = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 7.853a6 6 0 1112 0 6 6 0 01-12 0zm6-7a7 7 0 100 14 7 7 0 000-14zm-1.95 4.55a.5.5 0 00-.5.5v3.9a.5.5 0 00.5.5h3.9a.5.5 0 00.5-.5v-3.9a.5.5 0 00-.5-.5h-3.9zm.5 3.9v-2.9h2.9v2.9h-2.9z"
            fill="currentColor"
        />
    </svg>
);
