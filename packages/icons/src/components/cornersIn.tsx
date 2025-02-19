import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CornersIn = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.512.998a.5.5 0 01.5.5v3.5h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5zM.998 10.51a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-3.5h-3.5a.5.5 0 01-.5-.5zM9.981 10.51a.5.5 0 01.5-.5h4a.5.5 0 110 1h-3.5v3.5a.5.5 0 11-1 0v-4zM5.527.998a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 010-1h3.5v-3.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
