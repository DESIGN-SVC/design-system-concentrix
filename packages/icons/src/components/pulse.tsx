import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Pulse = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.016.911a.5.5 0 01.451.322l3.595 9.436 1.99-3.981a.5.5 0 01.448-.277h2a.5.5 0 010 1h-1.691l-2.362 4.724a.5.5 0 01-.914-.046L4.959 2.71 2.955 7.118a.5.5 0 01-.455.293h-2a.5.5 0 110-1h1.678l2.367-5.207a.5.5 0 01.47-.293z"
            fill="currentColor"
        />
    </svg>
);
