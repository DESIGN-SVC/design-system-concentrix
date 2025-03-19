import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const Headphones = ({ ...props }: GenericIconProps) => (
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
            d="M5.328 2.938A6.95 6.95 0 018 2.424a6.95 6.95 0 017 6.951v3.764a1.575 1.575 0 01-1.575 1.575H12.35a1.575 1.575 0 01-1.575-1.575V10.45a1.575 1.575 0 011.575-1.576h1.629a5.953 5.953 0 00-5.975-5.45h-.008a5.95 5.95 0 00-5.975 5.45h1.63a1.575 1.575 0 011.575 1.576v2.688a1.575 1.575 0 01-1.576 1.575H2.575A1.575 1.575 0 011 13.139V9.375a6.951 6.951 0 014.328-6.437zM2 9.875v3.264a.575.575 0 00.575.575H3.65a.575.575 0 00.576-.575V10.45a.575.575 0 00-.576-.576H2zm12 0h-1.65a.575.575 0 00-.575.576v2.688a.576.576 0 00.575.575h1.075a.575.575 0 00.575-.575V9.875zm-6-6.95z"
            fill="currentColor"
        />
    </svg>
);
