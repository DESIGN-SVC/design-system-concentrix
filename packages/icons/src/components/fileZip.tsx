import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileZip = ({ ...props }: GenericIconProps) => (
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
            d="M2.913 2.18a.065.065 0 00-.065.066v6.217a.5.5 0 11-1 0V2.246A1.065 1.065 0 012.913 1.18h6.782a.5.5 0 01.354.146l3.957 3.957a.5.5 0 01.146.353v2.826a.5.5 0 01-1 0V5.844L9.488 2.181H2.913z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.695 1.18a.5.5 0 01.5.5v3.457h3.457a.5.5 0 110 1H9.695a.5.5 0 01-.5-.5V1.681a.5.5 0 01.5-.5zM10.326 11.29a.5.5 0 01.5-.5h1.13a1.63 1.63 0 110 3.26h-.63v.63a.5.5 0 01-1 0v-3.39zm1 1.76h.63a.63.63 0 100-1.26h-.63v1.26zM8 10.79a.5.5 0 01.5.5v3.39a.5.5 0 01-1 0v-3.39a.5.5 0 01.5-.5zM2.413 11.29a.5.5 0 01.5-.5h2.261a.5.5 0 01.416.777L3.847 14.18h1.327a.5.5 0 110 1h-2.26a.5.5 0 01-.417-.777L4.24 11.79H2.913a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
