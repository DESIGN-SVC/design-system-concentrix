import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MusicNotesSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.16 8.42a1.32 1.32 0 100 2.64 1.32 1.32 0 000-2.64zM8.84 9.74a2.32 2.32 0 114.64 0 2.32 2.32 0 01-4.64 0zM2.84 10.5a1.32 1.32 0 100 2.64 1.32 1.32 0 000-2.64zM.52 11.82a2.32 2.32 0 114.64 0 2.32 2.32 0 01-4.64 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.287.246a.5.5 0 01.192.394v9.1a.5.5 0 01-1 0V1.28L5.16 3.11v8.71a.5.5 0 11-1 0v-9.1a.5.5 0 01.379-.485l8.32-2.08a.5.5 0 01.429.091z"
            fill="currentColor"
        />
    </svg>
);
