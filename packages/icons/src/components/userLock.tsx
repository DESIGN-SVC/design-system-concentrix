import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const UserLock = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={8.36167} cy={4.42417} r={2.42417} stroke="currentColor" />
        <path
            d="M8.364 13.848H5.989c-1.312 0-2.47-1.342-1.786-2.648C4.87 9.923 6.165 9 8.363 9"
            stroke="currentColor"
            strokeLinecap="round"
        />
        <path
            d="M14.62 10.33h-4.4a.22.22 0 00-.22.22v3.08c0 .121.098.22.22.22h4.4a.22.22 0 00.22-.22v-3.08a.22.22 0 00-.22-.22zM11.43 10.33v-.99a.99.99 0 011.98 0v.99"
            stroke="currentColor"
            strokeWidth={0.825}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.42 12.681a.317.317 0 100-.635.317.317 0 000 .635z"
            fill="currentColor"
        />
    </svg>
);
