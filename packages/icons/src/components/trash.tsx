import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Trash = ({ ...props }: GenericIconProps) => (
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
            d="M5.7 1a.8.8 0 00-.692.4.5.5 0 11-.866-.5A1.8 1.8 0 015.7 0h2.6a1.8 1.8 0 011.8 1.8v.8h2.75a.5.5 0 010 1H1.15a.5.5 0 010-1H9.1v-.8a.8.8 0 00-.8-.8H5.7zM2.45 4.55a.5.5 0 01.5.5v7.15a.8.8 0 00.8.8h6.5a.8.8 0 00.8-.8V5.05a.5.5 0 111 0v7.15a1.8 1.8 0 01-1.8 1.8h-6.5a1.8 1.8 0 01-1.8-1.8V5.05a.5.5 0 01.5-.5zm3.25 1.3a.5.5 0 01.5.5v3.9a.5.5 0 01-1 0v-3.9a.5.5 0 01.5-.5zm2.6 0a.5.5 0 01.5.5v3.9a.5.5 0 01-1 0v-3.9a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
