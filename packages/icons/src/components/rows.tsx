import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Rows = ({ ...props }: GenericIconProps) => (
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
            d="M2.09 9.8a.09.09 0 00-.09.09v2.955c0 .05.04.091.09.091h11.82c.05 0 .09-.04.09-.09V9.89a.09.09 0 00-.09-.091H2.09zM1 9.89c0-.602.488-1.09 1.09-1.09h11.82c.602 0 1.09.488 1.09 1.09v2.955a1.09 1.09 0 01-1.09 1.091H2.09A1.09 1.09 0 011 12.846V9.89zM2.09 3.3a.09.09 0 00-.09.09v2.955c0 .05.04.091.09.091h11.82c.05 0 .09-.04.09-.09V3.39a.09.09 0 00-.09-.091H2.09zM1 3.39c0-.602.488-1.09 1.09-1.09h11.82c.602 0 1.09.488 1.09 1.09v2.955a1.09 1.09 0 01-1.09 1.091H2.09A1.09 1.09 0 011 6.346V3.39z"
            fill="currentColor"
        />
    </svg>
);
