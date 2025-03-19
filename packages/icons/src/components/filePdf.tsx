import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FilePdf = ({ ...props }: GenericIconProps) => (
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
            d="M2.63 2.186a.065.065 0 00-.065.065v6.217a.5.5 0 01-1 0V2.251a1.065 1.065 0 011.066-1.065h6.782a.5.5 0 01.354.146l3.956 3.957a.5.5 0 01.147.353v2.826a.5.5 0 01-1 0V5.85L9.206 2.186H2.631z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.413 1.186a.5.5 0 01.5.5v3.456h3.457a.5.5 0 110 1H9.413a.5.5 0 01-.5-.5V1.686a.5.5 0 01.5-.5zM1.565 11.294a.5.5 0 01.5-.5h1.13a1.63 1.63 0 010 3.261h-.63v.63a.5.5 0 11-1 0v-3.39zm1 1.761h.63a.63.63 0 100-1.26h-.63v1.26zM11.457 11.294a.5.5 0 01.5-.5h1.978a.5.5 0 010 1h-1.478v2.892a.5.5 0 11-1 0v-3.392z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.457 13.273a.5.5 0 01.5-.5h1.696a.5.5 0 110 1h-1.696a.5.5 0 01-.5-.5zM6.229 11.294a.5.5 0 01.5-.5h.989a2.196 2.196 0 010 4.392h-.99a.5.5 0 01-.5-.5v-3.392zm1 .5v2.392h.489a1.195 1.195 0 100-2.392h-.49z"
            fill="currentColor"
        />
    </svg>
);
