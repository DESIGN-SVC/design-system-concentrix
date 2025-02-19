import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Coffee = ({ ...props }: GenericIconProps) => (
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
            d="M5 1.523a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM7 1.523a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM9 1.523a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM1 14.023a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
             fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.023a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v3a6 6 0 01-3.498 5.454.5.5 0 11-.417-.909A5 5 0 0012 9.024v-2.5H2v2.5a5 5 0 002.915 4.546.5.5 0 01-.417.908A6 6 0 011 9.023v-3z"
             fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.023a.5.5 0 01.5-.5 2.5 2.5 0 012.5 2.5v.5a2.5 2.5 0 01-2.5 2.5h-.213a.5.5 0 110-1h.213a1.5 1.5 0 001.5-1.5v-.5a1.5 1.5 0 00-1.5-1.5.5.5 0 01-.5-.5z"
             fill="currentColor"
        />
    </svg>
);
