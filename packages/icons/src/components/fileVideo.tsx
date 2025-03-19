import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileVideo = ({ ...props }: GenericIconProps) => (
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
            d="M9.896 1.186a.5.5 0 01.5.5v3.291h3.291a.5.5 0 010 1H9.896a.5.5 0 01-.5-.5V1.686a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66 1.49c.195-.195.46-.304.736-.304h6.5a.5.5 0 01.354.146l3.791 3.792a.5.5 0 01.147.353v8.667a1.042 1.042 0 01-1.042 1.041h-1.625a.5.5 0 110-1h1.625a.042.042 0 00.042-.042V5.685L9.689 2.186H3.396a.042.042 0 00-.042.041v5.959a.5.5 0 01-1 0V2.227c0-.276.11-.541.306-.736z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.854 10.852a.042.042 0 00-.042.042v2.708c0 .023.02.042.042.042h3.792a.042.042 0 00.042-.042v-2.708a.042.042 0 00-.042-.042H2.854zm-1.042.042c0-.576.467-1.042 1.042-1.042h3.792c.575 0 1.042.466 1.042 1.042v2.708c0 .575-.467 1.042-1.042 1.042H2.854a1.042 1.042 0 01-1.042-1.042v-2.708z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.617 10.198a.5.5 0 01.237.425v3.331a.5.5 0 01-.736.44L6.95 13.23a.5.5 0 11.473-.88l1.43.768v-1.686l-1.443.722a.5.5 0 11-.447-.895l2.167-1.083a.5.5 0 01.486.022z"
            fill="currentColor"
        />
    </svg>
);
