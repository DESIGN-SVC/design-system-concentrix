import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Slash = ({ ...props }: GenericIconProps) => (
    <svg
        width={6}
        height={10}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.618.003L1.9 9.997H.382L4.107.003h1.511z"
            fill="currentColor"
        />
    </svg>
);
