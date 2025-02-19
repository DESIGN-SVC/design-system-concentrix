import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ClockCounterClockwise = ({ ...props }: GenericIconProps) => (
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
            d="M6.712 3.54a.5.5 0 01.5.5V7.43a.5.5 0 11-1 0V4.04a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.279 7.179a.5.5 0 01.683-.183L9.896 8.69a.5.5 0 01-.5.866L6.462 7.862a.5.5 0 01-.183-.683zM.499 2.108a.5.5 0 00-.5.5v2.824a.5.5 0 00.5.5h2.823a.5.5 0 000-1H1V2.608a.5.5 0 00-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.174 1.827a5.712 5.712 0 11-2.925 9.64.5.5 0 10-.707.707 6.712 6.712 0 100-9.491L.146 5.078a.5.5 0 10.708.708L3.249 3.39a5.712 5.712 0 012.925-1.563z"
            fill="currentColor"
        />
    </svg>
);
