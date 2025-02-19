import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Key = ({ ...props }: GenericIconProps) => (
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
            d="M10.243 2.352a4.179 4.179 0 00-4.305 5.7.5.5 0 01-.106.552L2 12.436v1.895h1.602V13.27a.5.5 0 01.5-.5h1.06v-1.061a.5.5 0 01.5-.5h1.355l.71-.71a.5.5 0 01.55-.107 4.179 4.179 0 101.966-8.04zM8.209 11.43a5.18 5.18 0 10-3.31-3.309l-3.753 3.753A.5.5 0 001 12.23v2.602a.5.5 0 00.5.5h2.602a.5.5 0 00.5-.5V13.77h1.06a.5.5 0 00.5-.5v-1.061h1.062a.5.5 0 00.353-.147l.632-.631z"
            fill="currentColor"
        />
        <path
            d="M10.999 6.082a.75.75 0 100-1.5.75.75 0 000 1.5z"
            fill="currentColor"
        />
    </svg>
);
