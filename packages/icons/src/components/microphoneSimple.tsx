import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MicrophoneSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={10}
        height={15}
        viewBox="0 0 10 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 1.423a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2zm0-1a3 3 0 00-3 3v4a3 3 0 006 0v-4a3 3 0 00-3-3zM5 11.423a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.472 7.426a.5.5 0 01.552.442 4 4 0 007.952 0 .5.5 0 11.993.111 5 5 0 01-9.939 0 .5.5 0 01.442-.553z"
            fill="currentColor"
        />
    </svg>
);
