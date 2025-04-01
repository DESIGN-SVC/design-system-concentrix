import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Cpu = ({ ...props }: GenericIconProps) => (
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
            d="M5.75 6.296a.5.5 0 01.5-.5h3.5a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5h-3.5a.5.5 0 01-.5-.5v-3.5zm1 .5v2.5h2.5v-2.5h-2.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 3.546a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-9a1 1 0 01-1-1v-9zm10 0h-9v9h9v-9z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 6.546a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H13a.5.5 0 01-.5-.5zM12.5 9.546a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H13a.5.5 0 01-.5-.5zM1 6.546a.5.5 0 01.5-.5H3a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM1 9.546a.5.5 0 01.5-.5H3a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM9.5 12.546a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM6.5 12.546a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM9.5 1.046a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM6.5 1.046a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
