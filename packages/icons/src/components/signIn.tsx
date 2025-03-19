import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const SignIn = ({ ...props }: GenericIconProps) => (
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
            d="M6.317 4.544a.5.5 0 01.707 0l3.102 3.103a.5.5 0 010 .707l-3.101 3.102a.5.5 0 01-.708-.707L9.065 8 6.317 5.251a.5.5 0 010-.707z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 8a.5.5 0 01.5-.5h8.27a.5.5 0 110 1H1.5A.5.5 0 011 8z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.272 1.5a.5.5 0 01.5-.5h4.137a1.09 1.09 0 011.09 1.09v11.82A1.09 1.09 0 0113.91 15H9.772a.5.5 0 010-1h4.137a.091.091 0 00.09-.09V2.09a.09.09 0 00-.09-.09H9.772a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
    </svg>
);
