import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ChartPieSlice = ({ ...props }: GenericIconProps) => (
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
            d="M8 1.523a.5.5 0 01.5.5v6.5a.5.5 0 01-1 0v-6.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.063 5.023a.5.5 0 01-.184.683l-11.258 6.5a.5.5 0 11-.5-.866l11.259-6.5a.5.5 0 01.682.183zM6.122 1.985a.5.5 0 01.211.408v4.88a.5.5 0 01-.25.432l-4.225 2.44a.5.5 0 01-.741-.343 7.01 7.01 0 014.55-7.88.5.5 0 01.455.063zm-.789 1.162a6.01 6.01 0 00-3.321 5.754l3.321-1.917V3.147z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 2.023a.5.5 0 01.5-.5A7 7 0 111.966 12.07a.5.5 0 11.862-.507A6 6 0 108 2.523a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
