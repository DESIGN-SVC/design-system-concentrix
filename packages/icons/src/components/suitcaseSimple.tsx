import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SuitcaseSimple = ({ ...props }: GenericIconProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.042 4.708A.042.042 0 002 4.75v8.667c0 .023.019.042.042.042h11.916a.042.042 0 00.042-.042V4.75a.042.042 0 00-.042-.042H2.042zM1 4.75c0-.575.466-1.042 1.042-1.042h11.916c.576 0 1.042.467 1.042 1.042v8.667c0 .575-.466 1.042-1.042 1.042H2.042A1.042 1.042 0 011 13.417V4.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.256 2.006c.297-.297.7-.464 1.12-.464h3.25a1.583 1.583 0 011.583 1.583V4.21a.5.5 0 01-1 0V3.125a.583.583 0 00-.584-.583h-3.25a.583.583 0 00-.583.583V4.21a.5.5 0 01-1 0V3.125c0-.42.167-.822.464-1.12zM1 10.167a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
