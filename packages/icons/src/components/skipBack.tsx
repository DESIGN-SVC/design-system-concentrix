import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SkipBack = ({ ...props }: GenericIconProps) => (
    <svg
        width={12}
        height={14}
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.771 1.475a.091.091 0 00-.092.001L1.767 6.923a.09.09 0 000 .155l8.912 5.446a.091.091 0 00.139-.077V1.554a.09.09 0 00-.047-.08zM10.706.463a1.09 1.09 0 011.112 1.09v10.894a1.09 1.09 0 01-1.66.93L1.246 7.931a1.09 1.09 0 010-1.862L10.158.623c.165-.101.355-.156.548-.16z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.682 0a.5.5 0 01.5.5v13a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
