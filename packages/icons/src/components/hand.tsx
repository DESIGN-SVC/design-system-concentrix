import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Hand = ({ ...props }: GenericIconProps) => (
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
            d="M7.376 3.532a.704.704 0 00-.704.703v6.336a.5.5 0 01-.933.25l-1.32-2.286a.706.706 0 00-1.168-.077.704.704 0 00-.051.78.503.503 0 01.02.037c.98 2.07 1.738 3.392 2.545 4.202.77.772 1.6 1.092 2.814 1.092a4.313 4.313 0 004.315-4.315V5.198a.704.704 0 10-1.407 0v3.13a.5.5 0 11-1 0v-3.13a1.704 1.704 0 013.407 0v5.056a5.315 5.315 0 01-5.315 5.315c-1.445 0-2.54-.402-3.522-1.386-.941-.944-1.759-2.408-2.734-4.463a1.704 1.704 0 012.962-1.685m0 0l.387.67v-4.47a1.704 1.704 0 113.407 0v4.093a.5.5 0 11-1 0V4.235a.704.704 0 00-.703-.703"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.578 2.068a1.704 1.704 0 012.909 1.205v5.055a.5.5 0 11-1 0V3.273a.704.704 0 10-1.408 0v5.055a.5.5 0 01-1 0V3.273c0-.452.18-.886.5-1.205z"
            fill="currentColor"
        />
    </svg>
);
