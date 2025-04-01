import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const BehanceLogo = ({ ...props }: GenericIconProps) => (
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
            d="M9.5 5.19a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM10.592 7.056A2.994 2.994 0 0115 9.689a.5.5 0 01-.5.501h-4.425a1.994 1.994 0 003.34.915.5.5 0 11.707.708A2.993 2.993 0 019.015 9.81a.501.501 0 010-.244 2.994 2.994 0 011.577-2.511zm-.515 2.134h3.858a1.994 1.994 0 00-3.858 0zM1 4.19a.5.5 0 01.5-.5h3.375a2.375 2.375 0 011.771 3.957 2.625 2.625 0 01-1.021 5.043H1.5a.5.5 0 01-.5-.5v-8zm1 4.25v3.25h3.625a1.625 1.625 0 000-3.25H2zm2.875-1H2V4.69h2.875a1.375 1.375 0 010 2.75z"
            fill="currentColor"
        />
    </svg>
);
