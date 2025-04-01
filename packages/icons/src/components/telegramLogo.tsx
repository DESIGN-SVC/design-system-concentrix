import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const TelegramLogo = ({ ...props }: GenericIconProps) => (
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
            d="M13.613 1.92a1.019 1.019 0 011.362 1.17v.004l-2.438 10.645a1.02 1.02 0 01-1.668.535L5.144 9.235l-3.325-.667h-.002C.837 8.366.687 6.994 1.643 6.62l11.968-4.7h.002zm.361.932L2.01 7.552A.067.067 0 002 7.554.037.037 0 002 7.568c0 .01.004.015.005.016l.002.001a.06.06 0 00.01.003l3.454.693a.5.5 0 01.232.115l5.829 5.129a.019.019 0 00.03-.01L14 2.873a.02.02 0 000-.01.02.02 0 00-.006-.008.019.019 0 00-.019-.003z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6 2.106a.5.5 0 01-.112.698L5.665 9.177a.5.5 0 11-.586-.81l8.824-6.373a.5.5 0 01.698.112z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.372 8.271a.5.5 0 01.5.5v4.22a.019.019 0 00.022.018.018.018 0 00.01-.005l.003-.003 2.022-2.022a.5.5 0 11.707.707l-2.021 2.021a1.018 1.018 0 01-1.743-.714V8.77a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
