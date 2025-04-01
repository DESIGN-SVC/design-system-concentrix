import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ClockClockwise = ({ ...props }: GenericIconProps) => (
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
            d="M6.712 2.965a.5.5 0 01.5.5v3.388a.5.5 0 11-1 0V3.465a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.279 6.603a.5.5 0 01.683-.183l2.934 1.694a.5.5 0 01-.5.866L6.462 7.286a.5.5 0 01-.183-.683zM13.5 1.533a.5.5 0 01.5.5v2.823a.5.5 0 01-.5.5h-2.823a.5.5 0 110-1H13V2.033a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.826 1.25a5.712 5.712 0 102.925 9.642.5.5 0 01.707.707 6.711 6.711 0 110-9.492l2.396 2.396a.5.5 0 01-.708.707l-2.395-2.396a5.712 5.712 0 00-2.925-1.563z"
            fill="currentColor"
        />
    </svg>
);
