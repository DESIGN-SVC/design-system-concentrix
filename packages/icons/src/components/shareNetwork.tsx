import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShareNetwork = ({ ...props }: GenericIconProps) => (
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
            d="M4.5 6.618a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 8.118a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM11.5 11.118a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.5 1.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM11.5 2.118a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9 3.618a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.238 4.429a.5.5 0 01-.15.69L6.452 7.458a.5.5 0 11-.54-.841l3.635-2.337a.5.5 0 01.691.15zM5.761 8.928a.5.5 0 01.691-.15l3.636 2.337a.5.5 0 01-.541.842L5.911 9.619a.5.5 0 01-.15-.69z"
            fill="currentColor"
        />
    </svg>
);
