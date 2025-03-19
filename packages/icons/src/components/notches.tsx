import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Notches = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path d="M1.586 13.586l12-12M6.414 14.414l8-8" stroke="currentColor" />
    </svg>
);
