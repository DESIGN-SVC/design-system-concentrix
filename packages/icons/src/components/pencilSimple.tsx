import React from "react";

type GenericIconProps = React.ComponentPropsWithoutRef<"svg">;

export const PencilSimple = ({ ...props }: GenericIconProps) => (
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
            d="M10.71 2.615c-.02 0-.04.008-.054.022l-8.634 8.634a.076.076 0 00-.022.054v3.215a.076.076 0 00.076.075h3.246l8.656-8.656a.076.076 0 000-.107l-3.215-3.215a.076.076 0 00-.054-.022zm-.761-.685a1.076 1.076 0 011.52 0l3.216 3.215a1.076 1.076 0 010 1.521L5.883 15.47a.5.5 0 01-.354.146H2.076A1.076 1.076 0 011 14.54v-3.215a1.075 1.075 0 01.315-.761L9.949 1.93z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.054 3.826a.5.5 0 01.707 0l4.029 4.029a.5.5 0 01-.707.707l-4.03-4.03a.5.5 0 010-.706z"
            fill="currentColor"
        />
    </svg>
);
