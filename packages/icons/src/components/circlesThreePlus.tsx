import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CirclesThreePlus = ({ ...props }: GenericIconProps) => (
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
            d="M4.16 2.523a2.16 2.16 0 100 4.318 2.16 2.16 0 000-4.318zM1 4.682a3.16 3.16 0 116.318 0 3.16 3.16 0 01-6.318 0zM11.84 2.523a2.16 2.16 0 100 4.318 2.16 2.16 0 000-4.318zM8.683 4.682a3.16 3.16 0 116.318 0 3.16 3.16 0 01-6.318 0zM4.16 10.205a2.16 2.16 0 10-.001 4.318 2.16 2.16 0 000-4.318zM1 12.364a3.16 3.16 0 116.318 0 3.16 3.16 0 01-6.318 0zM11.84 9.796a.5.5 0 01.5.5v4.136a.5.5 0 11-1 0v-4.136a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.272 12.364a.5.5 0 01.5-.5h4.137a.5.5 0 110 1H9.772a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
