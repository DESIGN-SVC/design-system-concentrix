import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Screencast = ({ ...props }: GenericIconProps) => (
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
            d="M1 13.723a.5.5 0 01.5-.5h.006a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM2.8 3.823a.8.8 0 00-.8.8v1.3a.5.5 0 01-1 0v-1.3a1.8 1.8 0 011.8-1.8h10.4a1.8 1.8 0 011.8 1.8v7.8a1.8 1.8 0 01-1.8 1.8H9.3a.5.5 0 110-1h3.9a.8.8 0 00.8-.8v-7.8a.8.8 0 00-.8-.8H2.8zM1.003 8.5a.5.5 0 01.552-.441 6.35 6.35 0 015.61 5.609.5.5 0 11-.994.11 5.35 5.35 0 00-4.726-4.725.5.5 0 01-.442-.553zm.007 2.588a.5.5 0 01.59-.39 3.75 3.75 0 012.925 2.925.5.5 0 01-.98.2A2.75 2.75 0 001.4 11.678a.5.5 0 01-.39-.59z"
            fill="currentColor"
        />
    </svg>
);
