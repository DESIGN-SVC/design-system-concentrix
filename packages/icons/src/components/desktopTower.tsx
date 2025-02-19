import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const DesktopTower = ({ ...props }: GenericIconProps) => (
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
            d="M2.429 6.237A.429.429 0 002 6.666v4.178a.429.429 0 00.429.429H7.07a.5.5 0 010 1H2.43A1.429 1.429 0 011 10.844V6.666a1.429 1.429 0 011.429-1.429H7.07a.5.5 0 010 1H2.43zM3.786 13.63a.5.5 0 01.5-.5h2.786a.5.5 0 110 1H4.286a.5.5 0 01-.5-.5zM10.286 5.273a.5.5 0 01.5-.5h1.857a.5.5 0 010 1h-1.857a.5.5 0 01-.5-.5zM10.286 7.13a.5.5 0 01.5-.5h1.857a.5.5 0 010 1h-1.857a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.429 3.916v9.214H14V3.916H9.43zm-1-.036c0-.532.431-.964.964-.964h4.643c.532 0 .964.432.964.964v9.286a.964.964 0 01-.964.964H9.393a.964.964 0 01-.964-.964V3.88zM5.679 11.273a.5.5 0 01.5.5v1.857a.5.5 0 01-1 0v-1.857a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            d="M11.714 12.121a.58.58 0 100-1.16.58.58 0 000 1.16z"
            fill="currentColor"
        />
    </svg>
);
