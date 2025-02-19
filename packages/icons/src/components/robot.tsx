import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Robot = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3H2a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H2z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 13H3v-1a1 1 0 011-1h6a1 1 0 011 1v1zm-8 1a1 1 0 01-1-1v-1a2 2 0 012-2h6a2 2 0 012 2v1a1 1 0 01-1 1H3z"
            fill="currentColor"
        />
        <path d="M10 7.5a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 6.5a1 1 0 11-2 0 1 1 0 012 0z"
            fill="currentColor"
        />
        <path d="M4 7.5a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6.5a1 1 0 11-2 0 1 1 0 012 0zM11.224.057a.5.5 0 01.223.67l-1 2a.5.5 0 11-.894-.447l1-2a.5.5 0 01.67-.223zM2.776.057a.5.5 0 01.671.223l1 2a.5.5 0 11-.894.448l-1-2a.5.5 0 01.224-.671z"
            fill="currentColor"
        />
    </svg>
);
