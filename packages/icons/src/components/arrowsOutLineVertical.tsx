import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const ArrowsOutLineVertical = ({ ...props }: GenericIconProps) => (
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
            d="M2.4 8.376a.5.5 0 01.5-.5h10.214a.5.5 0 010 1H2.899a.5.5 0 01-.5-.5zM8.007 1.376a.5.5 0 01.5.5v4.643a.5.5 0 11-1 0V1.876a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.653 1.522a.5.5 0 01.707 0l1.857 1.858a.5.5 0 01-.707.707L8.007 2.583 6.503 4.087a.5.5 0 01-.707-.707l1.857-1.858zM8.007 9.733a.5.5 0 01.5.5v4.643a.5.5 0 01-1 0v-4.643a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.796 12.665a.5.5 0 01.707 0l1.504 1.504 1.503-1.504a.5.5 0 11.707.707L8.36 15.23a.5.5 0 01-.707 0l-1.857-1.857a.5.5 0 010-.707z"
            fill="currentColor"
        />
    </svg>
);
