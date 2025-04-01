import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MagnifyingGlassTrendUp = ({ ...props }: GenericIconProps) => (
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
            d="M6.188 1.807a5.188 5.188 0 100 10.375 5.188 5.188 0 000-10.375zM0 6.994a6.188 6.188 0 1112.376 0A6.188 6.188 0 010 6.994z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.855 10.663a.5.5 0 01.707 0l3.291 3.29a.5.5 0 01-.707.708l-3.29-3.29a.5.5 0 010-.708zM8.61 5.93a.5.5 0 01.041.706l-1.759 1.98a.5.5 0 01-.72.028L4.786 7.308l-1.413 1.59a.5.5 0 11-.748-.664l1.76-1.98a.5.5 0 01.72-.027l1.385 1.335 1.413-1.59a.5.5 0 01.706-.042z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.887 5.028a.5.5 0 01.541.455l.146 1.702a.5.5 0 01-.996.086l-.104-1.204-1.204.103a.5.5 0 01-.085-.996l1.702-.146z"
            fill="currentColor"
        />
    </svg>
);
