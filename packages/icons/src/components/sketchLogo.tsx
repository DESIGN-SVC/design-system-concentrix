import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SketchLogo = ({ ...props }: GenericIconProps) => (
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
            d="M4.374 2.522a.5.5 0 01.376-.17h6.5a.5.5 0 01.376.17l3.25 3.714a.5.5 0 01-.01.67l-6.5 6.965a.5.5 0 01-.732 0l-6.5-6.964a.5.5 0 01-.01-.67l3.25-3.715zm.603.83L2.174 6.554 8 12.797l5.826-6.242-2.803-3.204H4.977z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.351a.5.5 0 01.397.196l2.85 3.714a.5.5 0 01.065.494l-2.85 6.964a.5.5 0 01-.925 0l-2.85-6.964a.5.5 0 01.067-.494l2.85-3.714A.5.5 0 018 2.35zm0 1.322L5.722 6.642 8 12.209l2.278-5.567L8 3.672z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.565a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
