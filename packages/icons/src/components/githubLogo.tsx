import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const GithubLogo = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.14 14.69a1.554 1.554 0 001.56-1.56v-3.12M10.86 14.69a1.555 1.555 0 01-1.56-1.56v-3.12M9.56 10.01h1.04a1.553 1.553 0 011.56 1.56v.52a1.553 1.553 0 001.56 1.56M6.44 10.01H5.4a1.553 1.553 0 00-1.56 1.56v.52a1.554 1.554 0 01-1.56 1.56"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.946 3.25A3.38 3.38 0 004.1 1.69a3.38 3.38 0 00-.227 2.906 3.204 3.204 0 00-.553 1.774v.52a3.12 3.12 0 003.12 3.12h3.12a3.12 3.12 0 003.12-3.12v-.52a3.204 3.204 0 00-.552-1.774 3.378 3.378 0 00-.228-2.906 3.38 3.38 0 00-2.847 1.56H6.946z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
