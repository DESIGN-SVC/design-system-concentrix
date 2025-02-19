import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const MinusSquare = ({ ...props }: GenericIconProps) => (
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
            fill="#25E2CC"
        />
        <rect
            x={0.5}
            y={1.06885}
            width={15}
            height={15}
            rx={1.5}
            stroke="#003D5B"
        />
        <path
            stroke="#003D5B"
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M4.75 8.48535L11.25 8.48535"
        />
    </svg>
);
