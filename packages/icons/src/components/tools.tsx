import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Tools = ({ ...props }: GenericIconProps) => (
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
            d="M12.723 1.147a.5.5 0 010 .707l-.713.713.393 1.021 1.02.393.714-.713a.5.5 0 11.707.707l-.713.713a1 1 0 01-1.066.226l-1.436-.552-.553-1.436a1 1 0 01.226-1.066l.714-.713a.5.5 0 01.707 0zM3.296 14.854a.5.5 0 010-.708l.713-.713-.393-1.021-1.021-.393-.713.713a.5.5 0 01-.707-.707l.713-.713a1 1 0 011.066-.226l1.436.552.552 1.436a1 1 0 01-.226 1.066l-.713.713a.5.5 0 01-.707 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.646 11.646l8-8 .707.708-8 8-.707-.708z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.145 1.146a.5.5 0 01.707 0l8 8-.707.708-8-8a.5.5 0 010-.708z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.678 9.236L9.264 10.65l3.323 3.324 1.414-1.414-3.323-3.324zm-2.121.707a1 1 0 000 1.415l3.323 3.323a1 1 0 001.414 0l1.415-1.414a1 1 0 000-1.415L11.385 8.53a1 1 0 00-1.414 0L8.557 9.943z"
            fill="currentColor"
        />
    </svg>
);
