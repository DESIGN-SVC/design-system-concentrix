import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TagSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={11}
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.293 1.146A1 1 0 011 .853h9.232a1 1 0 01.833.445l2.851 4.278a.5.5 0 010 .554l-2.851 4.278-.417-.278.417.278a1.001 1.001 0 01-.833.445H1a1 1 0 01-1-1v-8a1 1 0 01.293-.707zm9.94.707H1v8h9.232l2.667-4-2.667-4z"
            fill="currentColor"
        />
    </svg>
);
