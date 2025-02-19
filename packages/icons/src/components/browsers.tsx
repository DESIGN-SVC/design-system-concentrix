import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Browsers = ({ ...props }: GenericIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.043 5.296A.042.042 0 002 5.338v7.583c0 .023.019.042.042.042h9.75a.042.042 0 00.04-.042V5.338a.042.042 0 00-.04-.042h-9.75zM1 5.338c0-.575.466-1.042 1.042-1.042h9.75c.575 0 1.04.467 1.04 1.042v7.583c0 .575-.466 1.042-1.04 1.042h-9.75A1.042 1.042 0 011 12.92V5.338z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.209 3.13a.042.042 0 00-.042.042v1.624a.5.5 0 01-1 0V3.172A1.042 1.042 0 014.209 2.13h9.75a1.042 1.042 0 011.04 1.042v7.582a1.042 1.042 0 01-1.04 1.042h-1.626a.5.5 0 010-1h1.625a.042.042 0 00.042-.041V3.171a.042.042 0 00-.042-.042h-9.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.963a.5.5 0 01.5-.5h10.833a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
