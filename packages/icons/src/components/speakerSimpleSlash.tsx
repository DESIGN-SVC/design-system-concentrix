import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SpeakerSimpleSlash = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.496 5.08a.5.5 0 01.5.5V8.7a.5.5 0 01-1 0V5.58a.5.5 0 01.5-.5zM13.5 4.04a.5.5 0 01.5.5v5.2a.5.5 0 01-1 0v-5.2a.5.5 0 01.5-.5zM1.034.29a.5.5 0 01.706.035l11.8 13a.5.5 0 11-.74.672L1 .997A.5.5 0 011.034.29zM9.04.45a.5.5 0 01.281.45v4.864a.5.5 0 11-1 0V1.922L6.537 3.309a.5.5 0 11-.613-.79L8.514.506A.5.5 0 019.041.45z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.02 5.04a.02.02 0 00-.02.02v4.16a.02.02 0 00.02.02h3.12a.5.5 0 01.307.106l3.874 3.013V8.857a.5.5 0 111 0v4.524a.5.5 0 01-.807.395L3.969 10.24H1.02A1.02 1.02 0 010 9.22V5.06A1.02 1.02 0 011.02 4.04h3.877a.5.5 0 010 1H1.02z"
            fill="currentColor"
        />
    </svg>
);
