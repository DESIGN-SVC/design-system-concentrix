import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const CodepenLogo = ({ ...props }: GenericIconProps) => (
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
            d="M7.993 3.08l-5.48 3.11L8 9.303l5.487-3.113-5.48-3.11a.019.019 0 00-.014 0zm-.472-.88a1.019 1.019 0 01.958 0l.012.005 6.256 3.55a.5.5 0 010 .87l-6.5 3.688a.5.5 0 01-.494 0l-6.5-3.688a.5.5 0 010-.87L7.521 2.2z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.753 6.068a.5.5 0 01.494 0l6.5 3.688a.5.5 0 010 .87l-6.268 3.556a1.02 1.02 0 01-.958 0l-.012-.007-6.256-3.55a.5.5 0 010-.87l6.5-3.687zm-5.24 4.123l5.48 3.109a.02.02 0 00.007.001.02.02 0 00.007-.001l5.48-3.11L8 7.079 2.513 10.19z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 5.69a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5zM1.5 5.69a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5zM8 9.378a.5.5 0 01.5.5v3.925a.5.5 0 11-1 0V9.878a.5.5 0 01.5-.5zM8 2.078a.5.5 0 01.5.5v3.925a.5.5 0 01-1 0V2.578a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
