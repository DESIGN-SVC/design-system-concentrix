import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const QuoteSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={11}
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14 11.004v-5.25h-3.5c0-1.93 1.569-3.5 3.5-3.5V.504a5.256 5.256 0 00-5.25 5.25v5.25H14zM5.25 11.004v-5.25h-3.5c0-1.93 1.569-3.5 3.5-3.5V.504A5.256 5.256 0 000 5.754v5.25h5.25z"
            fill="currentColor"
        />
    </svg>
);
