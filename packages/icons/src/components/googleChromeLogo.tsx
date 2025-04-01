import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GoogleChromeLogo = ({ ...props }: GenericIconProps) => (
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
            d="M8 2.19a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 6.253a1.938 1.938 0 100 3.875 1.938 1.938 0 000-3.875zM5.062 8.19a2.937 2.937 0 115.875 0 2.937 2.937 0 01-5.874 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 5.753a.5.5 0 01.5-.5h6.026a.5.5 0 110 1H8a.5.5 0 01-.5-.5zM2.624 3.756a.5.5 0 01.683.183l3.013 5.22a.5.5 0 11-.866.5l-3.013-5.22a.5.5 0 01.183-.683zM10.363 8.976a.5.5 0 01.183.683l-3.013 5.22a.5.5 0 11-.866-.5L9.68 9.16a.5.5 0 01.683-.183z"
            fill="currentColor"
        />
    </svg>
);
