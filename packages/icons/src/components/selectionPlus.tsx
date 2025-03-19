import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SelectionPlus = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.702 2.353a.5.5 0 01.5-.5h1.66a.5.5 0 110 1h-1.66a.5.5 0 01-.5-.5zM5.702 13.417a.5.5 0 01.5-.5h1.66a.5.5 0 110 1h-1.66a.5.5 0 01-.5-.5zM10.128 2.353a.5.5 0 01.5-.5h1.383a1.053 1.053 0 011.053 1.053V4.29a.5.5 0 01-1 0V2.906a.053.053 0 00-.053-.053h-1.383a.5.5 0 01-.5-.5zM12.563 6.555a.5.5 0 01.5.5v1.66a.5.5 0 01-1 0v-1.66a.5.5 0 01.5-.5zM1.5 6.555a.5.5 0 01.5.5v1.66a.5.5 0 01-1 0v-1.66a.5.5 0 01.5-.5zM1.5 10.98a.5.5 0 01.5.5v1.383a.053.053 0 00.053.054h1.383a.5.5 0 010 1H2.053A1.053 1.053 0 011 12.864V11.48a.5.5 0 01.5-.5zM1.308 2.162c.198-.198.466-.309.745-.309h1.383a.5.5 0 110 1H2.053A.053.053 0 002 2.906V4.29a.5.5 0 01-1 0V2.906c0-.28.111-.547.308-.744zM12.563 10.98a.5.5 0 01.5.5v3.873a.5.5 0 11-1 0V11.48a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.128 13.417a.5.5 0 01.5-.5H14.5a.5.5 0 110 1h-3.872a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
