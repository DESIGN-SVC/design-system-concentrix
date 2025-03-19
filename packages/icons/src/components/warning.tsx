import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Warning = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 6.673a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0v-2.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25 2.373a1.5 1.5 0 012.048.548l-.432.25.432-.25 5.5 9.502a1.5 1.5 0 01-1.298 2.252h-11a1.5 1.5 0 01-1.298-2.252l5.5-9.502.436.253-.436-.253a1.5 1.5 0 01.549-.548zm.75.8a.5.5 0 00-.433.249l-5.5 9.502a.5.5 0 00.433.75h11a.5.5 0 00.433-.75l-5.5-9.502A.5.5 0 008 3.172z"
            fill="currentColor"
        />
        <path
            d="M8 12.55a.625.625 0 100-1.25.625.625 0 000 1.25z"
            fill="currentColor"
        />
    </svg>
);
