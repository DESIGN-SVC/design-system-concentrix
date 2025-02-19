import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Backspace = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.29 2.63a1 1 0 01.493-.13H14a1 1 0 011 1v9a1 1 0 01-1 1H4.783a1 1 0 01-.857-.485l.428-.257-.428.257L1.07 8.258a.5.5 0 010-.515l2.855-4.757a1 1 0 01.364-.356zM14 3.5H4.783l-.429-.257.43.257-2.7 4.5 2.7 4.5H14v-9z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.854 6.147a.5.5 0 010 .707l-3 3a.5.5 0 11-.708-.707l3-3a.5.5 0 01.708 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.146 6.147a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.707l-3-3a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
