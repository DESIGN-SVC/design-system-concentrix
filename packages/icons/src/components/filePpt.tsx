import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FilePpt = ({ ...props }: GenericIconProps) => (
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
            d="M1.848 11.294a.5.5 0 01.5-.5h1.13a1.63 1.63 0 010 3.261h-.63v.63a.5.5 0 11-1 0v-3.39zm1 1.761h.63a.63.63 0 100-1.26h-.63v1.26zM6.37 11.294a.5.5 0 01.5-.5H8a1.63 1.63 0 010 3.261h-.63v.63a.5.5 0 11-1 0v-3.39zm1 1.761H8a.63.63 0 100-1.26h-.63v1.26zM10.608 11.294a.5.5 0 01.5-.5h2.544a.5.5 0 010 1h-2.544a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.38 10.794a.5.5 0 01.5.5v3.392a.5.5 0 11-1 0v-3.392a.5.5 0 01.5-.5zM2.913 2.186a.065.065 0 00-.065.065v6.217a.5.5 0 01-1 0V2.251a1.065 1.065 0 011.065-1.065h6.782a.5.5 0 01.354.146l3.957 3.957a.5.5 0 01.146.353v2.826a.5.5 0 01-1 0V5.85L9.488 2.186H2.913z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.695 1.186a.5.5 0 01.5.5v3.456h3.457a.5.5 0 110 1H9.695a.5.5 0 01-.5-.5V1.686a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
