import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Square = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={0.5}
            y={1.06885}
            width={15}
            height={15}
            rx={1.5}
            stroke="currentColor"
        />
    </svg>
);
