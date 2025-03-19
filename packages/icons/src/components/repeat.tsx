import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Repeat = ({ ...props }: GenericIconProps) => (
    <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.521.541a.5.5 0 01.708 0l1.625 1.625a.5.5 0 010 .707l-1.625 1.625a.5.5 0 01-.708-.707l1.272-1.271-1.272-1.272a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.833 3.02A3.833 3.833 0 001 6.853a.5.5 0 11-1 0A4.833 4.833 0 014.833 2.02H13.5a.5.5 0 010 1H4.833zM2.479 9.207a.5.5 0 010 .708l-1.272 1.271 1.272 1.271a.5.5 0 11-.708.708L.146 11.54a.5.5 0 010-.707l1.625-1.626a.5.5 0 01.708 0z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 6.353a.5.5 0 01.5.5 4.833 4.833 0 01-4.833 4.833H.5a.5.5 0 010-1h8.667A3.833 3.833 0 0013 6.853a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
