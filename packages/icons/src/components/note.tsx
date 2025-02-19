import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Note = ({ ...props }: GenericIconProps) => (
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
            d="M5.137 6.252a.5.5 0 01.5-.5h4.727a.5.5 0 010 1H5.637a.5.5 0 01-.5-.5zM5.137 8.616a.5.5 0 01.5-.5h4.727a.5.5 0 010 1H5.637a.5.5 0 01-.5-.5zM5.137 10.98a.5.5 0 01.5-.5H8a.5.5 0 110 1H5.637a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.09 2.616a.09.09 0 00-.09.09v11.819a.091.091 0 00.09.09h8.029a.09.09 0 00.064-.026l3.79-3.79a.093.093 0 00.027-.064V2.707a.091.091 0 00-.09-.091H2.09zm-.77-.68a1.09 1.09 0 01.77-.32h11.82A1.091 1.091 0 0115 2.706v8.029a1.091 1.091 0 01-.32.771l-3.79 3.79a1.09 1.09 0 01-.771.32H2.09A1.09 1.09 0 011 14.525V2.707c0-.29.115-.567.32-.772z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.863 10.979a.5.5 0 01.5-.5h4.083a.5.5 0 110 1h-3.583v3.583a.5.5 0 01-1 0V10.98z"
            fill="currentColor"
        />
    </svg>
);
