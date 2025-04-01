import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Table = ({ ...props }: GenericIconProps) => (
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
            d="M1 3.978a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9.208a1.042 1.042 0 01-1.042 1.042H2.042A1.041 1.041 0 011 13.186V3.978zm1 .5v8.708a.042.042 0 00.042.042h11.916a.042.042 0 00.042-.042V4.478H2z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 7.228a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM1 10.478a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.292 6.728a.5.5 0 01.5.5v6.5a.5.5 0 11-1 0v-6.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
