import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SlackLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8 6.565V8.19H3.125a1.625 1.625 0 110-3.25h3.25A1.625 1.625 0 018 6.565v0z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 4.94H6.375A1.618 1.618 0 014.75 3.315v0A1.618 1.618 0 016.375 1.69v0A1.618 1.618 0 018 3.315V4.94z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.625 8.19H8V3.315a1.625 1.625 0 113.25 0v3.25A1.625 1.625 0 019.625 8.19v0z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.25 8.19V6.565a1.617 1.617 0 011.625-1.625v0A1.618 1.618 0 0114.5 6.565v0a1.617 1.617 0 01-1.625 1.625H11.25z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 9.815V8.19h4.875A1.625 1.625 0 0114.5 9.815v0a1.625 1.625 0 01-1.625 1.625h-3.25A1.625 1.625 0 018 9.815z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 11.44h1.625a1.619 1.619 0 011.625 1.625v0a1.618 1.618 0 01-1.625 1.625A1.619 1.619 0 018 13.065V11.44z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.375 8.19H8v4.875a1.625 1.625 0 01-1.625 1.625v0a1.625 1.625 0 01-1.625-1.625v-3.25A1.625 1.625 0 016.375 8.19v0z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.75 8.19v1.625a1.619 1.619 0 01-1.625 1.625v0A1.619 1.619 0 011.5 9.815 1.618 1.618 0 013.125 8.19H4.75z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
