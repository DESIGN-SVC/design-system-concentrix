import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const LockOpen = ({ ...props }: GenericIconProps) => (
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
            d="M2.8 7.534a.02.02 0 00-.02.02v7.28c0 .01.008.02.02.02h10.4a.02.02 0 00.02-.02v-7.28a.02.02 0 00-.02-.02H2.8zm-1.02.02c0-.564.456-1.02 1.02-1.02h10.4c.563 0 1.02.456 1.02 1.02v7.28a1.02 1.02 0 01-1.02 1.02H2.8a1.02 1.02 0 01-1.02-1.02v-7.28z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.854a1.84 1.84 0 00-1.84 1.84v2.34a.5.5 0 01-1 0v-2.34a2.84 2.84 0 115.68 0 .5.5 0 01-1 0A1.84 1.84 0 008 2.854z"
            fill="currentColor"
        />
        <path
            d="M8 12.59a.75.75 0 100-1.5.75.75 0 000 1.5z"
            fill="currentColor"
        />
    </svg>
);
