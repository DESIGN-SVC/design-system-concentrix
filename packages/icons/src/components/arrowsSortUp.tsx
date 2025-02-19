import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsSortUp = ({ ...props }: GenericIconProps) => (
    <svg
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.158.706a.2.2 0 00-.316 0L.784 4.678A.2.2 0 00.942 5h6.116a.2.2 0 00.158-.322L4.158.706z"
            fill="#2A2B2C"
        />
        <path
            d="M3.842 11.294a.2.2 0 00.316 0l3.058-3.972A.2.2 0 007.058 7H.942a.2.2 0 00-.158.322l3.058 3.972z"
            fill="currentColor"
        />
    </svg>
);
