import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SlidersHorizontal = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={12}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.5 9.006h7.977a.5.5 0 110 1H.5a.5.5 0 010-1zM10.932 9.506a.5.5 0 01.5-.5H13.5a.5.5 0 110 1h-2.068a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.955 8.53a.977.977 0 100 1.954.977.977 0 000-1.955zm-1.977.977a1.977 1.977 0 113.954 0 1.977 1.977 0 01-3.954 0zM0 2.493a.5.5 0 01.5-.5h3.25a.5.5 0 110 1H.5a.5.5 0 01-.5-.5zM6.704 1.993H13.5a.5.5 0 010 1H6.704a.5.5 0 010-1z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.227 1.516a.977.977 0 100 1.954.977.977 0 000-1.954zm-1.977.977a1.977 1.977 0 113.955 0 1.977 1.977 0 01-3.955 0z"
            fill="currentColor"
        />
    </svg>
);
