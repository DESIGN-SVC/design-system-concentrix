import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Megaphone = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.667 5.541a1 1 0 011-1h1.871v5.172H4.667a1 1 0 01-1-1V5.54zm1 0h.871v3.172h-.871V5.54z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.308 9.053h2.42a1 1 0 01.859.487l1.56 2.612a1.283 1.283 0 11-2.204 1.315L3.308 9.053zm2.42 1H5.07l1.733 2.902a.283.283 0 10.486-.29l-1.56-2.612z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.596 5.545a1 1 0 01.628-.929l5.287-2.114a1 1 0 011.371.928v7.401a1 1 0 01-1.371.928L6.224 9.645a1 1 0 01-.628-.929V5.545zm1 3.171V5.545l5.286-2.115v7.401L6.596 8.716zM4.688 9.714h-1c-.545 0-1.16-.227-1.644-.622a2.503 2.503 0 01-.941-1.964c0-.912.409-1.594.961-2.022a2.727 2.727 0 011.624-.564h1v1h-1a1.73 1.73 0 00-1 .346c-.329.25-.585.649-.585 1.24 0 .535.256.935.585 1.199.322.258.712.387 1 .387h1v1zm-1-1h1V5.542h-1v3.172z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.943 5.203h1a2.057 2.057 0 110 4.115h-1V5.203zm2 2.402a1.053 1.053 0 000-.688 1.058 1.058 0 00-1-.714v2.115c.463 0 .857-.298 1-.713z"
            fill="currentColor"
        />
    </svg>
);
