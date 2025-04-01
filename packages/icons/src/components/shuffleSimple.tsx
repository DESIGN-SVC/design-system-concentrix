import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ShuffleSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75.5a.5.5 0 01.5-.5h3.25a.5.5 0 01.5.5v3.25a.5.5 0 01-1 0V1h-2.75a.5.5 0 01-.5-.5zM13.5 9.75a.5.5 0 01.5.5v3.25a.5.5 0 01-.5.5h-3.25a.5.5 0 010-1H13v-2.75a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.146.146a.5.5 0 01.708 0l13 13a.5.5 0 01-.708.708l-13-13a.5.5 0 010-.708zM13.853.146a.5.5 0 010 .708L9.191 5.515a.5.5 0 11-.707-.707L13.146.146a.5.5 0 01.707 0zM5.515 8.485a.5.5 0 010 .707L.854 13.854a.5.5 0 01-.708-.708l4.662-4.661a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
