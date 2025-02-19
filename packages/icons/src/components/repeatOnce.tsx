import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const RepeatOnce = ({ ...props }: GenericIconProps) => (
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
            d="M11.521.733a.5.5 0 01.708 0l1.625 1.625a.5.5 0 010 .707L12.229 4.69a.5.5 0 01-.708-.707l1.272-1.272L11.52 1.44a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.833 3.211A3.833 3.833 0 001 7.045a.5.5 0 01-1 0A4.833 4.833 0 014.833 2.21H13.5a.5.5 0 010 1H4.833zM2.479 9.4a.5.5 0 010 .707l-1.272 1.27L2.48 12.65a.5.5 0 11-.708.708L.146 11.732a.5.5 0 010-.708L1.771 9.4a.5.5 0 01.708 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 6.545a.5.5 0 01.5.5 4.833 4.833 0 01-4.833 4.833H.5a.5.5 0 010-1h8.667A3.833 3.833 0 0013 7.045a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.534 4.995a.5.5 0 01.237.425v3.25a.5.5 0 11-1 0V6.229l-.36.18a.5.5 0 01-.447-.895l1.083-.541a.5.5 0 01.487.022z"
            fill="currentColor"
        />
    </svg>
);
