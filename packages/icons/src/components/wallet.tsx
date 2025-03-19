import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Wallet = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.63 1.271a.63.63 0 000 1.261h11.305A1.065 1.065 0 0114 3.598v7.913a1.065 1.065 0 01-1.065 1.065H1.63A1.63 1.63 0 010 10.946V1.901A1.63 1.63 0 011.63.272h9.61a.5.5 0 110 1H1.63zM1 3.406v7.54a.63.63 0 00.63.63h11.305A.065.065 0 0013 11.51V3.598a.065.065 0 00-.065-.066H1.63A1.63 1.63 0 011 3.406z"
            fill="currentColor"
        />
        <path
            d="M10.019 8.176a.75.75 0 100-1.5.75.75 0 000 1.5z"
            fill="currentColor"
        />
    </svg>
);
