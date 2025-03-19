import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SelectionSlash = ({ ...props }: GenericIconProps) => (
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
            d="M6.318 2.353a.5.5 0 01.5-.5h2.364a.5.5 0 110 1H6.818a.5.5 0 01-.5-.5zM6.318 15.353a.5.5 0 01.5-.5h2.364a.5.5 0 010 1H6.818a.5.5 0 01-.5-.5zM11.637 2.353a.5.5 0 01.5-.5h1.772A1.09 1.09 0 0115 2.943v1.774a.5.5 0 01-1 0V2.944a.09.09 0 00-.09-.091h-1.773a.5.5 0 01-.5-.5zM14.5 7.171a.5.5 0 01.5.5v2.364a.5.5 0 11-1 0V7.671a.5.5 0 01.5-.5zM1.5 7.171a.5.5 0 01.5.5v2.364a.5.5 0 11-1 0V7.671a.5.5 0 01.5-.5zM1.5 12.49a.5.5 0 01.5.5v1.772a.091.091 0 00.09.09h1.774a.5.5 0 010 1H2.09A1.09 1.09 0 011 14.763v-1.773a.5.5 0 01.5-.5zM1.754 1.983a.5.5 0 01.707.034l11.818 13a.5.5 0 01-.74.672l-11.818-13a.5.5 0 01.033-.706z"
            fill="currentColor"
        />
    </svg>
);
