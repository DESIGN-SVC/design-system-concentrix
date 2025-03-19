import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Infinite = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={7}
        viewBox="0 0 14 7"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.732 1.089a2.286 2.286 0 101.16 3.868l.493-.557a.5.5 0 11.749.663l-.504.569a3.286 3.286 0 110-4.603l3.478 3.928a2.286 2.286 0 100-3.253l-.493.558a.5.5 0 01-.749-.663l.504-.57a3.286 3.286 0 110 4.603L4.892 1.704a2.286 2.286 0 00-1.16-.615z"
            fill="currentColor"
        />
    </svg>
);
