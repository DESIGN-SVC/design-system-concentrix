import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Check = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={10}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.854.166a.5.5 0 010 .707L5.187 9.54a.5.5 0 01-.707 0L.146 5.206A.5.5 0 11.854 4.5l3.98 3.98L13.146.166a.5.5 0 01.707 0z"
            fill="currentColor"
        />
    </svg>
);
