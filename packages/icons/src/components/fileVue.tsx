import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const FileVue = ({ ...props }: GenericIconProps) => (
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
            d="M11.315 12.99a.5.5 0 01.5-.5h1.696a.5.5 0 010 1h-1.696a.5.5 0 01-.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.315 11.294a.5.5 0 01.5-.5h1.979a.5.5 0 010 1h-1.479v2.392h1.479a.5.5 0 010 1h-1.979a.5.5 0 01-.5-.5v-3.392zM2.014 10.832a.5.5 0 01.654.27l.951 2.283.952-2.283a.5.5 0 11.923.384L4.08 14.878a.5.5 0 01-.923 0l-1.413-3.392a.5.5 0 01.269-.654zM7.01 10.794a.5.5 0 01.5.5v2.12a.772.772 0 101.544 0v-2.12a.5.5 0 011 0v2.12a1.772 1.772 0 11-3.543 0v-2.12a.5.5 0 01.5-.5zM3.054 2.186a.065.065 0 00-.065.065v6.217a.5.5 0 01-1 0V2.251a1.065 1.065 0 011.065-1.065h6.783a.5.5 0 01.354.146l3.956 3.957a.5.5 0 01.147.353v2.826a.5.5 0 01-1 0V5.85L9.63 2.186H3.054z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.837 1.186a.5.5 0 01.5.5v3.456h3.456a.5.5 0 110 1H9.837a.5.5 0 01-.5-.5V1.686a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
